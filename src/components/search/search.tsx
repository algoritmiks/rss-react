'use client'
import { useSelector, useDispatch } from 'react-redux'
import { TRootState } from '../../store/store'
import { setSearchString } from '../../store/reducers/search'
import { useSearchString } from '../../hooks/useSearchString'
import { Pagination } from '../pagination/pagination'
import { setPage } from '../../store/reducers/pagination'
import css from './search.module.css'

export const Search: React.FC = () => {
  const [searchStringLocal, setSearchStringLocal, router] = useSearchString()
  const dispatch = useDispatch()

  const { totalPages } = useSelector((state: TRootState) => state.pagination)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStringLocal(e.target.value)
  }

  const handleSearchClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    const sString = searchStringLocal.trim()
    localStorage.setItem('searchString', sString)
    router.push(`/?search=${sString}&page=1`)

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
