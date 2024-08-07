import { Outlet } from '@remix-run/react'
import { useContext, useEffect } from 'react'
import ErrorBoundary from '../errorBoundary/errorBoundary'
import { Search } from '../search/search'
import { Cards } from '../cards/cards'
import ThemeToggler from '../themeToggler/themeToggler'
import { Cart } from '../cart/cart'
import { ThemeContext } from '../../providers/themeProvider'
import { setPage } from '../../store/reducers/pagination'
import { useDispatch } from 'react-redux'
import css from './app.module.css'

const App: React.FC = () => {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const dispatch = useDispatch()

  useEffect(() => {
    const url = new URLSearchParams(window.location.search)
    const page = url.get('page')
    dispatch(setPage({ page: Number(page || 1) }))
  }, [])

  return (
    <div className={css.container}>
      <ErrorBoundary>
        <ThemeToggler />
        <Search />
        <Cards />
        <Cart />
        <Outlet />
      </ErrorBoundary>
    </div>
  )
}

export default App
