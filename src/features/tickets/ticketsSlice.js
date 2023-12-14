/* eslint-disable  */
import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'

export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const { tickets: ticketsSlice } = getState()
      const { searchId, tickets } = ticketsSlice
      const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)

      const { tickets: newTickets, stop } = await response.json()

      if (!stop) {
        dispatch(setTickets([...tickets, ...newTickets]))
        dispatch(fetchTickets())
      }
    } catch (err) {
      dispatch(fetchTickets())
    }
  },
)

export const fetchSearchId = createAsyncThunk('tickets/fetchSearchId', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('https://aviasales-test-api.kata.academy/search')

    if (!response.ok) {
      throw new Error('cannot fetch searchId!')
    }

    return await response.json()
  } catch (err) {
    return rejectWithValue(err.message)
  }
})

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    searchId: null,
    tickets: [],
    ticketsToShow: [],
    status: null,
    error: null,
  },
  reducers: {
    setTicketsToShow: (state, action) => {
      state.ticketsToShow = action.payload
    },

    setTickets: (state, action) => {
      state.tickets = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.status = 'pending'
        state.error = null
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.status = 'fulfilled'
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.payload
      })
      .addCase(fetchSearchId.fulfilled, (state, action) => {
        state.searchId = action.payload.searchId
      })
  },
})

export const { setTicketsToShow, setTickets } = ticketsSlice.actions

export default ticketsSlice.reducer
