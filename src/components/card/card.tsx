import { IUser } from '../../ts/types'
import { Link } from 'react-router-dom'
import css from './card.module.css'

export const Card: React.FC<{ user: IUser }> = ({ user }) => {
  return (
    <Link className={css.link} to={`/users/${user.id}`}>
      <div className={css.card}>
        <div className={css.name}>
          {user.firstName} {user.lastName}
        </div>
        <p>Age: {user.age}</p>
      </div>
    </Link>
  )
}
