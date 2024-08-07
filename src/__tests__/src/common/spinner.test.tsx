import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import { Spinner } from '../../../components/common/spinner/spinner'

describe('Spinner component', () => {
  it('should render the spinner container', () => {
    render(<Spinner />)
    const spinnerContainer = screen.getByRole('spinner')
    expect(spinnerContainer).toBeInTheDocument()
  })

  it('should render the spinner element', () => {
    render(<Spinner />)
    const spinnerElement = screen.getByRole('spinner').firstChild
    expect(spinnerElement).toBeInTheDocument()
  })
})
