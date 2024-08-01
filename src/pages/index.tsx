import { useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GetServerSideProps } from 'next'
import { Search } from '../components/search/search'
import { Cards } from '../components/cards/cards'
import { Cart } from '../components/cart/cart'
import { CardDetailed } from '../components/cardDetailed/cardDetailed'
import { ThemeContext } from '../providers/themeProvider'
import ThemeToggler from '../components/themeToggler/themeToggler'
import { setPage } from '../store/reducers/pagination'
import { fetchUsers } from '../api/api'
import { IUsersData } from '../ts/types'

const App: React.FC<{
  page: number
  detailed: string
  data: IUsersData
}> = ({ page, detailed, data }) => {
  const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPage({ page: Number(page) }))
  }, [])

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <div className="container">
      <ThemeToggler />
      <Search />
      <Cards usersData={data} />
      {detailed && <CardDetailed />}
      <Cart />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { page = 1, detailed = '', search = '' } = ctx.query

  const data = await fetchUsers(search as string, page as number)
  // console.log(data)
  console.log('server render')

  return {
    props: {
      page,
      detailed,
      data,
    },
  }
}

export default App
