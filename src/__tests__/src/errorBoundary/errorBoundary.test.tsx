import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import ErrorBoundary from '../../../components/errorBoundary/errorBoundary'

describe('ErrorBoundary', () => {
  it('renders children without error', () => {
    const Child = () => <div>Child Component</div>
    render(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>,
    )
    expect(screen.getByText('Child Component')).toBeInTheDocument()
  })

  it('displays error message and reload button on error', () => {
    const ProblematicChild = () => {
      throw new Error('Test Error')
    }
    render(
      <ErrorBoundary>
        <ProblematicChild />
      </ErrorBoundary>,
    )
    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /reload/i })).toBeInTheDocument()
  })
})
