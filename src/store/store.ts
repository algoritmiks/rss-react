import { configureStore } from '@reduxjs/toolkit'
import pagination from './reducers/pagination'
import search from './reducers/search'
import users from './reducers/users'

export const store = configureStore({
  reducer: {
    pagination,
    search,
    users,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type TRootState = ReturnType<typeof store.getState>
