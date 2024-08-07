import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import Loader from '../../../components/common/loader/loader'

describe('Loader component', () => {
  it('should render the loader container', () => {
    render(<Loader />)
    const loaderContainer = screen.getByTestId('loader-container')
    expect(loaderContainer).toBeInTheDocument()
  })

  it('should render the loader element', () => {
    render(<Loader />)
    const loaderElement = screen.getByTestId('loader-element')
    expect(loaderElement).toBeInTheDocument()
  })
})
