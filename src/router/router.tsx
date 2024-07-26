import { createBrowserRouter } from 'react-router-dom'
import App from '../App.tsx'
import { ErrorPage } from '../components/errorPage/errorPage.tsx'
import { CardDetailed } from '../components/cardDetailed/cardDetailed.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'user/:userId',
        element: <CardDetailed />,
      },
    ],
  },
])
