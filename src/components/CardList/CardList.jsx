import { useSelector } from 'react-redux'

import Card from '../Card'

import style from './style.module.scss'

function CardList() {
  const { ticketsToShow } = useSelector((state) => state.tickets)

  return (
    <ul className={style.CardList}>
      {ticketsToShow.map((ticket, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={`ticket_${index}`}>
          <Card ticket={ticket} />
        </li>
      ))}
    </ul>
  )
}

export default CardList
