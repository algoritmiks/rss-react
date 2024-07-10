import { useState } from 'react'
import css from './pagination.module.css'

export const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)

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
        className={css.btn}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  )
}
