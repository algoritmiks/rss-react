import { IDetailedUser } from '../ts/types'

const convertCsv = (users: IDetailedUser[]) => {
  const title = ['name', 'last name', 'username', 'age', 'e-mail']

  const strings = users.map((user) => [
    user.firstName,
    user.lastName,
    user.username,
    user.age,
    user.email,
  ])

  return [title, ...strings].map((row) => row.join(',')).join('\n')
}

export const getCsvURL = (users: IDetailedUser[]) => {
  const data = convertCsv(users)
  const blob = new Blob([data], { type: 'text/csv;charset=utf-8;' })
  return URL.createObjectURL(blob)
}
