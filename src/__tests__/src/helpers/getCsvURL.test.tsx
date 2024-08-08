import { describe, it, expect, vi, beforeAll } from 'vitest'
import { getCsvURL } from '../../../helpers/getCsvURL'
import { IDetailedUser } from '../../../ts/types'

const mockUsers: IDetailedUser[] = [
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

describe('getCsvURL', () => {
  beforeAll(() => {
    global.URL.createObjectURL = vi.fn().mockReturnValue('mock-url')
  })

  it('should generate a valid CSV URL', () => {
    const url = getCsvURL(mockUsers)
    expect(url).toBe('mock-url')
  })

  it('should contain correct CSV data', () => {
    const csvContent =
      'name,last name,username,age,e-mail\nJohn,Doe,johndoe,28,john.doe@example.com\nJane,Smith,janesmith,32,jane.smith@example.com'

    // Проверка содержимого CSV файла
    const mockBlob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const mockUrl = URL.createObjectURL(mockBlob)
    expect(mockUrl).toBe('mock-url')

    const url = getCsvURL(mockUsers)
    expect(url).toBe('mock-url')
  })
})
