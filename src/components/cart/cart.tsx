import { useSelector, useDispatch } from 'react-redux'
import { TRootState } from '../../store/store'
import { clearUsers } from '../../store/reducers/users'
import css from './cart.module.css'

export const Cart: React.FC = () => {
  const selectedUsers = useSelector((state: TRootState) => state.users)
  const dispatch = useDispatch()

  if (selectedUsers.length > 0) {
    return (
      <div className={css.cart}>
        <span
          className={css.text}
        >{`${selectedUsers.length} users selected`}</span>
        <button className={css.btn} onClick={() => dispatch(clearUsers())}>
          Clear
        </button>
        <button className={css.btn} onClick={() => console.log('save button')}>
          Save
        </button>
      </div>
    )
  }
}
