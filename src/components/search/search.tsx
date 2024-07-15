import { useEffect, useContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Pagination } from '../pagination/pagination'
import css from './search.module.css'
import { useSearchString } from '../../hooks/useSearchString'
import { ThemeContext } from '../../App'

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
  const [searchString, setSearchString] = useSearchString()
  const [searchParams, setSearchParams] = useSearchParams()
  const isThemeDark = useContext(ThemeContext)

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

  const handleSearchClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    const sString = searchString.trim()
    setSearchString(sString)
    setCurrentPage(1)
    localStorage.setItem('searchString', sString)
    setSearchParams({ page: currentPage.toString(), search: searchString })
    getData(sString, currentPage)
  }

  return (
    <div className={css.search}>
      <form>
        <input
          id="input"
          className={css.inp}
          placeholder="Search..."
          onChange={handleSearchChange}
          value={searchString}
        />
        <button
          className={css.btn + ' ' + (isThemeDark ? css.darkbtn : '')}
          onClick={handleSearchClick}
          type="submit"
          id="btn"
        >
          Search
        </button>
      </form>
      {totalPages > 1 && (
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </div>
  )
}
