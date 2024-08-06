import { useState, useEffect } from 'react'
import { getSearchStringOnLoading } from '../helpers/getSearchStringOnLoading'

export const useSearchString = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
] => {
  const [searchString, setSearchString] = useState<string>(
    // getSearchStringOnLoading,
    '',
  )

  useEffect(() => {
    setSearchString(getSearchStringOnLoading())
  }, [])

  return [searchString, setSearchString]
}
