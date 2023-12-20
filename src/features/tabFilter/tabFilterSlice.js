import { createSlice } from '@reduxjs/toolkit'

export const tabFilterSlice = createSlice({
  name: 'tabFilter',
  initialState: {
    value: 1,
  },
  reducers: {
    setTabFilter: (state, action) => ({
      ...state,
      value: action.payload,
    }),
  },
})

export const { setTabFilter } = tabFilterSlice.actions

export default tabFilterSlice.reducer
