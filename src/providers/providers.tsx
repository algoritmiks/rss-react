import { Provider } from 'react-redux'
import { store } from '../store/store'
import { ThemeProvider } from './themeProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  )
}
