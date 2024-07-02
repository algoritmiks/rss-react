import React from 'react'
import css from './search.module.css'

interface State {
  searchString: string
}

interface Props {}

class Search extends React.Component<Props, State> {
  constructor() {
    super({})
    this.state = {
      searchString: '',
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  componentDidMount(): void {
    const searchString = localStorage.getItem('searchString')
    if (searchString) {
      this.setState({ searchString })
      //todo api request
    }
  }

  handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value)
    const searchString = e.target.value
    this.setState({ searchString })
    localStorage.setItem('searchString', searchString)
  }

  render() {
    return (
      <>
        <input
          className={css.inp}
          placeholder="Search..."
          onChange={this.handleSearchChange}
          value={this.state.searchString}
        />
        <button className={css.btn}>Search</button>
      </>
    )
  }
}

export default Search
