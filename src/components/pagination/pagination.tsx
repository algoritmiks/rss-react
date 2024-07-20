import { useContext } from 'react'
import { ThemeContext } from '../../App'
import { useSelector, useDispatch } from 'react-redux'
import { setPage } from '../../store/reducers/pagination'
import { RootState } from '../../store/store'
import css from './pagination.module.css'

type Props = {
  setCurrentPage: (page: number) => void
  currentPage: number
  totalPages: number
}

export const Pagination: React.FC<Props> = ({
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  const isThemeDark = useContext(ThemeContext)
  const page = useSelector((state: RootState) => state.pagination.page)
  const dispatch = useDispatch()

  return (
    <div className={css.pagination}>
      <button
        disabled={page === 1}
        className={css.btn + ' ' + (isThemeDark ? css.darkbtn : '')}
        onClick={() => {
          setCurrentPage(currentPage - 1)
          dispatch(setPage({ page: page - 1 }))
        }}
      >
        Prev
      </button>
      <div className={css.currentPage}>{page}</div>
      <button
        disabled={currentPage === totalPages}
        className={css.btn + ' ' + (isThemeDark ? css.darkbtn : '')}
        onClick={() => {
          setCurrentPage(currentPage + 1)
          dispatch(setPage({ page: page + 1 }))
        }}
      >
        Next
      </button>
    </div>
  )
}
