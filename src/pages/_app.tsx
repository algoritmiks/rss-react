import type { AppProps } from 'next/app'
import { ThemeProvider } from '../providers/themeProvider'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import ErrorBoundary from '../components/errorBoundary/errorBoundary'
import '../styles/index.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </ErrorBoundary>
    </Provider>
  )
}
