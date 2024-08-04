import { Cards } from '../components/cards/cards'
import { CardDetailed } from '../components/cardDetailed/cardDetailed'
import { Cart } from '../components/cart/cart'
import { Search } from '../components/search/search'
import ThemeToggler from '../components/themeToggler/themeToggler'
import { fetchUsers } from '../api/api'

interface Props {
  searchParams: {
    page: number
    search: string
    detailed: string
  }
}

const App: React.FC<Props> = async ({ searchParams }) => {
  const { page = 1, search = '', detailed = '' } = searchParams
  const data = await fetchUsers(search, page)

  return (
    <div className="container">
      <Search />
      <Cards usersData={data} />
      {detailed && <CardDetailed />}
      <Cart />
      <ThemeToggler />
    </div>
  )
}

export default App
