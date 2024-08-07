import { Scripts } from '@remix-run/react'
import { LoaderFunction } from '@remix-run/node'
import { useContext, useEffect } from 'react'
import Providers from '../providers/providers'
import { ThemeContext } from '../providers/themeProvider'
import App from '../components/app/app'
import { fetchUsers } from '../api/api'
import '../styles/index.css'

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const search = url.searchParams.get('search') || ''
  const page = url.searchParams.get('page')
  const data = await fetchUsers(search, Number(page))
  return data
}

export default function Root() {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>react 2024Q3</title>
      </head>
      <body>
        <Providers>
          <App />
        </Providers>
        <Scripts />
      </body>
    </html>
  )
}
