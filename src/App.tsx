import React from 'react'
import './App.css'
import ErrorBoundary from './components/errorBoundary/errorBoundary'
import Search from './components/search/search'
import Cards from './components/cards/cards'
import Loader from './components/common/loader/loader'
import { fetchPeople } from './api/api'
import { IPeople } from './ts/types'

class App extends React.Component {
  state = {
    isLoading: true,
    people: [] as IPeople[],
  }

  getData = async (search: string) => {
    this.setState({ isLoading: true })
    const data = await fetchPeople(search)
    this.setState({ people: data, isLoading: false })
  }

  render() {
    return (
      <div className="container">
        <ErrorBoundary>
          <Search getData={this.getData} />
          {this.state.isLoading ? (
            <Loader />
          ) : (
            <Cards people={this.state.people} />
          )}
        </ErrorBoundary>
      </div>
    )
  }
}

export default App
