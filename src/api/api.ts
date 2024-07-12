import axios from 'axios'
import { IDetailedUser, IUsersData } from '../ts/types'

const BASE_URL = 'https://dummyjson.com/'
export const LIMIT = 10

const api = axios.create({
  baseURL: BASE_URL,
})

export const fetchUsers = async (search: string): Promise<IUsersData> => {
  const { data } = await api.get(`users/search?q=${search}&limit=${LIMIT}`)
  console.log('data > ', data)
  return data
}

export const fetchUser = async (userId: string): Promise<IDetailedUser> => {
  const { data } = await api.get(`users/${userId}`)
  return data
}
