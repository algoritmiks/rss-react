import { describe, it, expect } from 'vitest'
import { BASE_URL, LIMIT } from '../../constants/constants'

describe('Constants', () => {
  it('should have the correct BASE_URL', () => {
    expect(BASE_URL).toBe('https://dummyjson.com/')
  })

  it('should have the correct LIMIT', () => {
    expect(LIMIT).toBe(10)
  })
})
