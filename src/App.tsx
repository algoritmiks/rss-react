import { useState } from 'react'
import './App.css'
import ErrorBoundary from './components/errorBoundary/errorBoundary'
import { Search } from './components/search/search'
import { Cards } from './components/cards/cards'
import Loader from './components/common/loader/loader'
import { fetchPeople } from './api/api'
import { IPeople } from './ts/types'

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [people, setPeople] = useState<IPeople[]>([])

  const getData = async (search: string) => {
    setIsLoading(true)
    const data = await fetchPeople(search)
    setPeople([...data])
    setIsLoading(false)
  }

  return (
    <div className="container">
      <ErrorBoundary>
        <Search getData={getData} />
        {isLoading ? <Loader /> : <Cards people={people} />}
      </ErrorBoundary>
    </div>
  )
}

export default App
