import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDetailedUser } from '../../ts/types'

export const usersSlice = createSlice({
  name: 'users',
  initialState: <IDetailedUser[]>[],
  reducers: {
    addUser: (state, action: PayloadAction<{ user: IDetailedUser }>) => {
      state.push(action.payload.user)
    },
    removeUser: (state, action: PayloadAction<{ user: IDetailedUser }>) => {
      return state.filter((user) => user.id !== action.payload.user.id)
    },
    clearUsers: () => {
      return []
    },
  },
})

export const { addUser, removeUser, clearUsers } = usersSlice.actions

export default usersSlice.reducer
