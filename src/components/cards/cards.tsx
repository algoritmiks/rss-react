import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from '../card/card'
import { TRootState } from '../../store/store'
import { setTotalPages } from '../../store/reducers/pagination'
import { userApi } from '../../services/userService'
import Loader from '../common/loader/loader'
import { LIMIT } from '../../constants/constants'
import { IUsersData, IUser } from '../../ts/types'
import css from './cards.module.css'

export const Cards: React.FC<{ usersData: IUsersData }> = ({ usersData }) => {
  const dispatch = useDispatch()
  const pagination = useSelector((state: TRootState) => state.pagination)
  const searchString = useSelector(
    (state: TRootState) => state.search.searchString,
  )
  const { isLoading, isFetching } = userApi.useFetchUsersQuery({
    skip: (pagination.page - 1) * LIMIT,
    search: searchString,
  })

  useEffect(() => {
    if (usersData) {
      dispatch(
        setTotalPages({ totalPages: Math.ceil(usersData.total / LIMIT) }),
      )
    }
  }, [usersData])

  return (
    <>
      {usersData?.users.length === 0 && (
        <h1 className={css.notFound}>No users found</h1>
      )}
      <div className={css.cards}>
        {isLoading || isFetching ? (
          <Loader />
        ) : (
          usersData && (
            <>
              {usersData.users.map((user: IUser) => {
                return <Card key={user.id} user={user} />
              })}
            </>
          )
        )}
      </div>
    </>
  )
}
