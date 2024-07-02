import React from 'react'
import './App.css'
import ErrorBoundary from './components/errorBoundary/errorBoundary'
import Search from './components/search/search'

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <Search />
      </ErrorBoundary>
    )
  }
}

export default App
