import axios from 'axios'
import { IUser } from '../ts/types'

const BASE_URL = 'https://dummyjson.com/'
const LIMIT = 10

const api = axios.create({
  baseURL: BASE_URL,
})

export const fetchUsers = async (search: string): Promise<IUser[]> => {
  const { data } = await api.get(`users/search?q=${search}&limit=${LIMIT}`)
  return data.users
}
