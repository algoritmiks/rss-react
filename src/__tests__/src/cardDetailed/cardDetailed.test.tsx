import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import { CardDetailed } from '../../../components/cardDetailed/cardDetailed'
import { Provider } from 'react-redux'
import { store } from '../../../store/store'
import { IDetailedUser } from '../../../ts/types'

vi.mock('next/router', () => ({
  useRouter: () => ({
    query: { detailed: '1', page: '1', search: 'example' },
    push: vi.fn(),
  }),
}))

const mockUser: IDetailedUser = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  username: 'johndoe',
  age: 28,
  email: 'john.doe@example.com',
}

describe('CardDetailed Component', () => {
  it('displays user details after loading', async () => {
    render(
      <Provider store={store}>
        <CardDetailed user={mockUser} />
      </Provider>,
    )

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument()
      expect(screen.getByText('Age: 28')).toBeInTheDocument()
      expect(screen.getByText('john.doe@example.com')).toBeInTheDocument()
      expect(screen.getByText('username: johndoe')).toBeInTheDocument()
    })
  })
})
