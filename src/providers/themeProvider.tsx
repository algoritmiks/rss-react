import { useEffect, useState, createContext, ReactNode } from 'react'

interface IThemeContext {
  isThemeDark: boolean
  setThemeIsDark: (value: boolean) => void
}

export const ThemeContext = createContext<IThemeContext>({
  isThemeDark: true,
  setThemeIsDark: () => true,
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isThemeDark, setThemeIsDark] = useState<boolean>(false)

  useEffect(() => {
    document.body.className = isThemeDark ? 'dark' : ''
  }, [isThemeDark])

  return (
    <ThemeContext.Provider value={{ isThemeDark, setThemeIsDark }}>
      {children}
    </ThemeContext.Provider>
  )
}
