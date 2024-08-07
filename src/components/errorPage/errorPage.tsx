import { Link, useRouteError } from '@remix-run/react'
import css from './errorPage.module.css'

interface err {
  message: string
  statusText: string
}

export const ErrorPage: React.FC = () => {
  const error = useRouteError() as err

  return (
    <div className="container">
      <h1>Sorry, an unexpected error has occurred.</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link className={css.link} to="/">
        <button className={css.btn}>Home</button>
      </Link>
    </div>
  )
}
