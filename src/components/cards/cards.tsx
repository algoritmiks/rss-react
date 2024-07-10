import css from './cards.module.css'
import { Card } from '../card/card'
import { IUser } from '../../ts/types'

export const Cards: React.FC<{ users: IUser[] }> = ({ users }) => {
  return (
    <div className={css.cards}>
      {users.map((user: IUser) => {
        return <Card key={user.id} user={user} />
      })}
    </div>
  )
}
