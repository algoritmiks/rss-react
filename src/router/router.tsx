import { createBrowserRouter } from 'react-router-dom'
import App from '../App.tsx'
import { ErrorPage } from '../components/errorPage/errorPage.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  { path: 'test', element: <div>test</div> },
])
