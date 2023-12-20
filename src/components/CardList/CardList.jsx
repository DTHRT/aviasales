import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import Card from '../Card'

import style from './style.module.scss'

function CardList() {
  const { ticketsToShow } = useSelector((state) => state.tickets)

  return (
    <ul className={style.CardList}>
      {ticketsToShow.map((ticket) => {
        const { price, carrier } = ticket

        return (
          <li key={`ticket_${price}_${carrier}`}>
            <Card ticket={ticket} />
          </li>
        )
      })}
    </ul>
  )
}

export default CardList
