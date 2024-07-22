import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { setPage } from '../../store/reducers/pagination'
import { TRootState } from '../../store/store'

import css from './pagination.module.css'

export const Pagination: React.FC = () => {
  const dispatch = useDispatch()
  const [, setSearchParams] = useSearchParams()
  const { page, totalPages } = useSelector(
    (state: TRootState) => state.pagination,
  )
  const { searchString } = useSelector((state: TRootState) => state.search)

  useEffect(() => {
    setSearchParams({ page: String(page), search: searchString })
  }, [page])

  return (
    <div className={css.pagination}>
      <button
        disabled={page === 1}
        className={css.btn}
        onClick={() => {
          dispatch(setPage({ page: page - 1 }))
        }}
      >
        Prev
      </button>
      <div className={css.currentPage}>{page}</div>
      <button
        disabled={page === totalPages}
        className={css.btn}
        onClick={() => {
          dispatch(setPage({ page: page + 1 }))
        }}
      >
        Next
      </button>
    </div>
  )
}
