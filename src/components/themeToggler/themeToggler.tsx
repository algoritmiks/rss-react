'use client'
import { useContext, memo } from 'react'
import { ThemeContext } from '../../providers/themeProvider'
import css from './themeToggler.module.css'
import { useEffect } from 'react'

const ThemeToggler: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <button className={css.btn} onClick={toggleTheme}>
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}

export default memo(ThemeToggler)
