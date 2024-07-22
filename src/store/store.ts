import { configureStore } from '@reduxjs/toolkit'
import { userApi } from '../services/userService'
import pagination from './reducers/pagination'
import search from './reducers/search'
import users from './reducers/users'

export const store = configureStore({
  reducer: {
    pagination,
    search,
    users,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
