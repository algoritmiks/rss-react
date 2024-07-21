import { useContext } from 'react'
import { ThemeContext } from '../../App'

export const ThemeToggler: React.FC = () => {
  const { setThemeIsDark, isThemeDark } = useContext(ThemeContext)

  return (
    <button className={'btn'} onClick={() => setThemeIsDark(!isThemeDark)}>
      {isThemeDark ? 'Light' : 'Dark'}
    </button>
  )
}
