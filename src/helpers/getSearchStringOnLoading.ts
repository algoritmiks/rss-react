export const getSearchStringOnLoading = () => {
  const searchLS = localStorage.getItem('searchString')
  const url = new URLSearchParams(window.location.search)
  const searchParam = url.get('search')
  if (searchParam) {
    return searchParam
  }
  return searchLS ? searchLS : ''
}
