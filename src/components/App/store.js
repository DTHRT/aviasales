import { configureStore } from '@reduxjs/toolkit'

import tabFilterReducer from '../../features/tabFilter/tabFilterSlice'
import checkboxFilterReducer from '../../features/checkboxFilter/checkboxFilterSlice'

export default configureStore({
  reducer: {
    filter: tabFilterReducer,
    checkboxFilter: checkboxFilterReducer,
  },
})
