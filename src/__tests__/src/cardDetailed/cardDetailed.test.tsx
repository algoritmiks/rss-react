import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import { CardDetailed } from '../../../components/cardDetailed/cardDetailed'
import { Provider } from 'react-redux'
import { store } from '../../../store/store'

vi.mock('next/navigation', async () => {
  return {
    useRouter: () => ({
      query: { detailed: '1' },
      push: vi.fn(),
    }),
    useSearchParams: () => ({
      get: (key: string) => {
        const params: Record<string, string> = {
          search: 'example',
          page: '1',
          detailed: '1',
        }
        return params[key] || null
      },
    }),
  }
})

describe('CharacterDetails Component', () => {
  it('displays loader while fetching data', async () => {
    render(
      <Provider store={store}>
        <CardDetailed />
      </Provider>,
    )

    await waitFor(() => {
      const card = screen.getAllByText('Age: 28')
      expect(card).toHaveLength(1)
    })
  })
})
