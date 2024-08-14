import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TFormFields } from '../../types/types'

export const formsSlice = createSlice({
  name: 'forms',
  initialState: <TFormFields[]>[],
  reducers: {
    addForm: (state, action: PayloadAction<{ form: TFormFields }>) => {
      state.push(action.payload.form)
    },
  },
})

export const { addForm } = formsSlice.actions

export default formsSlice.reducer
