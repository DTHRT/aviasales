import formatPrice from '../../utils/formatPrice'
import extractTimeFromDate from '../../utils/extractTimeFromDate'
import addMinutesToDateString from '../../utils/addMinutesToDateString'
import formatTimeDifference from '../../utils/formatTimeDifference'
import getTransfersString from '../../utils/getTransfersString'

import style from './style.module.scss'

function Card({ ticket }) {
  if (!ticket) {
    return false
  }

  const { price, segments, carrier } = ticket

  return (
    <div className={style.Card}>
      <div className={style.Card__header}>
        <p className={style.Card__price}>{`${formatPrice(price)} Р`}</p>
        <img className={style.Card__img} src={`//pics.avs.io/99/36/${carrier}.png`} alt="" />
      </div>

      <ul className={style.Card__body}>
        {segments.map((segment) => {
          const { date, origin, destination, duration, stops } = segment

          const dateStart = extractTimeFromDate(date)
          const dateEnd = extractTimeFromDate(addMinutesToDateString(date, duration))
          const timeDifference = formatTimeDifference(date, addMinutesToDateString(date, duration))

          return (
            <li className={style.Card__row} key={`segment_${date}`}>
              <div className={style.Card__col}>
                <p className={style.Card__label}>{`${origin} - ${destination}`}</p>
                <p className={style.Card__value}>{`${dateStart} - ${dateEnd}`}</p>
              </div>

              <div className={style.Card__col}>
                <p className={style.Card__label}>В ПУТИ</p>
                <p className={style.Card__value}>{timeDifference}</p>
              </div>
              <div className={style.Card__col}>
                <p className={style.Card__label}>{getTransfersString(stops.length)}</p>
                <p className={style.Card__value}>{stops.join(', ')}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Card
