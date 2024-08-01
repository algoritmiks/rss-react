import { IDetailedUser, IUser } from '../../ts/types'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { addUser, removeUser } from '../../store/reducers/users'
import { TRootState } from '../../store/store'
import css from './card.module.css'

export const Card: React.FC<{ user: IUser }> = ({ user }) => {
  const dispatch = useDispatch()
  const selectedUsers = useSelector((state: TRootState) => state.users)

  const router = useRouter()
  const { page, search } = router.query
  const handleSelect = (user: IDetailedUser) => {
    if (selectedUsers.some((selectedUser) => selectedUser.id === user.id)) {
      dispatch(removeUser({ user }))
    } else {
      dispatch(addUser({ user }))
    }
  }

  return (
    <div className={css.card}>
      <div
        className={css.link}
        onClick={() =>
          router.push({ query: { search, page, detailed: user.id } })
        }
      >
        <div className={css.info}>
          <div className={css.nameContaner}>
            <div className={css.name}>{user.firstName}</div>
            <div className={css.name}>{user.lastName}</div>
          </div>
          <p>Age: {user.age}</p>
        </div>
      </div>
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
