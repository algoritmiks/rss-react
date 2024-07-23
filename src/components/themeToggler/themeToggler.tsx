import { useContext, memo } from 'react'
import { ThemeContext } from '../../providers/themeProvider'
import css from './themeToggler.module.css'

const ThemeToggler: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button className={css.btn} onClick={toggleTheme}>
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}

export default memo(ThemeToggler)
