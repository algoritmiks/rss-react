import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import ThemeToggler from '../../../components/themeToggler/themeToggler'
import { ThemeContext, ThemeProvider } from '../../../providers/themeProvider'

const mockToggleTheme = vi.fn()

describe('ThemeToggler Component', () => {
  const renderWithThemeContext = (theme: 'light' | 'dark') => {
    render(
      <ThemeProvider>
        <ThemeContext.Provider value={{ theme, toggleTheme: mockToggleTheme }}>
          <ThemeToggler />
        </ThemeContext.Provider>
      </ThemeProvider>,
    )
  }

  it('calls toggleTheme when button is clicked', () => {
    renderWithThemeContext('light')
    fireEvent.click(screen.getByRole('button'))
    expect(mockToggleTheme).toHaveBeenCalled()
  })

  it('sets the document body class to the current theme', () => {
    const originalClassName = document.body.className

    renderWithThemeContext('light')
    expect(document.body.className).toBe('light')

    renderWithThemeContext('dark')
    expect(document.body.className).toBe('dark')

    // Clean up
    document.body.className = originalClassName
  })
})
