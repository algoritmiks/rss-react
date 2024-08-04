import { describe, it, expect } from 'vitest'
import { fetchUsers } from '../../../api/api' // Adjust import path as needed
import { IUsersData } from '../../../ts/types'

describe('API Functions', () => {
  it('fetches users data correctly', async () => {
    const search = 'John'
    const pageNumber = 1

    const data: IUsersData = await fetchUsers(search, pageNumber)

    expect(data).toHaveProperty('users')
    expect(data.users.length).toBeGreaterThan(0)
    expect(data).toHaveProperty('total')
  })
})
