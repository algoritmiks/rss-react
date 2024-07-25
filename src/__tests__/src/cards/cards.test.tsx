import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
// import { waitFor } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
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
    const characterList = screen.getAllByText('Age: 28')
    expect(characterList).toHaveLength(1)
  })
  // it('no cards message', () => {
  //   render(<Cards users={[]} />, { wrapper: BrowserRouter })
  //   const response = screen.getByText('No users found')
  //   expect(response).toBeInTheDocument()
  // })
  // it('renders two users with relevant data', () => {
  //   render(<Cards users={mockUsers} />, { wrapper: BrowserRouter })
  //   const firstUser = screen.getByText(mockUsers[0].firstName)
  //   const secondUser = screen.getByText(mockUsers[1].firstName)
  //   expect(firstUser).toBeInTheDocument()
  //   expect(secondUser).toBeInTheDocument()
  // })
  // it('clicking on a card opens a detailed card component', async () => {
  //   const user = userEvent.setup()
  //   render(<Cards users={mockUsers} />, {
  //     wrapper: BrowserRouter,
  //   })
  //   const userItem = screen.getByText(mockUsers[0].firstName)
  //   user.click(userItem)
  //   await waitFor(() => expect(window.location.pathname).toBe(`/user/1`))
  // })
})
