import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Spinner } from '../common/spinner/spinner'
import { IDetailedUser } from '../../ts/types'
import css from './cardDetailed.module.css'

export const CardDetailed: React.FC<{ user: IDetailedUser }> = ({ user }) => {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const { detailed, page, search } = router.query

  const handleClose = () => {
    router.push({ query: { search, page, detailed: '' } })
  }

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const { detailed } = router.query
      const detailedMatch = url.match(/detailed=(\d+)/)
      let detailedBefore = ''
      if (detailedMatch) {
        detailedBefore = detailedMatch[1]
      }
      if (detailedBefore !== detailed) {
        setIsLoading(true)
      }
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      setIsLoading(false)
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router])

  if (!detailed) {
    return null
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
