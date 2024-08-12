import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IPaginationState {
  page: number
  totalPages: number
  isLoading: boolean
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: <IPaginationState>{
    page: 1,
    totalPages: 1,
    isLoading: true,
  },
  reducers: {
    setPage: (state, action: PayloadAction<{ page: number }>) => {
      state.page = action.payload.page
    },
    setTotalPages: (state, action: PayloadAction<{ totalPages: number }>) => {
      state.totalPages = action.payload.totalPages
    },
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading
    },
  },
})

export const { setPage, setTotalPages, setIsLoading } = paginationSlice.actions

export default paginationSlice.reducer
