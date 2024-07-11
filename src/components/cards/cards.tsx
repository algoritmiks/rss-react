import css from './cards.module.css'
import { Card } from '../card/card'
import { Pagination } from '../pagination/pagination'
import { IUser } from '../../ts/types'
import { Outlet } from 'react-router-dom'

export const Cards: React.FC<{ users: IUser[] }> = ({ users }) => {
  return (
    <>
      <div className={css.cards}>
        {users.map((user: IUser) => {
          return <Card key={user.id} user={user} />
        })}
      </div>
      <Outlet />
      <Pagination />
    </>
  )
}
