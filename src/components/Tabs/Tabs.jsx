import Tab from '../Tab'

import style from './style.module.scss'

function Tabs() {
  return (
    <ul className={style.TabsList}>
      <li className={style.TabsItem}>
        <Tab isActive text="Самый дешевый" />
      </li>
      <li>
        <Tab text="Самый быстрый" />
      </li>
      <li>
        <Tab text="Оптимальный" />
      </li>
    </ul>
  )
}

export default Tabs
