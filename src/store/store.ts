import { configureStore } from '@reduxjs/toolkit'
import { userApi } from '../services/userService'
import pagination from './reducers/pagination'
import search from './reducers/search'

export const store = configureStore({
  reducer: {
    pagination,
    search,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
