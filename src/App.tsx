import { useEffect, useState, createContext } from 'react'
import { Outlet } from 'react-router-dom'
import ErrorBoundary from './components/errorBoundary/errorBoundary'
import { Search } from './components/search/search'
import { Cards } from './components/cards/cards'
import { ThemeToggler } from './components/themeToggler/themeToggler'
import './App.css'

interface IThemeContext {
  isThemeDark: boolean
  setThemeIsDark: (value: boolean) => void
}

export const ThemeContext = createContext<IThemeContext>({
  isThemeDark: true,
  setThemeIsDark: () => true,
})

const App: React.FC = () => {
  const [isThemeDark, setThemeIsDark] = useState<boolean>(false)

  useEffect(() => {
    document.body.className = isThemeDark ? 'dark' : ''
  }, [isThemeDark])

  return (
    <ThemeContext.Provider value={{ isThemeDark, setThemeIsDark }}>
      <div className="container">
        <ErrorBoundary>
          <ThemeToggler />
          <Search />
          <Cards />
          <Outlet />
        </ErrorBoundary>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
