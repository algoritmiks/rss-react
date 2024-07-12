import css from './pagination.module.css'
import { LIMIT } from '../../api/api'

type Props = {
  setCurrentPage: (page: number) => void
  currentPage: number
  totalUsers: number
}

export const Pagination: React.FC<Props> = ({
  currentPage,
  setCurrentPage,
  totalUsers,
}) => {
  console.log('totalUsers > ', totalUsers)
  return (
    <div className={css.pagination}>
      <button
        disabled={currentPage === 1}
        className={css.btn}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </button>
      <div className={css.currentPage}>{currentPage}</div>
      <button
        disabled={currentPage === Math.ceil(totalUsers / LIMIT)}
        className={css.btn}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  )
}
