import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { waitFor } from '@testing-library/react'
import { mockFullDataUsers } from './mockUsers'
import '@testing-library/jest-dom'
import { Cards } from '../../../components/cards/cards'
import { Provider } from 'react-redux'
import { store } from '../../../store/store'

vi.mock('next/router', () => ({
  useRouter: () => ({
    query: {},
    events: {
      on: vi.fn(),
      off: vi.fn(),
    },
  }),
}))

afterEach(() => {
  vi.restoreAllMocks()
})

describe('Users', () => {
  it('renders the specified card', () => {
    render(
      <Provider store={store}>
        <Cards usersData={mockFullDataUsers} />
      </Provider>,
    )
    waitFor(() => {
      const card = screen.getAllByText('Age: 28')
      expect(card).toHaveLength(1)
    })
  })

  it('renders button', () => {
    render(
      <Provider store={store}>
        <Cards usersData={mockFullDataUsers} />
      </Provider>,
    )
    waitFor(() => {
      const btn = screen.getAllByRole('button')
      expect(btn).toBeInTheDocument()
    })
  })

  it('renders the specified number of cards', () => {
    render(
      <Provider store={store}>
        <Cards usersData={mockFullDataUsers} />
      </Provider>,
    )
    waitFor(() => {
      const characterList = screen.getAllByText(/Age/g)
      expect(characterList).toHaveLength(10)
    })
  })

  it('renders next btn', () => {
    render(
      <Provider store={store}>
        <Cards usersData={mockFullDataUsers} />
      </Provider>,
    )
    waitFor(() => {
      const next = screen.getAllByText(/next/g)
      expect(next).toBeInTheDocument()
    })
  })

  it('renders prev btn', () => {
    render(
      <Provider store={store}>
        <Cards usersData={mockFullDataUsers} />
      </Provider>,
    )
    waitFor(() => {
      const prev = screen.getAllByText(/prev/g)
      expect(prev).toBeInTheDocument()
    })
  })
})
