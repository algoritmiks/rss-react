'use client'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { getSearchStringOnLoading } from '../helpers/getSearchStringOnLoading'
import { setSearchString as searchStringAction } from '../store/reducers/search'

export const useSearchString = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  typeof router,
] => {
  const [searchString, setSearchString] = useState<string>('')
  const router = useRouter()
  const dispatch = useDispatch()
  const params = useSearchParams()

  useEffect(() => {
    const detailed = params.get('detailed')
    const localStr = getSearchStringOnLoading()
    setSearchString(localStr)
    dispatch(searchStringAction({ searchString: localStr }))
    router.push(`/?search=${localStr}&detailed=${detailed ? detailed : ''}`)
  }, [])

  return [searchString, setSearchString, router]
}
