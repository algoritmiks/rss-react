import { useContext } from 'react'
import { ThemeContext } from '../../providers/themeProvider'
import css from './themeToggler.module.css'

export default function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button className={css.btn} onClick={toggleTheme}>
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}
