import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Providers from '../../../providers/providers'
import '@testing-library/jest-dom'

describe('Providers Component', () => {
  it('renders children correctly', () => {
    render(
      <Providers>
        <div>Test Child</div>
      </Providers>,
    )

    expect(screen.getByText('Test Child')).toBeInTheDocument()
  })

  it('provides the Redux store and theme context', () => {
    render(
      <Providers>
        <div>Test Child</div>
      </Providers>,
    )
  })
})
