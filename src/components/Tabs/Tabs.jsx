import { useDispatch, useSelector } from 'react-redux'

import Tab from '../Tab'
import { filters } from '../../constants'
import { setTabFilter } from '../../features/tabFilter/tabFilterSlice'

import style from './style.module.scss'

function Tabs() {
  const currentFilter = useSelector((state) => state.filter.value)
  const dispatch = useDispatch()

  return (
    <ul className={style.TabsList}>
      {filters.map((filter, index) => (
        <li className={style.TabsItem}>
          <Tab isActive={currentFilter === index} text={filter} onClick={() => dispatch(setTabFilter(index))} />
        </li>
      ))}
    </ul>
  )
}

export default Tabs
