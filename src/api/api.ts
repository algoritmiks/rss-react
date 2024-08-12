import axios from 'axios'
import { IUsersData, IDetailedUser } from '../ts/types'

const BASE_URL = 'https://dummyjson.com/'
export const LIMIT = 10

const api = axios.create({
  baseURL: BASE_URL,
})

export const fetchUsers = async (
  search: string,
  pageNumber: number,
): Promise<IUsersData> => {
  const { data } = await api.get(
    `users/search?q=${search}&limit=${LIMIT}&skip=${(pageNumber - 1) * LIMIT}`,
  )
  return data
}

export const fetchUser = async (userId: string): Promise<IDetailedUser> => {
  const { data } = await api.get(`users/${userId}`)
  return data
}
