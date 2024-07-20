import css from './cards.module.css'
import { Card } from '../card/card'
import { IUser } from '../../ts/types'
import { userApi } from '../../services/userService'
import { useSelector, useDispatch } from 'react-redux'
import { LIMIT } from '../../api/api'
import { setTotalPages } from '../../store/reducers/pagination'
import { RootState } from '../../store/store'
import Loader from '../common/loader/loader'
import { useEffect } from 'react'

export const Cards: React.FC = () => {
  const dispatch = useDispatch()
  const pagination = useSelector((state: RootState) => state.pagination)
  const searchString = useSelector(
    (state: RootState) => state.search.searchString,
  )
  const { data, isLoading } = userApi.useFetchUsersQuery({
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
      {isLoading && <Loader />}
      {data?.users.length === 0 && <h1>No users found</h1>}
      <div className={css.cards}>
        {data?.users.map((user: IUser) => {
          return <Card key={user.id} user={user} />
        })}
      </div>
    </>
  )
}
