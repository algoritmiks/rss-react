import { Outlet } from 'react-router-dom'
import ErrorBoundary from './components/errorBoundary/errorBoundary'
import { Search } from './components/search/search'
import { Cards } from './components/cards/cards'
import { ThemeToggler } from './components/themeToggler/themeToggler'
import ThemeProvider from './providers/themeProvider'
import './App.css'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="container">
        <ErrorBoundary>
          <ThemeToggler />
          <Search />
          <Cards />
          <Outlet />
        </ErrorBoundary>
      </div>
    </ThemeProvider>
  )
}

export default App
