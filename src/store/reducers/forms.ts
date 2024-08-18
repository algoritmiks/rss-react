import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFormData } from '../../types/types'

export const formsSlice = createSlice({
  name: 'forms',
  initialState: <IFormData[]>[],
  reducers: {
    addForm: (state, action: PayloadAction<IFormData>) => {
      state.unshift(action.payload)
    },
  },
})

export const { addForm } = formsSlice.actions

export default formsSlice.reducer
