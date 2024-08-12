import { IDetailedUser } from '../ts/types'

export const getCsv = (users: IDetailedUser[]) => {
  const title = ['name', 'last name', 'username', 'age', 'e-mail']

  const strings = users.map((user) => [
    user.firstName,
    user.lastName,
    user.username,
    user.age,
    user.email,
  ])

  return [title, ...strings].map((arr) => arr.join(',')).join('\n')
}

export const getCsvURL = (users: IDetailedUser[]) => {
  const csv = getCsv(users)
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  return URL.createObjectURL(blob)
}
