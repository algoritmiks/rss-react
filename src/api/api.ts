import axios from 'axios'

const BASE_URL = 'https://swapi.dev/api/'

//"https://swapi.dev/api/people/?page=2"

const api = axios.create({
  baseURL: BASE_URL,
})

export const getPeople = async (search: string) => {
  const { data } = await api.get(`people?search=${search}`)
  return data
}
