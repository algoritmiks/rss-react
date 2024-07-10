import { IUser } from '../../ts/types'
import css from './card.module.css'

export const Card: React.FC<{ user: IUser }> = ({ user }) => {
  return (
    <div className={css.card}>
      <div className={css.name}>
        {user.firstName} {user.lastName}
      </div>
      <p>Age: {user.age}</p>
    </div>
  )
}
