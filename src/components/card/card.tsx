import { IUser } from '../../ts/types'
import { Link } from 'react-router-dom'
import css from './card.module.css'
import { useSearchParams } from 'react-router-dom'

export const Card: React.FC<{ user: IUser }> = ({ user }) => {
  const [searchParams] = useSearchParams()
  const searchParam = searchParams.get('search')
  const pageParam = searchParams.get('page')

  return (
    <div className={css.card}>
      <Link
        className={css.link}
        to={`/user/${user.id}?page=${pageParam}&search=${searchParam}`}
      >
        <div className={css.info}>
          <div className={css.name}>
            {user.firstName} {user.lastName}
          </div>
          <p>Age: {user.age}</p>
        </div>
      </Link>
    </div>
  )
}
