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
      {filters.map((filter) => {
        const { id, title } = filter
        return (
          <li className={style.TabsItem} key={`${title}_${id}`}>
            <Tab isActive={currentFilter === id} text={title} onClick={() => dispatch(setTabFilter(id))} />
          </li>
        )
      })}
    </ul>
  )
}

export default Tabs
