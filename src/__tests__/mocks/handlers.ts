import { http, HttpResponse } from 'msw'
import { mockUsers, mockFullDataUsers } from '../src/cards/mockUsers'

export const handlers = [
  http.get('https://dummyjson.com/users/1', () => {
    return HttpResponse.json(mockUsers[0])
  }),

  http.get('https://dummyjson.com/users/search?skip=0&limit=10&q=', () => {
    return HttpResponse.json(mockFullDataUsers)
  }),
]
