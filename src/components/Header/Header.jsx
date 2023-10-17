import style from './style.module.scss'

function Header() {
  return (
    <header className={style.Header}>
      <h1 className="visually-hidden">Aviasales</h1>
      <img className={style.Header__logo} src="/Logo.png" alt="Aviasales logo" />
    </header>
  )
}

export default Header
