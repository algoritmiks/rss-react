import css from './cards.module.css'
import { Card } from '../card/card'
import { IUser } from '../../ts/types'

export const Cards: React.FC<{ users: IUser[] }> = ({ users }) => {
  if (users.length === 0) {
    return <h1>No users found</h1>
  }

  return (
    <>
      <div className={css.cards}>
        {users.map((user: IUser) => {
          return <Card key={user.id} user={user} />
        })}
      </div>
    </>
  )
}
