import { PageEntity, BlockEntity } from "@logseq/libs/dist/LSPlugin.user"

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

// 特定ワードにマッチするブロックを取得するクエリ
export const matchWordBlocks = async (dateFormat: string): Promise<{ content: BlockEntity["content"], uuid: BlockEntity["uuid"] }[] | null> => {
  const query = `
    [:find (pull ?b [:block/content :block/uuid])
     :where
     [?b :block/content ?c]
     [(re-pattern "${dateFormat}") ?p]
     [(re-find ?p ?c)]
    ]
  `
  const result = await advancedQuery<{ content: BlockEntity["content"], uuid: BlockEntity["uuid"] }[]>(query)
  if (!result) return null
  return result
}