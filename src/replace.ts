import { AppUserConfigs, BlockEntity, LSPluginBaseInfo, PageEntity, UIMsgKey, } from "@logseq/libs/dist/LSPlugin"
import { format } from "date-fns"
import { getJournalDayDate } from "./lib"
import { t } from "logseq-l10n"
import { matchWordBlocks, getJournalPages, matchWordBlocksRegExp, regexPattern } from "./query/advancedQuery"
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
    const legacyTodayStr = format(today, logseq.settings!.legacyDateFormatSelect as string)
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
        const [regularCount, regexpCount] = await Promise.all([
          replaceAllJournalLink(preferredDateFormat),
          replaceJournalLinkRegExp(preferredDateFormat),
        ])
        const count = regularCount + regexpCount
        if (count > 0)
          await logseq.UI.showMsg(t("Finish. Updated {{count}} blocks.", { count: count.toString() }), "info", { timeout: 5000 })
        else
          await logseq.UI.showMsg(t("Finish. No blocks were updated."), "info", { timeout: 5000 })
        logseq.UI.closeMsg(messageKey)
        processing = false
      })
    }, 100)
  }
}

const replaceJournalLinkRegExp = async (preferredDateFormat: string): Promise<number> => {
  console.log("Start replaceJournalLinkRegExp")
  const result = await matchWordBlocksRegExp(preferredDateFormat) as { content: BlockEntity["content"], uuid: BlockEntity["uuid"] }[] | null
  if (!result) {
    console.log("End replaceJournalLinkRegExp - No blocks found")
    return 0
  }

  let updatedCount = 0
  for (const { content, uuid } of result) {
    const newContent = content.replaceAll("[[" + regexPattern(logseq.settings!.legacyDateFormatSelect as string) + "]]", "[[" + regexPattern(preferredDateFormat) + "]]")
    if (newContent !== content) {
      await logseq.Editor.updateBlock(uuid, newContent)
      console.log("Updated block:", uuid, newContent)
      updatedCount++
    }
  }
  console.log(`End replaceJournalLinkRegExp - Updated ${updatedCount} blocks`)
  return updatedCount
}

// // 日誌ページのリンクを置換する
const replaceAllJournalLink = async (preferredDateFormat: string): Promise<number> => {
  console.log("Start replaceAllJournalLink")
  const journalPagesArr = await getJournalPages() as string[] | null
  if (!journalPagesArr) {
    console.log("End replaceAllJournalLink - No journal pages found")
    return 0
  }

  const journalDayPairs = journalPagesArr.map((journalDay) => {
    const journalDate = getJournalDayDate(journalDay)
    return {
      legacyFormat: format(journalDate, logseq.settings!.legacyDateFormatSelect as string),
      newFormat: format(journalDate, preferredDateFormat),
    }
  })
  console.log("Generated format pairs:", journalDayPairs.length)

  const updatedCount = await queryAndReplace(journalDayPairs)
  console.log(`End replaceAllJournalLink - Updated ${updatedCount} blocks`)
  return updatedCount
}

// journalDayPairsを使って置換処理を実行する関数
const queryAndReplace = async (journalDayPairs: { legacyFormat: string, newFormat: string }[]): Promise<number> => {
  const legacyFormats = journalDayPairs.map(pair => pair.legacyFormat)
  const blocks = await matchWordBlocks(legacyFormats)

  if (!blocks || blocks.length === 0) {
    return 0
  }

  const formatMap = new Map(
    journalDayPairs.map(({ legacyFormat, newFormat }) => [`[[${legacyFormat}]]`, `[[${newFormat}]]`])
  )

  let updatedCount = 0

  // 各ブロックを処理
  for (const block of blocks) {
    let updatedContent = block.content
    let isUpdated = false

    // 各フォーマットペアで置換を試行
    for (const [legacyFormat, newFormat] of formatMap) {
      if (updatedContent.includes(legacyFormat)) {
        updatedContent = updatedContent.replaceAll(legacyFormat, newFormat)
        isUpdated = true
      }
    }

    // 変更があった場合のみ更新
    if (isUpdated) {
      await logseq.Editor.updateBlock(block.uuid, updatedContent)
      console.log(`Updated block ${block.uuid}`)
      updatedCount++
    }
  }

  return updatedCount
}

// 正規表現のエスケープ用ヘルパー関数
const escapeRegExp = (string: string): string => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
