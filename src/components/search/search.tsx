import React from 'react'
import { useState, useEffect } from 'react'
import css from './search.module.css'

interface Props {
  getData: (search: string) => void
}

export const Search = ({ getData }: Props) => {
  const [searchString, setSearchString] = useState<string>('')

  useEffect(() => {
    const searchString = localStorage.getItem('searchString')
    if (searchString) {
      setSearchString(searchString)
    }
    getData(searchString ? searchString : '')
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
