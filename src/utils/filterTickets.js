export default function filterTickets(tickets, checkboxes) {
  const checkedCheckboxes = checkboxes.filter((filter) => filter.checked)

  if (checkedCheckboxes.length === 0) {
    return []
  }

  const isAllChecked = checkedCheckboxes.some((item) => item.value === 'all')

  if (isAllChecked) {
    return tickets
  }

  const resTickets = []

  checkedCheckboxes.forEach((item) => {
    const arr = tickets.filter((ticket) => {
      const [{ stops: stops1 }, { stops: stops2 }] = ticket.segments
      const maxStops = Math.max(stops1.length, stops2.length)
      return maxStops === item.value
    })
    resTickets.push(...arr)
  })

  return resTickets
}
