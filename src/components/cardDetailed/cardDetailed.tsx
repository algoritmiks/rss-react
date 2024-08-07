import { useNavigate, useSearchParams, useLoaderData } from '@remix-run/react'
import { Spinner } from '../common/spinner/spinner'
import { IDetailedUser } from '../../ts/types'
import css from './cardDetailed.module.css'

export const CardDetailed: React.FC = () => {
  const user: IDetailedUser = useLoaderData()

  const isLoading = false

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
        {isLoading ? (
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
