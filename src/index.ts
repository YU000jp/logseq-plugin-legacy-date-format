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

/* main */
const main = async () => {
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
