import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import { setSearchString } from '../../store/reducers/search'
import { useSearchString } from '../../hooks/useSearchString'
import { Pagination } from '../pagination/pagination'
import { setPage } from '../../store/reducers/pagination'
import css from './search.module.css'

export const Search: React.FC = () => {
  const [searchStringLocal, setSearchStringLocal] = useSearchString()
  const dispatch = useDispatch()
  const [, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (searchStringLocal) {
      setSearchParams({ page: '1', search: searchStringLocal })
    }
  }, [])

  const { totalPages } = useSelector((state: RootState) => state.pagination)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStringLocal(e.target.value)
  }

  const handleSearchClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    const sString = searchStringLocal.trim()
    localStorage.setItem('searchString', sString)
    setSearchParams({ page: '1', search: sString })
    dispatch(setSearchString({ searchString: sString }))
    dispatch(setPage({ page: 1 }))
  }

  return (
    <div className={css.search}>
      <form>
        <input
          id="input"
          className={css.inp}
          placeholder="Search..."
          onChange={handleSearchChange}
          value={searchStringLocal}
        />
        <button
          className={css.btn}
          onClick={handleSearchClick}
          type="submit"
          id="btn"
        >
          Search
        </button>
      </form>
      {totalPages > 1 && <Pagination />}
    </div>
  )
}
