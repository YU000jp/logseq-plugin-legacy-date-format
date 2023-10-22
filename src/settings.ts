import { SettingSchemaDesc } from "@logseq/libs/dist/LSPlugin.user";
import { t } from "logseq-l10n"

/* user setting */
// https://logseq.github.io/plugins/types/SettingSchemaDesc.html
export const settingsTemplate: SettingSchemaDesc[] = [
  {
    //loadLegacyDateFormat
    key: "headingLoadLegacyDateFormat",
    title: t("Support previous date format"),
    type: "heading",
    default: "",
    description: "",
  },
  {
    //日付フォーマットの選択
    key: "legacyDateFormatSelect",
    title: t("Select previous date format"),
    type: "enum",
    //<option>E, MM/dd/yyyy</option><option>E, dd-MM-yyyy</option><option>E, dd.MM.yyyy</option><option>E, yyyy/MM/dd</option><option>EEE, MM/dd/yyyy</option><option>EEE, dd-MM-yyyy</option><option>EEE, dd.MM.yyyy</option><option>EEE, yyyy/MM/dd</option><option>EEEE, MM/dd/yyyy</option><option>EEEE, dd-MM-yyyy</option><option>EEEE, dd.MM.yyyy</option><option>EEEE, yyyy/MM/dd</option><option>MM-dd-yyyy</option><option>MM/dd/yyyy</option><option>MMM do, yyyy</option><option>MMMM do, yyyy</option><option>MM_dd_yyyy</option><option>dd-MM-yyyy</option><option>do MMM yyyy</option><option>do MMMM yyyy</option><option>yyyy-MM-dd</option><option>yyyy-MM-dd EEEE</option><option>yyyy/MM/dd</option><option>yyyyMMdd</option><option>yyyy_MM_dd</option><option>yyyy年MM月dd日</option><
    enumChoices: [
      "E, d MMMM yyyy",
      "E, MM/dd/yyyy",
      "E, dd-MM-yyyy",
      "E, dd.MM.yyyy",
      "E, yyyy/MM/dd",
      "EEE, MM/dd/yyyy",
      "EEE, dd-MM-yyyy",
      "EEE, dd.MM.yyyy",
      "EEE, yyyy/MM/dd",
      "EEEE, MM/dd/yyyy",
      "EEEE, dd-MM-yyyy",
      "EEEE, dd.MM.yyyy",
      "EEEE, yyyy/MM/dd",
      "MM-dd-yyyy",
      "MM/dd/yyyy",
      "dd-MM-yyyy",
      "dd.MM.yyyy",
      "yyyy/MM/dd",
      "MM-dd-yyyy",
      "MM/dd/yyyy",
      "MMM do, yyyy",
      "MMMM do, yyyy",
      "MM_dd_yyyy",
      "dd-MM-yyyy",
      "do MMM yyyy",
      "do MMMM yyyy",
      "yyyy-MM-dd",
      "yyyy-MM-dd EEEE",
      "yyyy/MM/dd",
      "yyyyMMdd",
      "yyyy_MM_dd",
      "yyyy年MM月dd日",
    ],
    default: "yyyy/MM/dd",
    description: "",
  },
  {
    //loadLegacyDateFormat
    key: "loadLegacyDateFormatReplace",
    title: t("Replace from the previous Format to new format."),
    type: "boolean",
    default: false,
    description: t("Open the dialog on click"),
  },
  {
    //loadLegacyDateFormat
    key: "loadLegacyDateFormatRedirect",
    title: t("Redirect the link of previous date format to the journal page"),
    type: "boolean",
    default: false,
    description:
      t("When opening the page, if the title matches the previous format, it will redirect to the journal page. Enabling this option prevents links from becoming inactive."),
  },
  {//日付フォーマットのデモンストレーション
    key: "loadDateFormatDemo",
    title: t("All date format demo"),
    type: "boolean",
    default: false,
    description: t("Open the dialog on click"),
  }
];
