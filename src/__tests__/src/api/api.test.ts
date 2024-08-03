import { describe, it, expect } from 'vitest'
import { fetchUsers, fetchUser } from '../../../api/api' // Adjust import path as needed
import { IUsersData, IDetailedUser } from '../../../ts/types'

describe('API Functions', () => {
  it('fetches users data correctly', async () => {
    const search = 'John'
    const pageNumber = 1

    const data: IUsersData = await fetchUsers(search, pageNumber)

    expect(data).toHaveProperty('users')
    expect(data.users.length).toBeGreaterThan(0)
    expect(data).toHaveProperty('total')
  })

  it('fetches a user by ID correctly', async () => {
    const userId = '1'

    const data: IDetailedUser = await fetchUser(userId)

    expect(data).toHaveProperty('email')
  })
})
