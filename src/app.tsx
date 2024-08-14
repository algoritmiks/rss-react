import { Link } from 'react-router-dom'
import { Cards } from './components/cards/cards'
import css from './app.module.css'

function App() {
  return (
    <div className={css.container}>
      <nav className={css.navigation}>
        <Link className={css.link} to="/controlled">
          <button className={css.btn}>Controlled</button>
        </Link>
        <Link className={css.link} to="/uncontrolled">
          <button className={css.btn}>Uncontrolled</button>
        </Link>
      </nav>
      <div>
        <Cards />
      </div>
    </div>
  )
}

export default App
