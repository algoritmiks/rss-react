import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants/constants'
import { IDetailedUser } from '../ts/types'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    fetchDetailedUser: build.query<IDetailedUser, string>({
      query: (id: string) => ({
        url: `/users/${id}`,
      }),
    }),
  }),
})
