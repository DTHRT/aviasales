/* eslint-disable */
import filterTickets from '../../utils/filterTickets'

export const selectFilteredTickets = (state) => {
  const { tickets } = state.tickets
  const { checkboxes } = state.checkboxFilter

  if (tickets.length === 0) {
    return []
  }

  return filterTickets(tickets, checkboxes)
}
