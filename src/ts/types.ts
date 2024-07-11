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
