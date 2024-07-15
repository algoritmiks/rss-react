import { IUser } from '../../ts/types'
import { Link } from 'react-router-dom'
import css from './card.module.css'
import { useSearchParams } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../../App'

export const Card: React.FC<{ user: IUser }> = ({ user }) => {
  const [searchParams] = useSearchParams()
  const searchParam = searchParams.get('search')
  const pageParam = searchParams.get('page')
  const isThemeDark = useContext(ThemeContext)

  return (
    <div className={css.card + ' ' + (isThemeDark ? css.darkTheme : '')}>
      <Link
        className={css.link + ' ' + (isThemeDark ? css.darkTheme : '')}
        to={`/user/${user.id}?page=${pageParam}&search=${searchParam}`}
      >
        <div className={css.info}>
          <div className={css.nameContaner}>
            <div className={css.name}>{user.firstName}</div>
            <div className={css.name}>{user.lastName}</div>
          </div>
          <p>Age: {user.age}</p>
        </div>
      </Link>
    </div>
  )
}
