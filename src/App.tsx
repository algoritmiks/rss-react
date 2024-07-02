import React from 'react'
import './App.css'
import ErrorBoundary from './components/errorBoundary/errorBoundary'
import Search from './components/search/search'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <ErrorBoundary>
          <Search />
        </ErrorBoundary>
      </div>
    )
  }
}

export default App
