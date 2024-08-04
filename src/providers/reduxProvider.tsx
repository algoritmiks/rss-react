'use client'

import { Provider } from 'react-redux'
import { store } from '../store/store'
import { ThemeProvider } from './themeProvider'
import ErrorBoundary from '../components/errorBoundary/errorBoundary'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider>{children}</ThemeProvider>
      </Provider>
    </ErrorBoundary>
  )
}
