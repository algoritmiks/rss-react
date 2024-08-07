import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Card } from '../card/card'
import { setTotalPages } from '../../store/reducers/pagination'
import Loader from '../common/loader/loader'
import { LIMIT } from '../../constants/constants'
import { IUser, IUsersData } from '../../ts/types'
import css from './cards.module.css'
import { useLoaderData } from '@remix-run/react'

export const Cards: React.FC = () => {
  const dispatch = useDispatch()

  const data: IUsersData = useLoaderData()

  useEffect(() => {
    if (data) {
      dispatch(setTotalPages({ totalPages: Math.ceil(data.total / LIMIT) }))
    }
  }, [data])

  const isLoading = false

  return (
    <>
      {data?.users.length === 0 && (
        <h1 className={css.notFound}>No users found</h1>
      )}
      <div className={css.cards}>
        {isLoading ? (
          <Loader />
        ) : (
          data && (
            <>
              {data.users.map((user: IUser) => {
                return <Card key={user.id} user={user} />
              })}
            </>
          )
        )}
      </div>
    </>
  )
}
