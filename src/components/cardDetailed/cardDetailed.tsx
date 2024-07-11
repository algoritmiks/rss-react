import css from './cardDetailed.module.css'
import { useEffect, useState } from 'react'
import { fetchUser } from '../../api/api'
import { useNavigate, useParams } from 'react-router-dom'
import { IDetailedUser } from '../../ts/types'
import { Spinner } from '../common/spinner/spinner'

export const CardDetailed: React.FC = () => {
  const [user, setUser] = useState<IDetailedUser>({} as IDetailedUser)
  const [isLoading, setIsLoading] = useState(true)
  const { userId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    setIsLoading(true)
    fetchUser(userId as string).then((data) => {
      setUser(data)
      setIsLoading(false)
    })
  }, [userId])

  const handleClose = () => {
    navigate('/')
  }

  return (
    <div className={css.cardDetailed}>
      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </div>
  )
}
