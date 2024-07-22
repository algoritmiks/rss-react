import { useEffect, useState, createContext, ReactNode } from 'react'

interface IThemeContext {
  isThemeDark: boolean
  setThemeIsDark: (value: boolean) => void
}

export const ThemeContext = createContext<IThemeContext>({
  isThemeDark: true,
  setThemeIsDark: () => true,
})

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isThemeDark, setThemeIsDark] = useState<boolean>(false)

  useEffect(() => {
    isThemeDark
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark')
  }, [isThemeDark])

  return (
    <ThemeContext.Provider value={{ isThemeDark, setThemeIsDark }}>
      {children}
    </ThemeContext.Provider>
  )
}
