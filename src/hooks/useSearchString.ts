import { useState } from 'react'
import { getSearchStringOnLoading } from '../helpers/getSearchStringOnLoading'
export const useSearchString = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
] => {
  const [searchString, setSearchString] = useState<string>(
    getSearchStringOnLoading,
  )

  return [searchString, setSearchString]
}
