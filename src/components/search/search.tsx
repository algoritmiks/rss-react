import React from 'react'
import css from './search.module.css'

interface State {
  searchString: string
  hasError: boolean
}

interface Props {}

class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      searchString: '',
      hasError: false,
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
    const searchString = e.target.value
    this.setState({ searchString })
    localStorage.setItem('searchString', searchString)
  }

  handleError = () => {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      throw new Error('Error occurred')
    }

    return (
      <>
        <input
          className={css.inp}
          placeholder="Search..."
          onChange={this.handleSearchChange}
          value={this.state.searchString}
        />
        <button className={css.btn}>Search</button>
        <button
          className={css.btn + ' ' + css.btnred}
          onClick={this.handleError}
        >
          Error
        </button>
      </>
    )
  }
}

export default Search
