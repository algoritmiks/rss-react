import axios from 'axios'
import { IPeople } from '../ts/types'

const BASE_URL = 'https://swapi.dev/api/'

const api = axios.create({
  baseURL: BASE_URL,
})

export const fetchPeople = async (search: string): Promise<IPeople[]> => {
  const { data } = await api.get(`people?search=${search}`)
  return data.results
}
