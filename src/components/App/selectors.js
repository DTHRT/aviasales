/* eslint-disable */
import filterTickets from '../../utils/filterTickets'
import tabFilterTickets from '../../utils/tabFilterTickets'

export const selectFilteredTickets = (state) => {
  const { tickets } = state.tickets
  const { checkboxes } = state.checkboxFilter
  const { value } = state.tabFilter

  if (tickets.length === 0) {
    return []
  }

  return tabFilterTickets(filterTickets(tickets, checkboxes), value)
}
