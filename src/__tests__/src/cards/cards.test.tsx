import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import { Cards } from '../../../components/cards/cards'
import { Provider } from 'react-redux'
import { store } from '../../../store/store'

describe('Users', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })
  it('renders the specified number of cards', () => {
    render(
      <Provider store={store}>
        <Cards />
      </Provider>,
      { wrapper: BrowserRouter },
    )
    waitFor(() => {
      const characterList = screen.getAllByText('Age: 28')
      expect(characterList).toHaveLength(1)
    })
  })
})
