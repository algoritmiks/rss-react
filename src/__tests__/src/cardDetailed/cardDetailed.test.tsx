import { render, screen, waitFor, act } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../../store/store'
import { CardDetailed } from '../../../components/cardDetailed/cardDetailed'

vi.mock('@remix-run/react', () => {
  const mockUseNavigate = vi.fn()
  const mockUseSearchParams = () => [
    new URLSearchParams({ search: 'example', page: '1' }),
  ]
  const mockUseLoaderData = () => ({
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe',
    age: 28,
    email: 'john.doe@example.com',
  })

  return {
    useNavigate: () => mockUseNavigate,
    useSearchParams: mockUseSearchParams,
    useLoaderData: mockUseLoaderData,
  }
})

describe('CardDetailed Component', () => {
  it('displays loader while fetching data', async () => {
    const router = createMemoryRouter([
      {
        path: '/user/:id',
        element: <CardDetailed />,
      },
    ])

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>,
    )

    act(() => {
      router.navigate('/user/1')
    })

    await waitFor(() => {
      expect(screen.getByText('Age: 28')).toBeInTheDocument()
    })
  })
})
