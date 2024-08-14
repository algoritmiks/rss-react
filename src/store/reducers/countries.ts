import { createSlice } from '@reduxjs/toolkit'
import { countries } from '../../constants/countries'

export const countriesSlice = createSlice({
  name: 'countries',
  initialState: countries,
  reducers: {},
})

export default countriesSlice.reducer
