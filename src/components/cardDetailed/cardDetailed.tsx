import { useRouter } from 'next/router'
import { Spinner } from '../common/spinner/spinner'
import { userApi } from '../../services/userService'
import css from './cardDetailed.module.css'

export const CardDetailed: React.FC = () => {
  const router = useRouter()
  const { detailed: userId, page, search } = router.query

  const {
    data: user,
    isLoading,
    isFetching,
  } = userApi.useFetchDetailedUserQuery(userId as string)

  const handleClose = () => {
    router.push({ query: { search, page, detailed: '' } })
  }

  if (!userId) {
    return null
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
