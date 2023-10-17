import style from './style.module.scss'

function Card({ price, companyLogo }) {
  return (
    <div className={style.Card}>
      <div className={style.Card__header}>
        <p className={style.Card__price}>{`${price} Р`}</p>
        <img className={style.Card__img} src={companyLogo} alt="" />
      </div>

      <ul className={style.Card__body}>
        <li className={style.Card__row}>
          <div className={style.Card__col}>
            <p className={style.Card__label}>MOW - HKT</p>
            <p className={style.Card__value}>10:45 - 08:00</p>
          </div>

          <div className={style.Card__col}>
            <p className={style.Card__label}>В ПУТИ</p>
            <p className={style.Card__value}>21ч 15м</p>
          </div>
          <div className={style.Card__col}>
            <p className={style.Card__label}>2 ПЕРЕСАДКИ</p>
            <p className={style.Card__value}>HKG, JNB</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Card
