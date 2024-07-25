import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Search } from '../../../components/search/search'
import { Provider } from 'react-redux'
import { store } from '../../../store/store'

describe('Search Component', () => {
  const placeholderText = 'Search...'

  test('renders input field', async () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>,
      { wrapper: BrowserRouter },
    )

    const searchInput = screen.getByPlaceholderText(placeholderText)
    expect(searchInput).toBeInTheDocument()
  })

  test('renders button', async () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>,
      { wrapper: BrowserRouter },
    )

    const searchButton = screen.getByRole('button')
    expect(searchButton).toBeInTheDocument()
  })

  it('save value to LS on button click', async () => {
    const user = userEvent.setup()
    render(
      <Provider store={store}>
        <Search />
      </Provider>,
      { wrapper: BrowserRouter },
    )

    const searchInput = screen.getByPlaceholderText(placeholderText)
    const searchButton = screen.getByRole('button')

    const searchTerm = 'John'

    await user.type(searchInput, searchTerm)
    await user.click(searchButton)

    expect(localStorage.getItem('searchString')).toBe(searchTerm)
  })

  test('retrieves value LS on mounting and set it to input field', async () => {
    const searchTerm = 'John'
    localStorage.setItem('searchString', searchTerm)

    render(
      <Provider store={store}>
        <Search />
      </Provider>,
      { wrapper: BrowserRouter },
    )
    const searchInput = screen.getByPlaceholderText(placeholderText)
    expect(searchInput).toHaveValue(searchTerm)
  })
})
