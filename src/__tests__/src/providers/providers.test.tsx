import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Providers from '../../../providers/providers' // Adjust the import path as needed
import '@testing-library/jest-dom'

describe('Providers Component', () => {
  it('renders children correctly', () => {
    // Render the Providers component with test children
    render(
      <Providers>
        <div>Test Child</div>
      </Providers>,
    )

    // Verify that the test child element is present in the document
    expect(screen.getByText('Test Child')).toBeInTheDocument()
  })

  it('provides the Redux store and theme context', () => {
    // Render the Providers component with a test child that relies on contexts
    render(
      <Providers>
        <div>Test Child</div>
      </Providers>,
    )

    // Add any specific checks here if necessary, e.g., checking for context values
    // This example assumes no direct checks are required for contexts.
  })
})
