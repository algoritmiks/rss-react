import { useState, useEffect } from 'react'
import css from './search.module.css'

interface Props {
  getData: (search: string) => void
}

export const Search: React.FC<Props> = ({ getData }) => {
  const [searchString, setSearchString] = useState<string>('')

  useEffect(() => {
    const searchLS = localStorage.getItem('searchString')
    if (searchLS) {
      setSearchString(searchLS)
    }
    getData(searchLS ? searchLS : '')
  }, [])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value)
  }

  const handleSearchClick = (): void => {
    const sString = searchString.trim()
    setSearchString(sString)
    localStorage.setItem('searchString', sString)
    getData(sString)
  }

  return (
    <div className={css.search}>
      <input
        className={css.inp}
        placeholder="Search..."
        onChange={handleSearchChange}
        value={searchString}
      />
      <button className={css.btn} onClick={handleSearchClick}>
        Search
      </button>
    </div>
  )
}
