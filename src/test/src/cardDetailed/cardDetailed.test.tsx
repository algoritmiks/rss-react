import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { RouterProvider } from 'react-router-dom'
import { router } from '../../../router/router.tsx'

describe('CharacterDetails Component', () => {
  it('displays loader while fetching data', async () => {
    router.navigate('/user/1/')
    render(<RouterProvider router={router} />)
    await waitFor(() => {
      expect(screen.getByRole('spinner')).toBeInTheDocument()
    })
  })

  it('displays detailed info correctly', async () => {
    router.navigate('/user/1/')
    render(<RouterProvider router={router} />)
    await waitFor(() => {
      expect(screen.getByText('Age: 28')).toBeInTheDocument()
    })
  })

  it('displays "character not found" for non existing character', async () => {
    router.navigate('/user/1/')
    render(<RouterProvider router={router} />)
    await waitFor(() => {
      expect(screen.getByRole('spinner')).toBeInTheDocument()
    })
  })

  it('hides the component when clicking the close button', async () => {
    router.navigate('/user/1/')
    render(<RouterProvider router={router} />)
    await waitFor(() => {
      const closeButton = screen.getByText('Close')
      expect(closeButton).toBeInTheDocument()
      userEvent.click(closeButton)
    })

    await waitFor(() => {
      expect(window.location.pathname).not.toContain('/user/1')
      const closeButton = screen.queryByText('Close')
      expect(closeButton).toBeNull()
    })
  })
})
