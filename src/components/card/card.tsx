import { Link, useSearchParams } from '@remix-run/react'
import { IDetailedUser, IUser } from '../../ts/types'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../../store/reducers/users'
import { TRootState } from '../../store/store'
import css from './card.module.css'

export const Card: React.FC<{ user: IUser }> = ({ user }) => {
  const dispatch = useDispatch()
  const selectedUsers = useSelector((state: TRootState) => state.users)
  const [searchParams] = useSearchParams()
  const searchParam = searchParams.get('search')
  const pageParam = searchParams.get('page')

  const handleSelect = (user: IDetailedUser) => {
    if (selectedUsers.some((selectedUser) => selectedUser.id === user.id)) {
      dispatch(removeUser({ user }))
    } else {
      dispatch(addUser({ user }))
    }
  }

  return (
    <div className={css.card}>
      <Link
        className={css.link}
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
      <input
        className={css.checkbox}
        type="checkbox"
        onChange={() => handleSelect(user as IDetailedUser)}
        checked={selectedUsers.some(
          (selectedUser) => selectedUser.id === user.id,
        )}
      />
    </div>
  )
}
