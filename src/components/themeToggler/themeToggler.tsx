import { useContext } from 'react'
import { ThemeContext } from '../../providers/themeProvider'

export const ThemeToggler: React.FC = () => {
  const { isThemeDark, setThemeIsDark } = useContext(ThemeContext)

  return (
    <button className={'btn'} onClick={() => setThemeIsDark(!isThemeDark)}>
      {isThemeDark ? 'Light' : 'Dark'}
    </button>
  )
}
