import { describe, expect, test } from 'vitest'
import { Spinner } from '../components/common/spinner/spinner'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Spinner', () => {
  test('should render correctly', () => {
    render(<Spinner />)
    const spinner = screen.getByRole('container')
    expect(spinner).toBeInTheDocument()
  })
})
