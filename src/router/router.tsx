import { createBrowserRouter } from 'react-router-dom'
import App from '../app.tsx'
import { ErrorPage } from '../components/errorPage/errorPage.tsx'
import { Controlled } from '../components/forms/controlled.tsx'
import { Uncontrolled } from '../components/forms/uncontrolled.tsx'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'controlled',
    element: <Controlled />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'uncontrolled',
    element: <Uncontrolled />,
    errorElement: <ErrorPage />,
  },
])
