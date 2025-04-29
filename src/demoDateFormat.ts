import {
  LSPluginBaseInfo,
} from "@logseq/libs/dist/LSPlugin"
import { format } from "date-fns"
import { t } from "logseq-l10n"
import { formatList } from "./settings"

//設定画面から項目をオンにする→スタート画面が出る
//トリガー
export const loadDateFormatDemo = async () => {
  logseq.onSettingsChanged(
    async (
      newSet: LSPluginBaseInfo["settings"],
      oldSet: LSPluginBaseInfo["settings"]
    ) => {
      if (oldSet.loadDateFormatDemo === false
        && newSet.loadDateFormatDemo === true) {
        openStartWindow()
        setTimeout(() => logseq.updateSettings({ loadDateFormatDemo: false }), 300)
      }
    }
  )
}

//設定項目がオンになったとき
const openStartWindow = async () => {
  //今日の日付でフォーマットしてみる
  const today = new Date()



  let tr: [string] = [""]
  formatList.forEach((item) => tr.push(`<tr><td>${item}</td><td>${format(today, item)}</td></tr>`))
  //スタート画面を表示
  logseq.provideUI({
    key: "dateFormatDemo",
    attrs: {
      title: t("All date format demo"),
    },
    close: "outside",
    reset: true,
    //
    template: `
      <div>
      <table>
        <th>${t("Date format")}</th><th>${t("Today")}</th></tr>
        ${tr.join("\n")}
      </table>
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
      height: "780px",
    },
  })
}
