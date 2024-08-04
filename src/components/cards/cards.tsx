'use client'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '../card/card'
import { setIsLoading, setTotalPages } from '../../store/reducers/pagination'
import Loader from '../common/loader/loader'
import { LIMIT } from '../../constants/constants'
import { IUsersData, IUser } from '../../ts/types'
import { setPage } from '../../store/reducers/pagination'
import { TRootState } from '../../store/store'
import css from './cards.module.css'

export const Cards: React.FC<{ usersData: IUsersData; page: number }> = ({
  usersData,
  page,
}) => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state: TRootState) => state.pagination)

  useEffect(() => {
    dispatch(setPage({ page: Number(page) }))
  }, [])

  useEffect(() => {
    dispatch(setIsLoading({ isLoading: false }))
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
        {isLoading ? (
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
