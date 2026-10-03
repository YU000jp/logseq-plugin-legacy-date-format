import "@logseq/libs" //https://plugins-doc.logseq.com/
import { setup as l10nSetup } from "logseq-l10n" //https://github.com/sethyuan/logseq-l10n
import ja from "./translations/ja.json"
import af from "./translations/af.json"
import de from "./translations/de.json"
import es from "./translations/es.json"
import fr from "./translations/fr.json"
import id from "./translations/id.json"
import it from "./translations/it.json"
import ko from "./translations/ko.json"
import nbNO from "./translations/nb-NO.json"
import nl from "./translations/nl.json"
import pl from "./translations/pl.json"
import ptBR from "./translations/pt-BR.json"
import ptPT from "./translations/pt-PT.json"
import ru from "./translations/ru.json"
import sk from "./translations/sk.json"
import tr from "./translations/tr.json"
import uk from "./translations/uk.json"
import zhCN from "./translations/zh-CN.json"
import zhHant from "./translations/zh-Hant.json"

import { loadLegacyDateFormatRedirect } from "./redirect"
import { loadLegacyDateFormatReplace } from "./replace"
import { settingsTemplate } from "./settings"
import { loadDateFormatDemo } from "./demoDateFormat"

// グラフ種別判定(公式API。0.10.xホストでは未実装 → false)
const checkLogseqDbGraph = async (): Promise<boolean> => {
  try {
    const value = await (logseq.App as any).checkCurrentIsDbGraph()
    return typeof value === "boolean" ? value : false
  } catch {
    return false // API非搭載ホスト = DBグラフを開けない旧アプリ
  }
}

const showDbGraphIncompatibilityMsg = () =>
  logseq.UI.showMsg("This plugin does not support the Logseq DB model. Please use this plugin with file-based graphs only.", "error")

/* main */
const main = async () => {
  if (await checkLogseqDbGraph()) {
    await showDbGraphIncompatibilityMsg()
    return
  }
  // グラフ切替でDBグラフへ移った場合も警告する
  logseq.App.onCurrentGraphChanged(async () => {
    if (await checkLogseqDbGraph()) showDbGraphIncompatibilityMsg()
  })

  await l10nSetup({
    builtinTranslations: {//Full translations
      ja, af, de, es, fr, id, it, ko, "nb-NO": nbNO, nl, pl, "pt-BR": ptBR, "pt-PT": ptPT, ru, sk, tr, uk, "zh-CN": zhCN, "zh-Hant": zhHant
    }
  })
  /* user settings */
  logseq.useSettingsSchema(settingsTemplate())
  if (!logseq.settings!.firstLoading)
    setTimeout(() => {
      logseq.showSettingsUI()
      logseq.updateSettings({ firstLoading: true })
    }, 300)

  //Legacy date format
  //トリガー: 設定項目がオンになったとき
  if (logseq.settings!.loadLegacyDateFormatRedirect === true)
    loadLegacyDateFormatRedirect()

  //設定画面から画面を開く
  loadLegacyDateFormatReplace()

  //デモ 設定画面から画面を開く
  loadDateFormatDemo()

} /* end_main */

logseq.ready(main).catch(console.error)
