import style from './style.module.scss'

function Main({ children }) {
  return <div className={style.Main}>{children}</div>
}

export default Main
