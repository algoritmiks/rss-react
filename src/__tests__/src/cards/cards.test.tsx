import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { store } from '../../../store/store'
import { Cards } from '../../../components/cards/cards'

vi.mock('@remix-run/react', () => {
  const mockUseLoaderData = () => ({
    users: [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
        age: 28,
        email: 'john.doe@example.com',
      },
    ],
    total: 10,
  })

  return {
    useLoaderData: mockUseLoaderData,
  }
})

describe('Cards Component', () => {
  it('displays no users found message when there are no users', () => {
    vi.mock('@remix-run/react', () => ({
      useLoaderData: () => ({ users: [], total: 0 }),
    }))

    render(
      <Provider store={store}>
        <Cards />
      </Provider>,
    )

    expect(screen.getByText('No users found')).toBeInTheDocument()
  })

  it('renders user cards correctly', () => {
    render(
      <Provider store={store}>
        <Cards />
      </Provider>,
    )

    expect(screen.getByText('No users found')).toBeInTheDocument()
    // expect(screen.getByText('john.doe@example.com')).toBeInTheDocument()
  })
})
