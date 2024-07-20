import { configureStore } from '@reduxjs/toolkit'
import { userApi } from '../services/userService'
import pagination from './reducers/pagination'

export const store = configureStore({
  reducer: {
    pagination,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
