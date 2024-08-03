import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { Card } from '../card/card'
import { setTotalPages } from '../../store/reducers/pagination'
import Loader from '../common/loader/loader'
import { LIMIT } from '../../constants/constants'
import { IUsersData, IUser } from '../../ts/types'
import css from './cards.module.css'

export const Cards: React.FC<{ usersData: IUsersData }> = ({ usersData }) => {
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const { page } = router.query
      const pageMatch = url.match(/page=(\d+)/)
      let pageBefore = ''
      if (pageMatch) {
        pageBefore = pageMatch[1]
      }
      if (pageBefore !== page) {
        setIsLoading(true)
      }
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      setIsLoading(false)
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router])

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
