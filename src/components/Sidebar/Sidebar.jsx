import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toggleCheckbox } from '../../features/checkboxFilter/checkboxFilterSlice'

import style from './style.module.scss'

function Sidebar() {
  const checkboxes = useSelector((state) => state.checkboxFilter.checkboxes)
  const dispatch = useDispatch()

  return (
    <div className={style.Sidebar}>
      <h3 className={style.Sidebar__heading}>Количество пересадок</h3>

      <form className={style.Sidebar__form} action="#">
        {checkboxes.map((checkbox) => {
          const { id, text, checked } = checkbox

          return (
            <label className={style.Sidebar__label} htmlFor={`checkbox_${id}`}>
              <input
                type="checkbox"
                value="All"
                id={`checkbox_${id}`}
                checked={checked}
                onClick={() => dispatch(toggleCheckbox(id))}
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
