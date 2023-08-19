import "@logseq/libs"; //https://plugins-doc.logseq.com/
//import { setup as l10nSetup, t } from "logseq-l10n"; //https://github.com/sethyuan/logseq-l10n
//import ja from "./translations/ja.json";
import { loadLegacyDateFormatRedirect } from "./redirect";
import { loadLegacyDateFormatReplace } from "./replace";
import { settingsTemplate } from "./settings";

/* main */
const main = () => {
  // (async () => {
  //   try {
  //     await l10nSetup({ builtinTranslations: { ja } });
  //   } finally {
  /* user settings */
  logseq.useSettingsSchema(settingsTemplate);
  if (!logseq.settings!.firstLoading)
    setTimeout(() => {
      logseq.showSettingsUI();
      logseq.updateSettings({ firstLoading: true });
    }, 300);
  //   }
  // })();

  //Legacy date format
  //トリガー: 設定項目がオンになったとき
  if (logseq.settings!.loadLegacyDateFormatRedirect === true)
    loadLegacyDateFormatRedirect();

  //設定画面から画面を開く
  loadLegacyDateFormatReplace();
}; /* end_main */

logseq.ready(main).catch(console.error);
