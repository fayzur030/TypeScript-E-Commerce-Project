import React from 'react'
import Navbar from '../Pages/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer'

const MainLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <div className='min-w-full max-h-svh'></div>
      <Footer />
    </>
  )
}

export default MainLayout
