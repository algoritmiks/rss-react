import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Pagination } from '../pagination/pagination'
import { getSearchStringOnLoading } from '../../helpers/getSearchStringOnLoading'
import css from './search.module.css'

interface Props {
  getData: (search: string, pageNumber: number) => void
  totalPages: number
  setCurrentPage: (page: number) => void
  currentPage: number
}

export const Search: React.FC<Props> = ({
  getData,
  totalPages,
  currentPage,
  setCurrentPage,
}) => {
  const [searchString, setSearchString] = useState<string>(
    getSearchStringOnLoading,
  )
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const pageParam = searchParams.get('page')
    if (pageParam) {
      setCurrentPage(Number(pageParam))
    }
    setSearchParams({
      page: currentPage.toString(),
      search: searchString,
    })
    getData(searchString, currentPage)
  }, [])

  useEffect(() => {
    setSearchParams({ page: currentPage.toString(), search: searchString })
    getData(searchString, currentPage)
  }, [currentPage])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value)
  }

  const handleSearchClick = (): void => {
    const sString = searchString.trim()
    setSearchString(sString)
    setCurrentPage(1)
    localStorage.setItem('searchString', sString)
    setSearchParams({ page: currentPage.toString(), search: searchString })
    getData(sString, currentPage)
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
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  )
}
