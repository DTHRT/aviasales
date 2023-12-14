import { configureStore } from '@reduxjs/toolkit'

import tabFilterReducer from '../../features/tabFilter/tabFilterSlice'
import checkboxFilterReducer from '../../features/checkboxFilter/checkboxFilterSlice'
import ticketsReducer from '../../features/tickets/ticketsSlice'

import { selectFilteredTickets } from './selectors'

export default configureStore({
  reducer: {
    tabFilter: tabFilterReducer,
    checkboxFilter: checkboxFilterReducer,
    tickets: ticketsReducer,
  },
})

export { selectFilteredTickets }
