import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import { RouterProvider } from 'react-router-dom'
import { router } from '../../../router/router.tsx'
import { Provider } from 'react-redux'
import { store } from '../../../store/store'

describe('CharacterDetails Component', () => {
  it('displays loader while fetching data', async () => {
    router.navigate('/user/1/')
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>,
    )
    await waitFor(() => {
      expect(screen.getByRole('spinner')).toBeInTheDocument()
    })
  })
})
