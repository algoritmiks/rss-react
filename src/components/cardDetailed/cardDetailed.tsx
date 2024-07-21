import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Spinner } from '../common/spinner/spinner'
import { userApi } from '../../services/userService'
import css from './cardDetailed.module.css'

export const CardDetailed: React.FC = () => {
  const { userId } = useParams()
  const {
    data: user,
    isLoading,
    isFetching,
  } = userApi.useFetchDetailedUserQuery(userId as string)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const searchParam = searchParams.get('search')
  const pageParam = searchParams.get('page')

  const handleClose = () => {
    navigate(`/?page=${pageParam}&search=${searchParam}`)
  }

  return (
    <>
      <div className={css.background} onClick={handleClose}></div>
      <div className={css.cardDetailed}>
        {isLoading || isFetching ? (
          <Spinner />
        ) : (
          user && (
            <>
              <div className={css.info}>
                <div className={css.name}>
                  {user.firstName} {user.lastName}
                </div>
                <p>Age: {user.age}</p>
                <p>{user.email}</p>
                <p>username: {user.username}</p>
              </div>

              <button className={css.btn} onClick={handleClose}>
                Close
              </button>
            </>
          )
        )}
      </div>
    </>
  )
}
