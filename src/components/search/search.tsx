import React from 'react'
import css from './search.module.css'

interface State {
  searchString: string
  hasError: boolean
}

interface Props {
  getData: (search: string) => void
}

class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      searchString: '',
      hasError: false,
    }
  }

  componentDidMount(): void {
    const searchString = localStorage.getItem('searchString')
    if (searchString) {
      this.setState({ searchString })
    }
    this.props.getData(searchString ? searchString : '')
  }

  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchString = e.target.value
    this.setState({ searchString })
    localStorage.setItem('searchString', searchString)
  }

  handleSearchClick = () => {
    this.props.getData(this.state.searchString)
  }

  handleError = () => {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      throw new Error('Error occurred')
    }

    return (
      <div className={css.search}>
        <input
          className={css.inp}
          placeholder="Search..."
          onChange={this.handleSearchChange}
          value={this.state.searchString}
        />
        <button className={css.btn} onClick={this.handleSearchClick}>
          Search
        </button>
        <button
          className={css.btn + ' ' + css.btnred}
          onClick={this.handleError}
        >
          Error
        </button>
      </div>
    )
  }
}

export default Search
