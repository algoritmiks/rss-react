import { Outlet } from 'react-router-dom'
import ErrorBoundary from './components/errorBoundary/errorBoundary'
import { Search } from './components/search/search'
import { Cards } from './components/cards/cards'
import { ThemeToggler } from './components/themeToggler/themeToggler'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="container">
      <ErrorBoundary>
        <ThemeToggler />
        <Search />
        <Cards />
        <Outlet />
      </ErrorBoundary>
    </div>
  )
}

export default App
