import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../Header'
import Sidebar from '../Sidebar'
import Main from '../Main'
import Tabs from '../Tabs'
import CardList from '../CardList'
import { fetchSearchId, fetchTickets } from '../../features/tickets/ticketsSlice'
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn'

import '../../styles/globals.scss'
import styles from './style.module.scss'

function App() {
  const dispatch = useDispatch()
  const { searchId, status, error, ticketsToShow } = useSelector((state) => state.tickets)

  useEffect(() => {
    if (!searchId) {
      dispatch(fetchSearchId())
      return
    }

    dispatch(fetchTickets())
  }, [searchId])

  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.App__grid}>
        <Sidebar />
        <Main>
          <Tabs />

          {status === 'pending' && <div>Loading...</div>}

          {error && <div>{`Error: ${error}`}</div>}

          <CardList />

          {ticketsToShow.length > 0 && <ShowMoreBtn />}
        </Main>
      </div>
    </div>
  )
}

export default App
