import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toggleCheckbox } from '../../features/checkboxFilter/checkboxFilterSlice'
import { setTicketsToShow } from '../../features/tickets/ticketsSlice'
import { selectFilteredTickets } from '../App/selectors'

import style from './style.module.scss'

function Sidebar() {
  const { tickets } = useSelector((state) => state.tickets)
  const { checkboxes } = useSelector((state) => state.checkboxFilter)
  const { value } = useSelector((state) => state.tabFilter)
  const dispatch = useDispatch()
  const filteredTickets = useSelector(selectFilteredTickets)

  useEffect(() => {
    if (!filteredTickets.length) {
      setTicketsToShow([])
    }

    dispatch(setTicketsToShow(filteredTickets.slice(0, 5)))
  }, [checkboxes, tickets, value])

  const checkboxHandler = (id) => {
    dispatch(toggleCheckbox(id))
  }

  return (
    <div className={style.Sidebar}>
      <h3 className={style.Sidebar__heading}>Количество пересадок</h3>

      <form className={style.Sidebar__form} action="#">
        {checkboxes.map((checkbox) => {
          const { id, text, checked } = checkbox

          return (
            <label className={style.Sidebar__label} htmlFor={`checkbox_${id}`} key={`checkbox_${id}`}>
              <input
                type="checkbox"
                value="All"
                id={`checkbox_${id}`}
                checked={checked}
                onChange={() => checkboxHandler(id)}
              />
              {text}
            </label>
          )
        })}
      </form>
    </div>
  )
}

export default Sidebar
