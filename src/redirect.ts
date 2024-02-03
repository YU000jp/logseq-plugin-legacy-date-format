import { AppUserConfigs, PageEntity } from "@logseq/libs/dist/LSPlugin"
import { format, isValid, parse } from "date-fns"
import { t } from "logseq-l10n"
let processingPageName = ""
export const loadLegacyDateFormatRedirect = () => {
  //ページを開いたとき
  logseq.App.onPageHeadActionsSlotted(async () => {
    let pageName = parent.document.querySelector("h1.page-title")
      ?.textContent as string | null | undefined
    if (!pageName) {
      const current = (await logseq.Editor.getCurrentPage()) as { originalName: PageEntity["originalName"] } | null
      if (current)
        pageName = current.originalName
      else return
    }
    checkDateFormat(pageName)
  })
  logseq.App.onRouteChanged(async ({ path, template }) => {
    if (template === "/page/:name") {
      //journalは、template === '/'
      let pageName = path.replace(/\/page\//, "")
      pageName = pageName.replaceAll("%2F", "/")
      pageName = pageName.replaceAll("%2C", ",")
      if (pageName) checkDateFormat(pageName)
    }
  })
  //consoleTestFormat();//test
}

const checkDateFormat = async (pageName: string) => {
  if (processingPageName === pageName) return
  //pageNameに数値ひとつでも含まれているかどうかをチェックする
  if (!pageName.match(/\d/)) return
  const legacyDateFormat = logseq.settings!.legacyDateFormatSelect
  if (!legacyDateFormat) return
  const { preferredDateFormat } = (await logseq.App.getUserConfigs()) as { preferredDateFormat: AppUserConfigs["preferredDateFormat"] }
  //pageNameの文字列が日付フォーマットにマッチするかどうかをチェックする
  // 文字列を指定したフォーマットで解析し、正しい日付オブジェクトを取得
  const parsedDate: Date = parse(pageName, legacyDateFormat, new Date())
  if (!isValid(parsedDate)) return //Date型に日付が存在するかどうか
  await matchDateFormat(pageName, parsedDate, preferredDateFormat) //一致した場合
}

const matchDateFormat = async (pageName: string, parsedDate: Date, preferredDateFormat: string) => {
  processingPageName = pageName
  logseq.UI.showMsg(t("Matched the previous date format"))
  //ページ移動
  const formatPageName = format(parsedDate, preferredDateFormat)
  if ((await logseq.Editor.getPage(formatPageName)) as { uuid: PageEntity["uuid"] } | null)
    logseq.App.replaceState("page", { name: formatPageName })
  processingPageName = ""
}

// const consoleTestFormat = () => {
//   //コンソールでフォーマットのトークンに対応しているかチェック
//   const formatSelect = [
//     "MM/dd/yyyy",
//     "dd-MM-yyyy",
//     "dd.MM.yyyy",
//     "yyyy/MM/dd",
//     "MM-dd-yyyy",
//     "MM/dd/yyyy",
//     "MMM do, yyyy",
//     "MMMM do, yyyy",
//     "MM_dd_yyyy",
//     "dd-MM-yyyy",
//     "do MMM yyyy",
//     "do MMMM yyyy",
//     "yyyy-MM-dd",
//     "yyyy-MM-dd EEEE",
//     "yyyy/MM/dd",
//     "yyyyMMdd",
//     "yyyy_MM_dd",
//     "yyyy年MM月dd日",
//   ];
//   formatSelect.forEach((f) => {
//     const parsedDate = format(new Date(), f);
//     console.log(f, parsedDate);
//   });
// };
