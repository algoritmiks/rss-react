import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { waitFor } from '@testing-library/react'
import { mockUsers } from '../cards/mockUsers'
import '@testing-library/jest-dom'
import { Card } from '../../../components/card/card'
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
        <Card user={mockUsers[0]} />
      </Provider>,
    )
    waitFor(() => {
      const card = screen.getAllByText('Age: 28')
      expect(card).toHaveLength(1)
    })
  })

  // it('renders button', () => {
  //   render(
  //     <Provider store={store}>
  //       <Card user={mockFullDataUsers} />
  //     </Provider>,
  //   )
  //   waitFor(() => {
  //     const btn = screen.getAllByRole('button')
  //     expect(btn).toBeInTheDocument()
  //   })
  // })
})
