export default function addMinutesToDateString(dateString, minutesToAdd) {
  const date = new Date(dateString)

  date.setMinutes(date.getMinutes() + minutesToAdd)

  return date.toISOString()
}
