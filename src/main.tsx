import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.tsx'
import { Provider } from 'react-redux'
import { ThemeProvider } from './providers/themeProvider.tsx'
import { store } from './store/store.ts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>,
)
