import { AppUserConfigs, BlockEntity, LSPluginBaseInfo, PageEntity, } from "@logseq/libs/dist/LSPlugin"
import { format } from "date-fns"
import { getJournalDayDate } from "./lib"
import { t } from "logseq-l10n"
let processing: Boolean = false
//設定画面から項目をオンにする→スタート画面が出る→スタート画面で実行ボタンを押す→実行ボタンを押したときのイベント処理

//トリガー
export const loadLegacyDateFormatReplace = async () => {
  logseq.onSettingsChanged(
    async (
      newSet: LSPluginBaseInfo["settings"],
      oldSet: LSPluginBaseInfo["settings"]
    ) => {
      if (oldSet.loadLegacyDateFormatReplace === false
        && newSet.loadLegacyDateFormatReplace === true) {
        openStartWindow()
        setTimeout(() => logseq.updateSettings({ loadLegacyDateFormatReplace: false }), 300)
      }
    }
  )
}

//設定項目がオンになったとき
const openStartWindow = async () => {

  const { preferredDateFormat } = (await logseq.App.getUserConfigs()) as { preferredDateFormat: AppUserConfigs["preferredDateFormat"] }
  try {
    if (preferredDateFormat === logseq.settings!.legacyDateFormatSelect) {
      //古いフォーマットと新しいフォーマットが同じ場合
      logseq.UI.showMsg(t("Formats have not changed."), "warning", { timeout: 5000, })
      return
    }
    //今日の日付でフォーマットしてみる
    const today = new Date()
    const legacyTodayStr = format(today, logseq.settings!.legacyDateFormatSelect)
    const newTodayStr = format(today, preferredDateFormat)
    //スタート画面を表示
    logseq.provideUI({
      key: "legacyDateFormatStartWindow",
      attrs: {
        title: t("Replace previous date format"),
      },
      close: "outside",
      reset: true,
      //
      template: `
      <div>
      <table>
        <tr><th></th><th>${t("selected (previous)")}</th><th>${t("new format")}</th> </tr>
        <tr><td>${t("Date format")}</td><td>${logseq.settings!.legacyDateFormatSelect
        }</td><td>${preferredDateFormat}</td></tr>
        <tr><td>${t("Today")}</td><td>${legacyTodayStr}</td><td>${newTodayStr}</td></tr>
      </table>
      <p>⚠️${t("If the format displayed here is incorrect, refrain from running.")}</p>
      <hr/>
      <p>
        ⚠️${t("Please back up your data before running.")}<br/>
        <br/>
        1. ${t("Prior to proceeding, it's recommended to take a complete backup of the entire folder. This involves replacing strings matching the specified date format. Flawless performance and operation without any issues cannot be guaranteed.")}<br/>
      </p>
      <hr/>
      <p>${t("If you have a lot of file, it may take a long time to run.")}</p>
      <p><button id="legacyDateFormatStartButton" class="ui__button">${t("Run (Replace)")}</button></p>
      </div>
      <style>
        button#legacyDateFormatStartButton{
            background-color: var(--ls-block-properties-background-color--);
            border: 1px solid var(--ls-block-properties-text-color);
            border-radius: 5px;
            padding: 1em;
            user-select: none;
            font-size: 1.4em;
            color:var(--ls-link-ref-text-hover-color);
        }
      </style>
            `,
      style: {
        color: "var(--ls-primary-text-color)",
        backgroundColor: "var(--ls-primary-background-color)",
        padding: "0.5em",
        margin: "0.2em",
        borderRadius: "5px",
        position: "fixed",
        top: "5em",
        right: "5em",
        zIndex: "1000",
        outline: "2px solid var(--ls-link-ref-text-hover-color)",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
        width: "500px",
        height: "620px",
      },
    })
  } finally {
    setTimeout(() => {
      //実行ボタンが押されたときのイベント処理
      const startButton = parent.document.getElementById(
        "legacyDateFormatStartButton"
      ) as HTMLButtonElement
      startButton.addEventListener("click", async () => {
        if (processing) return
        processing = true
        //実行中メッセージ
        const messageKey = await logseq.UI.showMsg(t("Running..."), "info", { timeout: 100000, })
        //処理
        await replaceAllJournalLink(messageKey, preferredDateFormat)
        processing = false
      })
    }, 100)
  }
}

//
const replaceAllJournalLink = async (messageKey, preferredDateFormat) => {
  //すべてのページを取得
  const allPagesArr = (await logseq.Editor.getAllPages()) as { journal?: PageEntity["journal?"], journalDay?: PageEntity["journalDay"] }[] | null
  if (!allPagesArr) return
  //日誌ページのみを取得
  const journalPagesArr = allPagesArr.filter(
    (page) => page["journal?"]
      && page.journalDay
  )
  //日誌ページからフォーマットの連想配列を作成する(キーに古いフォーマット、値に新しいフォーマット)
  const journalDaysObj = {}
  journalPagesArr.forEach((page) =>
    //連想配列に入れる
    journalDaysObj[(format(getJournalDayDate(String(page.journalDay)), logseq.settings!.legacyDateFormatSelect))] = format(getJournalDayDate(String(page.journalDay)), preferredDateFormat)
  )

  //journalDaysObjのforeach
  await queryAndReplace(journalDaysObj)

  logseq.UI.closeMsg(messageKey)
  logseq.UI.showMsg(t("Finish."), "info", { timeout: 5000 })
}

const queryAndReplace = (journalDaysObj: {}) =>
  new Promise(async (resolve) => {
    for (const key of Object.keys(journalDaysObj)) {
      // 古いフォーマットの各日付に一致するものをクエリーで検索する
      const result: any[] = await logseq.DB.datascriptQuery(
        `
    [:find (pull ?b [*])
     :where
     [?b :block/content ?c]
     [(re-pattern "${key}") ?p]
     [(re-find ?p ?c)]
    ]
    `
      )
      if (result.length > 0)
        for (const blocks of result)
          for (const block of blocks) {
            const legacyFormat: string = key
            const newFormat: string = journalDaysObj[key]

            await logseq.Editor.updateBlock(
              (block as BlockEntity).uuid,
              (block as BlockEntity).content.replaceAll(legacyFormat, newFormat) // 新しいフォーマットから古いフォーマットに置き換える
            )
          }
    }

    resolve(0)
  })
