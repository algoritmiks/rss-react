import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { setSearchString as dispatchSetSearchString } from '../store/reducers/search'
import { getSearchStringOnLoading } from '../helpers/getSearchStringOnLoading'

export const useSearchString = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
] => {
  const [searchString, setSearchString] = useState<string>('')
  const dispatch = useDispatch()
  const [, setSearchParams] = useSearchParams()

  useEffect(() => {
    const searchLS = getSearchStringOnLoading()
    if (searchLS) {
      setSearchString(searchLS)
      dispatch(dispatchSetSearchString({ searchString: searchLS }))
      setSearchParams({ page: '1', search: searchLS })
    }
  }, [])

  return [searchString, setSearchString]
}
