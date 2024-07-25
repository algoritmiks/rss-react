import { describe, it, expect } from 'vitest'
import paginationSlice, {
  setPage,
  setTotalPages,
} from '../../../../store/reducers/pagination'

describe('reducer paginationSlice', () => {
  it('check setTotalPages', () => {
    const initialState = { page: 1, totalPages: 1 }

    const setCurrentStepState = paginationSlice(
      initialState,
      setTotalPages({ totalPages: 1 }),
    )

    expect(setCurrentStepState).toEqual(initialState)
  })

  it('check setPage', () => {
    const initialState = { page: 1, totalPages: 2 }

    const setCurrentStepState = paginationSlice(
      initialState,
      setPage({ page: 2 }),
    )

    expect(setCurrentStepState).toEqual({
      page: 2,
      totalPages: 2,
    })
  })
})
