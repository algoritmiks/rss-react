import { render, screen, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import { ThemeProvider, ThemeContext } from '../../providers/themeProvider'
import { useContext } from 'react'

// Helper component to use context
const TestComponent: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div>
      <span data-testid="theme-value">{theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

describe('ThemeProvider', () => {
  it('renders with initial theme', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    )

    // Check initial theme value
    expect(screen.getByTestId('theme-value')).toHaveTextContent('light')
  })

  it('toggles theme between light and dark', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    )

    // Check initial theme value
    expect(screen.getByTestId('theme-value')).toHaveTextContent('light')

    // Click toggle button to change theme
    act(() => {
      screen.getByText('Toggle Theme').click()
    })

    // Check theme value after toggle
    expect(screen.getByTestId('theme-value')).toHaveTextContent('dark')

    // Click toggle button again to change theme back
    act(() => {
      screen.getByText('Toggle Theme').click()
    })

    // Check theme value after second toggle
    expect(screen.getByTestId('theme-value')).toHaveTextContent('light')
  })
})
