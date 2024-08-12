import { fetchUser } from '../../api/api'
import { CardDetailed } from './cardDetailed'

interface Props {
  searchParams: {
    page: number
    search: string
    detailed: string
  }
}

export const CardDetailedContainer: React.FC<Props> = async ({
  searchParams,
}) => {
  const { detailed } = searchParams
  const data = await fetchUser(detailed)

  return <CardDetailed user={data} />
}
