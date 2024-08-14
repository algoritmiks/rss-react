import { Link } from 'react-router-dom'
import css from './app.module.css'

function App() {
  return (
    <>
      <nav>
        <Link className={css.link} to="/controlled">
          <button className={css.btn}>Controlled</button>
        </Link>
        <Link className={css.link} to="/uncontrolled">
          <button className={css.btn}>Uncontrolled</button>
        </Link>
      </nav>
      <div>HOME</div>
    </>
  )
}

export default App
