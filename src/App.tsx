import { Outlet } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import ErrorBoundary from './components/errorBoundary/errorBoundary'
import { Search } from './components/search/search'
import { Cards } from './components/cards/cards'
import ThemeToggler from './components/themeToggler/themeToggler'
import { Cart } from './components/cart/cart'
import { ThemeContext } from './providers/themeProvider'
import './App.css'

const App: React.FC = () => {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <div className="container">
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
