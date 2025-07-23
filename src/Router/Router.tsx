import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import Home from '../Pages/Home'
import AboutPage from '../Pages/AboutPage'
import ContactPage from '../Pages/ContactPage'
import CartPage from '../Pages/CartPage'
import LoginPage from '../Pages/LoginPAge'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
])
