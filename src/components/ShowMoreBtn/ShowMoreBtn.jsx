import { useDispatch, useSelector } from 'react-redux'

import selectFilteredTickets from '../App/selectors'
import { setTicketsToShow } from '../../features/tickets/ticketsSlice'

import style from './style.module.scss'

function ShowMoreBtn() {
  const dispatch = useDispatch()
  const filteredTickets = useSelector(selectFilteredTickets)
  const { ticketsToShow } = useSelector((state) => state.tickets)

  const loadMoreTickets = () => {
    dispatch(
      setTicketsToShow([
        ...ticketsToShow,
        ...filteredTickets.slice(ticketsToShow.length - 1, ticketsToShow.length + 5),
      ]),
    )
  }

  return (
    <div className={style.ShowMoreBtn}>
      <button className={style.ShowMoreBtn__btn} type="button" onClick={() => loadMoreTickets()}>
        Показать еще 5 билетов!
      </button>
    </div>
  )
}

export default ShowMoreBtn
