import { useContext } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Spinner } from '../common/spinner/spinner'
import { ThemeContext } from '../../App'
import { userApi } from '../../services/userService'
import css from './cardDetailed.module.css'

export const CardDetailed: React.FC = () => {
  const { userId } = useParams()
  const { data: user, isLoading } = userApi.useFetchDetailedUserQuery(
    userId as string,
  )
  const navigate = useNavigate()
  const isThemeDark = useContext(ThemeContext)
  const [searchParams] = useSearchParams()

  const searchParam = searchParams.get('search')
  const pageParam = searchParams.get('page')

  const handleClose = () => {
    navigate(`/?page=${pageParam}&search=${searchParam}`)
  }

  return (
    <>
      <div className={css.background} onClick={handleClose}></div>
      <div
        className={css.cardDetailed + ' ' + (isThemeDark ? css.darkTheme : '')}
      >
        {isLoading && <Spinner />}
        {user && (
          <>
            <div className={css.info}>
              <div className={css.name}>
                {user.firstName} {user.lastName}
              </div>
              <p>Age: {user.age}</p>
              <p>{user.email}</p>
              <p>username: {user.username}</p>
            </div>

            <button
              className={css.btn + ' ' + (isThemeDark ? css.darkbtn : '')}
              onClick={handleClose}
            >
              Close
            </button>
          </>
        )}
      </div>
    </>
  )
}
