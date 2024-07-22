import { Outlet } from 'react-router-dom'
import ErrorBoundary from './components/errorBoundary/errorBoundary'
import { Search } from './components/search/search'
import { Cards } from './components/cards/cards'
import { ThemeToggler } from './components/themeToggler/themeToggler'
import { Cart } from './components/cart/cart'
import './App.css'

const App: React.FC = () => {
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
