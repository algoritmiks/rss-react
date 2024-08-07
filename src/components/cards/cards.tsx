import { useLoaderData, useNavigation, useLocation } from '@remix-run/react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Card } from '../card/card'
import { setTotalPages } from '../../store/reducers/pagination'
import Loader from '../common/loader/loader'
import { LIMIT } from '../../constants/constants'
import { IUser, IUsersData } from '../../ts/types'
import css from './cards.module.css'

export const Cards: React.FC = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()
  const { state } = useNavigation()
  const data: IUsersData = useLoaderData()

  useEffect(() => {
    if (location.pathname === '/') {
      setIsLoading(state === 'loading' ? true : false)
    }
    if (state === 'idle') {
      setIsLoading(false)
    }
  }, [state])

  useEffect(() => {
    if (data) {
      dispatch(setTotalPages({ totalPages: Math.ceil(data.total / LIMIT) }))
    }
  }, [data])

  return (
    <>
      {data?.users.length === 0 && (
        <h1 className={css.notFound}>No users found</h1>
      )}
      <div className={css.cards}>
        <div className={css.loader}>{isLoading && <Loader />}</div>
        {data && (
          <>
            {data.users.map((user: IUser) => {
              return <Card key={user.id} user={user} />
            })}
          </>
        )}
      </div>
    </>
  )
}
