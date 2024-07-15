export interface IUser {
  id: number
  firstName: string
  lastName: string
  age: number
}

export interface IDetailedUser extends IUser {
  username: string
  email: string
}

export interface IUsersData {
  users: IUser[]
  limit: number
  skip: number
  total: number
}
