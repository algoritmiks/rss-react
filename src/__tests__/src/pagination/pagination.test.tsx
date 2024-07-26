import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import { Pagination } from '../../../components/pagination/pagination'
import { Provider } from 'react-redux'
import { store } from '../../../store/store'

describe('Pagination component', () => {
  it('renders buttons in pagination', async () => {
    render(
      <Provider store={store}>
        <Pagination />
      </Provider>,
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
