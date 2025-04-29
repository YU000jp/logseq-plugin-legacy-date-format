import { BlockEntity, PageEntity } from "@logseq/libs/dist/LSPlugin.user"
import { formatList } from "../settings"
import { before } from "node:test"

// クエリを実行
export const advancedQuery = async <T>(query: string, ...input: Array<string>): Promise<T | null> => {
  try {
    const result = await logseq.DB.datascriptQuery(query, ...input)
    return result?.flat() as T
  } catch (err) {
    console.warn("Query execution failed:", err)
    return null
  }
}

// フィールドを取得するクエリ
const createBaseQuery = (field: string): string => `
  [:find (pull ?b [:block/${field}])
   :in $ ?name
   :where
   [?b :block/original-name ?name]
   [?b :block/${field} ?${field}]] 
`
// ページのUUIDを取得
const queryCodeGetUuidFromOriginalName = createBaseQuery("uuid")

// ページが存在するかどうかを確認
export const isPageExist = async (pageName: string): Promise<boolean> => {
  const result = await advancedQuery<{ uuid: PageEntity["uuid"] }[]>(queryCodeGetUuidFromOriginalName, `"${pageName}"`)
  return !!result?.[0]?.uuid
}

// 現在のページの名前を取得
export const getCurrentPageOriginalName = async (): Promise<PageEntity["original-name"] | null> => {
  const query = `
    [:find (pull ?p [:block/original-name])
     :in $ ?current
     :where
     [?p :block/name ?name]
     [(= ?name ?current)]
     [?p :block/original-name ?original-name]]
  `
  const result = await advancedQuery<{ originalName: PageEntity["original-name"] }[]>(query, ":current-page")
  return result?.[0]?.["original-name"] ?? null
}

// 日誌ページを取得するクエリ（重複を排除）
export const getJournalPages = async (): Promise<string[] | null> => {
  const query = `
    [:find (pull ?p [:block/journal-day])
     :where
     [?p :block/journal? true]
     [?p :block/journal-day ?day]]
  `
  const result = await advancedQuery<{ "journal-day": number }[]>(query)
  if (!result) return null
  // journalDayの値だけを配列で返す (重複を排除)
  return [...new Set(result.map(item => item?.["journal-day"]?.toString()))] as string[]
}

// 複数ワードにマッチするブロックを一度に取得するクエリ
export const matchWordBlocks = async (words: string | string[]): Promise<{ content: BlockEntity["content"], uuid: BlockEntity["uuid"] }[] | null> => {
  const wordArray = Array.isArray(words) ? words : [words]
  const combinedPattern = wordArray.join("|") // 複数のワードを|で結合
  const query = `
    [:find (pull ?b [:block/content :block/uuid])
     :where
     [?b :block/content ?c]
     [(re-pattern "${combinedPattern}") ?p]
     [(re-find ?p ?c)]]
  `
  console.log("Combined query pattern (1950-2099):", combinedPattern)
  const result = await advancedQuery<{ content: BlockEntity["content"], uuid: BlockEntity["uuid"] }[]>(query)
  
  return result?.length ? result : null
}

// 正規表現で、日付フォーマットにマッチするブロックを取得するクエリ
export const matchWordBlocksRegExp = async (dateFormat: string): Promise<{ content: BlockEntity["content"], uuid: BlockEntity["uuid"] }[] | null> => {
  console.log("Current-dateFormat", dateFormat)
  const beforeDateFormat = logseq.settings!.legacyDateFormatSelect as string
  console.log("Before-dateFormat", beforeDateFormat)


  const regex = regexPattern(beforeDateFormat)

  console.log("Datalog regex pattern:", regex)

  // Datalogクエリの最適化
  const query = `
    [:find (pull ?b [:block/content :block/uuid])
     :where
     [?b :block/content ?c]
     [(re-pattern "${regex}") ?p]
     [(re-find ?p ?c)]
     [(not= ?c "")]]
  `
  console.log("query", query)
  const result = await advancedQuery<{ content: BlockEntity["content"], uuid: BlockEntity["uuid"] }[]>(query)
  if (!result) return null
  return result
}


// Datalog/Clojure正規表現パターンに変換
// 1950-2099
export const regexPattern = (dateFormat: string) =>
  dateFormat
    // 年のパターン
    .replace(/YYYY|yyyy/g, "(19[5-9][0-9]|20[0-9][0-9])")
    // 月のパターン
    .replace(/MMMM/g, "(January|February|March|April|May|June|July|August|September|October|November|December)")
    .replace(/MMM/g, "(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)")
    .replace(/MM/g, "(0[1-9]|1[0-2])")
    // 日のパターン
    .replace(/DD|dd/g, "(0[1-9]|[12][0-9]|3[01])")
    .replace(/do/g, "(1st|2nd|3rd|[0-9]th)")
    .replace(/d/g, "([1-9]|[12][0-9]|3[01])")
    // 曜日のパターン
    .replace(/EEEE/g, "(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)")
    .replace(/E{1,3}/g, "(Mon|Tue|Wed|Thu|Fri|Sat|Sun)")
    // 区切り文字 (Datalogの正規表現では特殊文字は自動的にエスケープされる)
    .replace(/[_./-]/g, "$&")
    // 日本語の年月日
    .replace(/[年月日]/g, "$&")