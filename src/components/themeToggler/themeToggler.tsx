import { useContext } from 'react'
import { ThemeContext } from '../../providers/themeProvider'
import css from './themeToggler.module.css'

export const ThemeToggler: React.FC = () => {
  const { isThemeDark, setThemeIsDark } = useContext(ThemeContext)

  return (
    <button className={css.btn} onClick={() => setThemeIsDark(!isThemeDark)}>
      {isThemeDark ? 'Light' : 'Dark'}
    </button>
  )
}
