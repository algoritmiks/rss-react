import { useState } from 'react'
import './App.css'
import ErrorBoundary from './components/errorBoundary/errorBoundary'
import { Search } from './components/search/search'
import { Cards } from './components/cards/cards'
import Loader from './components/common/loader/loader'
import { fetchUsers } from './api/api'
import { IUser } from './ts/types'
import { Outlet } from 'react-router-dom'

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [users, setPeople] = useState<IUser[]>([])
  const [totalUsers, setTotalUsers] = useState(0)

  const getData = async (search: string) => {
    setIsLoading(true)
    const data = await fetchUsers(search)
    setPeople(data.users)
    setTotalUsers(data.total)
    setIsLoading(false)
  }

  return (
    <div className="container">
      <ErrorBoundary>
        <Search getData={getData} totalUsers={totalUsers} />
        {isLoading ? <Loader /> : <Cards users={users} />}
        <Outlet />
      </ErrorBoundary>
    </div>
  )
}

export default App
