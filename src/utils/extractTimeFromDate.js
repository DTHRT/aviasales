export default function extractTimeFromDate(dateString) {
  const date = new Date(dateString)

  const hours = date.getHours()
  const minutes = date.getMinutes()

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}
