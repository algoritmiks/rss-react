import { useEffect, useState } from 'react'
import './App.css'
import ErrorBoundary from './components/errorBoundary/errorBoundary'
import { Search } from './components/search/search'
import { Cards } from './components/cards/cards'
import Loader from './components/common/loader/loader'
import { fetchUsers } from './api/api'
import { IUser } from './ts/types'
import { Outlet } from 'react-router-dom'
import { LIMIT } from './api/api'
import { getPageFromUrl } from './helpers/getPageFromURL'
import { createContext } from 'react'

export const ThemeContext = createContext(true)

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [users, setPeople] = useState<IUser[]>([])
  const [totalPages, setTotalPages] = useState(1)
  const [currentPage, setCurrentPage] = useState<number>(getPageFromUrl)

  const [isThemeDark, setThemeIsDark] = useState<boolean>(false)

  useEffect(() => {
    document.body.className = isThemeDark ? 'dark' : ''
  }, [isThemeDark])

  const getData = async (search: string, pageNumber: number) => {
    setIsLoading(true)
    const data = await fetchUsers(search, pageNumber)
    setTotalPages(Math.ceil(data.total / LIMIT))
    if (data.skip > data.total) {
      setCurrentPage(1)
    }
    setPeople(data.users)
    setIsLoading(false)
  }

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
          <Search
            getData={getData}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
          {isLoading ? (
            <div className="loader">
              <Loader />
            </div>
          ) : (
            <Cards users={users} />
          )}
          <Outlet />
        </ErrorBoundary>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
