import { useContext } from 'react'
import { ThemeContext } from '../../App'
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
  return (
    <div className={css.pagination}>
      <button
        disabled={currentPage === 1}
        className={css.btn + ' ' + (isThemeDark ? css.darkbtn : '')}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </button>
      <div className={css.currentPage}>{currentPage}</div>
      <button
        disabled={currentPage === totalPages}
        className={css.btn + ' ' + (isThemeDark ? css.darkbtn : '')}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  )
}
