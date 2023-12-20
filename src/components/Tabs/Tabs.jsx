import { useDispatch, useSelector } from 'react-redux'

import Tab from '../Tab'
import filters from '../../constants'
import { setTabFilter } from '../../features/tabFilter/tabFilterSlice'

import style from './style.module.scss'

function Tabs() {
  const { value: currentFilter } = useSelector((state) => state.tabFilter)
  const dispatch = useDispatch()

  return (
    <ul className={style.TabsList}>
      {filters.map((filter, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li className={style.TabsItem} key={`${filter}_${index}`}>
          <Tab isActive={currentFilter === index} text={filter} onClick={() => dispatch(setTabFilter(index))} />
        </li>
      ))}
    </ul>
  )
}

export default Tabs
