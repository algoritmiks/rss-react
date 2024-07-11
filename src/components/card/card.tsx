import { IUser } from '../../ts/types'
import { Link } from 'react-router-dom'
import css from './card.module.css'

export const Card: React.FC<{ user: IUser }> = ({ user }) => {
  return (
    <div className={css.card}>
      <Link className={css.link} to={`/user/${user.id}?search=test`}>
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
