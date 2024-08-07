import { LoaderFunction } from '@remix-run/node'
import { CardDetailed } from '../../components/cardDetailed/cardDetailed'
import { fetchUser } from '../../api/api'

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const userId = url.pathname.match(/\/user\/(\d+)/)
  const data = await fetchUser(userId ? userId[1] : '')
  return data
}

export default function User() {
  return <CardDetailed />
}
