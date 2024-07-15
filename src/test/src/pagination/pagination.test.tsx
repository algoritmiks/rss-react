import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { vi, describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import { Pagination } from '../../../components/pagination/pagination'

describe('Pagination component', () => {
  it('renders buttons in pagination', async () => {
    const setCurrentPage = vi.fn()

    render(
      <Pagination
        currentPage={1}
        totalPages={1}
        setCurrentPage={setCurrentPage}
      />,
      {
        wrapper: BrowserRouter,
      },
    )

    const prevButton = screen.getByText('Prev')
    const nextButton = screen.getByText('Next')
    expect(nextButton).toBeInTheDocument()
    expect(prevButton).toBeInTheDocument()
  })
})
