import { describe, it, expect } from 'vitest'
import searchStringSlice, {
  setSearchString,
} from '../../../../store/reducers/search'

describe('reducer search', () => {
  it('check search string', () => {
    const initialState = { searchString: 'test search' }

    const setCurrentStepState = searchStringSlice(
      initialState,
      setSearchString({ searchString: 'test search' }),
    )

    expect(setCurrentStepState).toEqual(initialState)
  })
})
