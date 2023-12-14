export default function formatTimeDifference(startDate, endDate) {
  const date1 = new Date(startDate)
  const date2 = new Date(endDate)

  const diffInMilliseconds = Math.abs(date2 - date1)

  const hours = Math.floor(diffInMilliseconds / (1000 * 60 * 60))
  const minutes = Math.floor((diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60))

  return `${hours}ч ${minutes}м`
}
