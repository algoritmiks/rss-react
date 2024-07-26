import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getPageFromUrl } from '../../helpers/getPageFromURL'

export interface IPaginationState {
  page: number
  totalPages: number
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: <IPaginationState>{
    page: getPageFromUrl(),
    totalPages: 1,
  },
  reducers: {
    setPage: (state, action: PayloadAction<{ page: number }>) => {
      state.page = action.payload.page
    },
    setTotalPages: (state, action: PayloadAction<{ totalPages: number }>) => {
      state.totalPages = action.payload.totalPages
    },
  },
})

export const { setPage, setTotalPages } = paginationSlice.actions

export default paginationSlice.reducer
