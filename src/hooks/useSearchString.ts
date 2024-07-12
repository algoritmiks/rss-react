import { useEffect, useState } from 'react'

export const useSearchString = () => {
  const [searchString, setSearchString] = useState<string>('')
  useEffect(() => {
    const searchLS = localStorage.getItem('searchString')
    if (searchLS) {
      setSearchString(searchLS)
    }
  }, [])

  return searchString
}
