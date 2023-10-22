export const getJournalDayDate = (str: string): Date =>
  new Date(
    Number(str.slice(0, 4)),
    Number(str.slice(4, 6)) - 1,
    Number(str.slice(6)) //day
  )
