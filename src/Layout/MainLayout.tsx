import React from 'react'
import Navbar from '../Pages/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer'

const MainLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <div className='min-h-screen flex flex-col'></div>
      <Footer />
    </>
  )
}

export default MainLayout
