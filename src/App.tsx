import { useState } from 'react'
import './App.css'
import ErrorBoundary from './components/errorBoundary/errorBoundary'
import { Search } from './components/search/search'
import { Cards } from './components/cards/cards'
import Loader from './components/common/loader/loader'
import { fetchUsers } from './api/api'
import { IUser } from './ts/types'

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [users, setPeople] = useState<IUser[]>([])

  const getData = async (search: string) => {
    setIsLoading(true)
    const data = await fetchUsers(search)
    setPeople([...data])
    setIsLoading(false)
  }

  return (
    <div className="container">
      <ErrorBoundary>
        <Search getData={getData} />
        {isLoading ? <Loader /> : <Cards users={users} />}
      </ErrorBoundary>
    </div>
  )
}

export default App
