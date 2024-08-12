'use client'
import { useSelector, useDispatch } from 'react-redux'
import { TRootState } from '../../store/store'
import { clearUsers } from '../../store/reducers/users'
import { getCsvURL } from '../../helpers/getCsvURL'
import css from './cart.module.css'

export const Cart: React.FC = () => {
  const selectedUsers = useSelector((state: TRootState) => state.users)
  const dispatch = useDispatch()

  if (selectedUsers.length > 0) {
    return (
      <div className={css.cart}>
        <span
          className={css.text}
        >{`${selectedUsers.length} ${selectedUsers.length === 1 ? 'user' : 'users'} selected`}</span>
        <button className={css.btn} onClick={() => dispatch(clearUsers())}>
          Unselect all
        </button>
        <a
          className={`${css.btn} ${css.savebtn}`}
          href={getCsvURL(selectedUsers)}
          download={`${selectedUsers.length}_users.csv`}
        >
          Download
        </a>
      </div>
    )
  }
}
