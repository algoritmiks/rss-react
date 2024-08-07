import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ThemeToggler from '../../../components/themeToggler/themeToggler'
import { ThemeContext } from '../../../providers/themeProvider'
import '@testing-library/jest-dom'

// Create a mock function for toggleTheme
const mockToggleTheme = vi.fn()

// Helper function to render ThemeToggler with different themes
const renderWithThemeContext = (theme: 'light' | 'dark') => {
  render(
    <ThemeContext.Provider value={{ theme, toggleTheme: mockToggleTheme }}>
      <ThemeToggler />
    </ThemeContext.Provider>,
  )
}

describe('ThemeToggler Component', () => {
  it('renders "Light" when the theme is "dark"', () => {
    renderWithThemeContext('dark')
    expect(screen.getByRole('button')).toHaveTextContent('Light')
  })

  it('renders "Dark" when the theme is "light"', () => {
    renderWithThemeContext('light')
    expect(screen.getByRole('button')).toHaveTextContent('Dark')
  })

  it('calls toggleTheme when the button is clicked', () => {
    renderWithThemeContext('dark')
    fireEvent.click(screen.getByRole('button'))
    expect(mockToggleTheme).toHaveBeenCalled()
  })
})
