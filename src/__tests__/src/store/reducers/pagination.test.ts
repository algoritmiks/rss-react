import { describe, it, expect } from 'vitest'
import paginationSlice, {
  setPage,
  setTotalPages,
} from '../../../../store/reducers/pagination'

describe('reducer paginationSlice', () => {
  const initialState = { page: 1, totalPages: 1, isLoading: true }

  it('check setTotalPages', () => {
    const setCurrentStepState = paginationSlice(
      initialState,
      setTotalPages({ totalPages: 1 }),
    )

    expect(setCurrentStepState).toEqual(initialState)
  })

  it('check setPage', () => {
    const setCurrentStepState = paginationSlice(
      initialState,
      setPage({ page: 2 }),
    )

    expect(setCurrentStepState).toEqual({
      page: 2,
      totalPages: 1,
      isLoading: true,
    })
  })
})
