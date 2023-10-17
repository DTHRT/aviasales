import React from 'react'

import Header from '../Header'
import Sidebar from '../Sidebar'
import Main from '../Main'
import Tabs from '../Tabs'
import CardList from '../CardList'

import '../../styles/globals.scss'
import styles from './style.module.scss'

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.App__grid}>
        <Sidebar />
        <Main>
          <Tabs />
          <CardList />
        </Main>
      </div>
    </div>
  )
}

export default App
