import React from 'react'

import style from './style.module.scss'

function Sidebar() {
  return (
    <div className={style.Sidebar}>
      <h3 className={style.Sidebar__heading}>Количество пересадок</h3>

      <form className={style.Sidebar__form} action="#">
        <label className={style.Sidebar__label} htmlFor="checkbox_1">
          <input type="checkbox" value="All" id="checkbox_1" />
          Все
        </label>

        <label className={style.Sidebar__label} htmlFor="checkbox_2">
          <input type="checkbox" value="All" id="checkbox_2" />
          Все
        </label>
      </form>
    </div>
  )
}

export default Sidebar
