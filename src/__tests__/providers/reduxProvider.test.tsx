import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import Providers from '../../providers/reduxProvider'

const TestComponent: React.FC = () => {
  return <div data-testid="test-component">Hello World</div>
}

describe('Providers Component', () => {
  it('renders children correctly', () => {
    render(
      <Providers>
        <TestComponent />
      </Providers>,
    )

    expect(screen.getByTestId('test-component')).toBeInTheDocument()
  })
})
