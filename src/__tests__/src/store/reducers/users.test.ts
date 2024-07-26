import { describe, it, expect } from 'vitest'
import { mockUsers } from '../../cards/mockUsers'
import usersSlice, {
  addUser,
  removeUser,
  clearUsers,
} from '../../../../store/reducers/users'

describe('user reducer', () => {
  it('add user', () => {
    const initialState = [mockUsers[0]]

    const setCurrentStepState = usersSlice(
      initialState,
      addUser({ user: mockUsers[1] }),
    )

    expect(setCurrentStepState).toEqual([...initialState, mockUsers[1]])
  })

  it('remove user', () => {
    const initialState = [mockUsers[0], mockUsers[1]]

    const setCurrentStepState = usersSlice(
      initialState,
      removeUser({ user: mockUsers[1] }),
    )

    expect(setCurrentStepState).toEqual([mockUsers[0]])
  })

  it('clear users', () => {
    const initialState = [mockUsers[0]]

    const setCurrentStepState = usersSlice(initialState, clearUsers())

    expect(setCurrentStepState).toEqual([])
  })
})
