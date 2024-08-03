import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import { Pagination } from '../../../components/pagination/pagination'
import { Provider } from 'react-redux'
import { store } from '../../../store/store'

vi.mock('next/router', () => ({
  useRouter: () => ({
    query: {},
    push: vi.fn(),
  }),
}))

describe('Pagination component', () => {
  it('renders buttons in pagination', async () => {
    render(
      <Provider store={store}>
        <Pagination />
      </Provider>,
    )

    const prevButton = screen.getByText('Prev')
    const nextButton = screen.getByText('Next')
    expect(nextButton).toBeInTheDocument()
    expect(prevButton).toBeInTheDocument()
  })
})
