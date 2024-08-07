import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import '@testing-library/jest-dom'
import { Card } from '../../../components/card/card'
import { Provider } from 'react-redux'
import { store } from '../../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { addUser, removeUser } from '../../../store/reducers/users'

vi.mock('react-redux', async (importOriginal) => {
  const actual: Record<string, never> = await importOriginal()
  return {
    ...actual,
    useDispatch: vi.fn(),
    useSelector: vi.fn(),
  }
})

describe('Card Component', () => {
  const mockDispatch = vi.fn()

  const user = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john.doe@example.com',
    username: 'asdfsdfsadf',
  }

  beforeEach(() => {
    (useDispatch as vi.Mock).mockReturnValue(mockDispatch)
  })

  it('dispatches addUser action when checkbox is checked', () => {
    (useSelector as vi.Mock).mockReturnValue([])

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card user={user} />
        </MemoryRouter>
      </Provider>,
    )

    fireEvent.click(screen.getByRole('checkbox'))

    expect(mockDispatch).toHaveBeenCalledWith(addUser({ user }))
  })

  it('dispatches removeUser action when checkbox is unchecked', () => {
    (useSelector as vi.Mock).mockReturnValue([user])

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card user={user} />
        </MemoryRouter>
      </Provider>,
    )

    fireEvent.click(screen.getByRole('checkbox'))

    expect(mockDispatch).toHaveBeenCalledWith(removeUser({ user }))
  })

  it('checks the checkbox when user is selected', () => {
    (useSelector as vi.Mock).mockReturnValue([user])

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card user={user} />
        </MemoryRouter>
      </Provider>,
    )

    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('unchecks the checkbox when user is not selected', () => {
    (useSelector as vi.Mock).mockReturnValue([])

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card user={user} />
        </MemoryRouter>
      </Provider>,
    )

    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })
})
