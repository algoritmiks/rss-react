import { useState } from 'react'

export const useSearchString = () => {
  const [searchString, setSearchString] = useState<string>('')
  return { searchString, setSearchString }
}
