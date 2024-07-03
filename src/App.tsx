import React from 'react'
import './App.css'
import ErrorBoundary from './components/errorBoundary/errorBoundary'
import Search from './components/search/search'
import Cards from './components/cards/cards'
import { getPeople } from './api/api'
import { IPeople } from './ts/types'

class App extends React.Component {
  state = {
    isLoading: true,
    people: [] as IPeople[],
  }

  getData = async (search: string): Promise<void> => {
    this.setState({ isLoading: true })
    const data = await getPeople(search)
    this.setState({ people: data.results, isLoading: false })
  }

  render() {
    return (
      <div className="container">
        <ErrorBoundary>
          <Search getData={this.getData} />
          <Cards people={this.state.people} />
        </ErrorBoundary>
      </div>
    )
  }
}

export default App
