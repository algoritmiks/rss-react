import { configureStore } from '@reduxjs/toolkit'
import countries from './reducers/countries'
import forms from './reducers/forms'

export const store = configureStore({
  reducer: {
    countries,
    forms,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type TRootState = ReturnType<typeof store.getState>
