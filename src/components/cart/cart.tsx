import { useSelector, useDispatch } from 'react-redux'
import { TRootState } from '../../store/store'
import { clearUsers } from '../../store/reducers/users'
import { getCsvURL } from '../../helpers/csvConverter'
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
        <a
          className={`${css.btn} ${css.savebtn}`}
          href={getCsvURL(selectedUsers)}
          download={`${selectedUsers.length}_users.csv`}
        >
          Save
        </a>
      </div>
    )
  }
}
