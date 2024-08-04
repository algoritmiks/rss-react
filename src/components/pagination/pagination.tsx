import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter, useSearchParams } from 'next/navigation'
import { setPage } from '../../store/reducers/pagination'
import { TRootState } from '../../store/store'

import css from './pagination.module.css'

export const Pagination: React.FC = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const params = useSearchParams()

  const { page, totalPages } = useSelector(
    (state: TRootState) => state.pagination,
  )
  const { searchString } = useSelector((state: TRootState) => state.search)

  useEffect(() => {
    const detailed = params.get('detailed')
    router.push(
      `/?search=${searchString}&page=${page}&detailed=${detailed ? detailed : ''}`,
    )
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
