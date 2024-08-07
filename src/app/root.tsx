import { Scripts } from '@remix-run/react'
import { useContext, useEffect } from 'react'
import Providers from '../providers/providers'
import { ThemeContext } from '../providers/themeProvider'
import App from '../components/app/app'
import '../components/app/app.css'

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
