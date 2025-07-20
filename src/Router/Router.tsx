import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import Home from '../Pages/Home'
import AboutPage from '../Pages/AboutPage'
import ContactPage from '../Pages/ContactPage'
import ProductPage from '../Pages/ProductPage'

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
        path: 'product',
        element: <ProductPage />,
      },
    ],
  },
])
