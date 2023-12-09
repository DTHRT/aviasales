import classNames from 'classnames'

import style from './style.module.scss'

function Tab({ text, onClick, isActive = false }) {
  return (
    <button type="button" className={classNames(style.Tab, isActive && style.Tab_active)} onClick={onClick}>
      {text}
    </button>
  )
}

export default Tab
