export const getPageFromUrl = (): number => {
  const url = new URLSearchParams(window.location.search)
  const page = url.get('page')
  if (page) {
    return Number(page)
  } else {
    return 1
  }
}
