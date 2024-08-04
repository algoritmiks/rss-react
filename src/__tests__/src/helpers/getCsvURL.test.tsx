import { describe, it, expect } from 'vitest'
import { IDetailedUser } from '../../../ts/types'
import { getCsv } from '../../../helpers/getCsvURL'

describe('CSV Utilities', () => {
  describe('getCsv', () => {
    it('should convert an array of users to a CSV string', () => {
      const users: IDetailedUser[] = [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          username: 'johndoe',
          age: 28,
          email: 'john.doe@example.com',
        },
        {
          id: 2,
          firstName: 'Jane',
          lastName: 'Smith',
          username: 'janesmith',
          age: 32,
          email: 'jane.smith@example.com',
        },
      ]

      const expectedCsv = [
        'name,last name,username,age,e-mail',
        'John,Doe,johndoe,28,john.doe@example.com',
        'Jane,Smith,janesmith,32,jane.smith@example.com',
      ].join('\n')

      expect(getCsv(users)).toBe(expectedCsv)
    })
  })
})
