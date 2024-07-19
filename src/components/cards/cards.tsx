import css from './cards.module.css'
import { Card } from '../card/card'
import { IUser } from '../../ts/types'
import { userApi } from '../../services/userService'

export const Cards: React.FC<{ users: IUser[] }> = ({ users }) => {
  const { data, isLoading } = userApi.useFetchUsersQuery({
    skip: 0,
    search: 'gor',
  })

  console.log('cards.tsx data > ', data)

  if (isLoading) {
    return <h1>Loading...</h1>
  }

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
