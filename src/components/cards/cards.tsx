import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from '../card/card'
import { RootState } from '../../store/store'
import { setTotalPages } from '../../store/reducers/pagination'
import { userApi } from '../../services/userService'
import Loader from '../common/loader/loader'
import { LIMIT } from '../../constants/constants'
import { IUser } from '../../ts/types'
import css from './cards.module.css'

export const Cards: React.FC = () => {
  const dispatch = useDispatch()
  const pagination = useSelector((state: RootState) => state.pagination)
  const searchString = useSelector(
    (state: RootState) => state.search.searchString,
  )
  const { data, isLoading, isFetching } = userApi.useFetchUsersQuery({
    skip: (pagination.page - 1) * LIMIT,
    search: searchString,
  })

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
        {isLoading || isFetching ? (
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
