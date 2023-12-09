/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  checkboxes: [
    { id: 0, text: 'Все', checked: false },
    { id: 1, text: 'Без пересадок', checked: false },
    { id: 2, text: '1 пересадка', checked: false },
    { id: 3, text: '2 пересадки', checked: false },
    { id: 4, text: '3 пересадки', checked: false },
  ],
}

const checkboxSlice = createSlice({
  name: 'checkboxFilter',
  initialState,
  reducers: {
    toggleCheckbox: (state, action) => {
      const { checkboxes } = state
      const { payload: id } = action
      const targetCheckbox = checkboxes.find((item) => item.id === id)

      switch (targetCheckbox.text) {
        case 'Все':
          if (targetCheckbox.checked) {
            checkboxes.forEach((item) => {
              item.checked = false
            })
          } else {
            checkboxes.forEach((item) => {
              item.checked = true
            })
          }
          break

        default:
          targetCheckbox.checked = !targetCheckbox.checked

          const allCheckboxesExceptAll = checkboxes.slice(1)
          const allCheckboxesChecked = allCheckboxesExceptAll.every((item) => item.checked)

          checkboxes[0].checked = allCheckboxesChecked
      }
    },
  },
})

export const { toggleCheckbox } = checkboxSlice.actions

export default checkboxSlice.reducer
