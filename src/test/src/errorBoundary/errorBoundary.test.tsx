import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import ErrorBoundary from '../../../components/errorBoundary/errorBoundary'

const ProblemComponent = () => {
  throw new Error('Error thrown by ProblemChild')
}

describe('ErrorBoundary test', () => {
  it('should display the ErrorFallback component when an error is thrown', () => {
    render(
      <BrowserRouter>
        <ErrorBoundary>
          <ProblemComponent />
        </ErrorBoundary>
      </BrowserRouter>,
    )

    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
  })
})
