'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import { TRootState } from '../../store/store'
import { Spinner } from '../common/spinner/spinner'
import css from './cardDetailed.module.css'
import { IDetailedUser } from '../../ts/types'

export const CardDetailed: React.FC<{ user: IDetailedUser }> = ({ user }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const page = searchParams.get('page')

  const { isLoading } = useSelector((state: TRootState) => state.pagination)

  const handleClose = () => {
    router.push(
      `/?search=${search ? search : ''}&page=${page ? page : ''}&detailed=`,
    )
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
