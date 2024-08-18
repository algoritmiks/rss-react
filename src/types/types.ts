export type IFormFields = {
  name: string
  age: number
  email: string
  pwd: string
  pwdConfirm: string
  gender: string
  country: string
  img?: FileList | undefined
  tc?: boolean | undefined
}

export interface IFormData {
  name: string
  age: number
  email: string
  pwd: string
  pwdConfirm: string
  gender: string
  country: string
  img: string
  tc: boolean
}
