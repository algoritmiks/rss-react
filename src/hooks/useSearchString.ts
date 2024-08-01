import { useState, useEffect } from 'react'
import { useRouter, NextRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { getSearchStringOnLoading } from '../helpers/getSearchStringOnLoading'
import { setSearchString as searchStringAction } from '../store/reducers/search'

export const useSearchString = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  NextRouter,
] => {
  const [searchString, setSearchString] = useState<string>('')
  const router = useRouter()
  const dispatch = useDispatch()

  const { detailed } = router.query
  console.log('detailed useSearchString => ', detailed)

  useEffect(() => {
    const localStr = getSearchStringOnLoading()
    setSearchString(localStr)
    dispatch(searchStringAction({ searchString: localStr }))
    router.push({
      query: { search: localStr, detailed: detailed ? detailed : '' },
    })
  }, [])

  return [searchString, setSearchString, router]
}
