import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ISearchString {
  searchString: string
}

export const searchStringSlice = createSlice({
  name: 'search',
  initialState: <ISearchString>{
    searchString: '',
  },
  reducers: {
    setSearchString: (
      state,
      action: PayloadAction<{ searchString: string }>,
    ) => {
      state.searchString = action.payload.searchString
    },
  },
})

export const { setSearchString } = searchStringSlice.actions

export default searchStringSlice.reducer
