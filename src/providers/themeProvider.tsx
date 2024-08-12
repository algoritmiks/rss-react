import { useState, createContext, ReactNode, useCallback } from 'react'

interface IThemeContext {
  theme: Theme
  toggleTheme: () => void
}

type Theme = 'light' | 'dark'

const contextDefaultValue: IThemeContext = {
  theme: 'light',
  toggleTheme: () => {},
}

export const ThemeContext = createContext<IThemeContext>(contextDefaultValue)

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setThemeIsDark] = useState<Theme>('light')

  const toggleTheme = useCallback(() => {
    setThemeIsDark((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
