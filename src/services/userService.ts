import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, LIMIT } from '../api/api'
import { IUser, IDetailedUser } from '../ts/types'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    fetchUsers: build.query<IUser[], { skip: number; search: string }>({
      query: ({ skip, search }) => ({
        url: `/users/search`,
        params: {
          skip,
          limit: LIMIT,
          q: search,
        },
      }),
    }),
    fetchDetailedUser: build.query<IDetailedUser, string>({
      query: (id: string) => ({
        url: `/users/${id}`,
      }),
    }),
  }),
})
