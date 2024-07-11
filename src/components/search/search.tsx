import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import css from './search.module.css'

interface Props {
  getData: (search: string) => void
}

export const Search: React.FC<Props> = ({ getData }) => {
  const [searchString, setSearchString] = useState<string>('')
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const searchLS = localStorage.getItem('searchString')
    const searchParam = searchParams.get('search')
    let searchingFor
    if (searchLS) {
      setSearchString(searchLS)
      searchingFor = searchLS
    }
    if (searchParam) {
      setSearchString(searchParam)
      searchingFor = searchParam
    }
    if (searchingFor) {
      setSearchParams({ search: searchingFor })
    }
    getData(searchingFor ? searchingFor : '')
  }, [])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value)
  }

  const handleSearchClick = (): void => {
    const sString = searchString.trim()
    setSearchString(sString)
    localStorage.setItem('searchString', sString)
    if (sString) {
      setSearchParams({ search: sString })
    } else {
      searchParams.delete('search')
      setSearchParams(searchParams)
    }
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
