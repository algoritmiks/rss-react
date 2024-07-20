import { useEffect, useState, createContext } from 'react'
import { Outlet } from 'react-router-dom'
import ErrorBoundary from './components/errorBoundary/errorBoundary'
import { Search } from './components/search/search'
import { Cards } from './components/cards/cards'
import './App.css'

export const ThemeContext = createContext(true)

const App: React.FC = () => {
  const [isThemeDark, setThemeIsDark] = useState<boolean>(false)

  useEffect(() => {
    document.body.className = isThemeDark ? 'dark' : ''
  }, [isThemeDark])

  return (
    <ThemeContext.Provider value={isThemeDark}>
      <div className="container">
        <ErrorBoundary>
          <button
            className={isThemeDark ? 'btn darkbtn' : 'btn'}
            onClick={() => setThemeIsDark(!isThemeDark)}
          >
            {isThemeDark ? 'Light' : 'Dark'}
          </button>
          <Search />
          <Cards />
          <Outlet />
        </ErrorBoundary>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
