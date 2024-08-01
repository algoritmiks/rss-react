import { useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GetServerSideProps } from 'next'
import { Search } from '../components/search/search'
import { Cards } from '../components/cards/cards'
import { Cart } from '../components/cart/cart'
import { ThemeContext } from '../providers/themeProvider'
import ThemeToggler from '../components/themeToggler/themeToggler'
import { setPage } from '../store/reducers/pagination'

const App: React.FC<{ page: number }> = ({ page }) => {
  const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPage({ page }))
  }, [])

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <div className="container">
      <ThemeToggler />
      <Search />
      <Cards />
      <Cart />
    </div>
  )
}

export default App

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page = 1 } = context.query

  return {
    props: {
      page,
    },
  }
}
