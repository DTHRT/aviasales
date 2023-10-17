import Card from '../Card'

import style from './style.module.scss'

function CardList() {
  return (
    <ul className={style.CardList}>
      <li>
        <Card price="13 400" companyLogo="S7_logo.png" />
      </li>
    </ul>
  )
}

export default CardList
