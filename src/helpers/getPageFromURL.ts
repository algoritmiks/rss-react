export const getPageFromUrl = (): number => {
  const url = new URLSearchParams(window.location.search)
  const page = url.get('page')
  return page ? Number(page) : 1
}
