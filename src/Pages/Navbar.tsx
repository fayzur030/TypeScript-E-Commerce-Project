import React, { useState } from 'react'
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'
import Search from './Search'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { FaCircleUser } from 'react-icons/fa6'
import ToggleBtn from '../Component/Toggle/ToggleBtn'

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className='bg-gray-900 text-white px-6 py-4'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        {/* Left: Logo */}
        <div className='flex items-center gap-3 text-2xl font-bold'>
          <Link to='/' className='flex items-center gap-3 text-2xl font-bold'>
            <FiShoppingCart size={24} />
            <span>E-BazarBD</span>
          </Link>
        </div>

        {/* Center: Search - Hidden on small */}
        <div className='flex-1 px-8 hidden md:block'>
          <Search />
        </div>

        {/* Hamburger Menu for mobile */}
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className='focus:outline-none'
            aria-label='Toggle menu'
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Right: Menu - desktop & mobile */}
        <ul
          className={`
    flex flex-col md:flex-row md:space-x-6
    absolute md:static
    bg-gray-900 md:bg-transparent
    top-16 left-0 w-full md:w-auto
    transition-all duration-300 
    overflow-hidden
    md:overflow-visible
    ${menuOpen ? 'max-h-96 py-4' : 'max-h-0'}
    z-50
  `}
        >
          <li className='cursor-pointer hover:text-gray-400 px-4 py-2 md:p-0'>
            <Link to='/' onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className='cursor-pointer hover:text-gray-400 px-4 py-2 md:p-0'>
            <Link to='/about' onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li className='cursor-pointer hover:text-gray-400 px-4 py-2 md:p-0'>
            <Link to='/contact' onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li className='cursor-pointer hover:text-gray-400 px-4 py-2 md:p-0'>
            <Link to='/login' onClick={() => setMenuOpen(false)}>
              <FaCircleUser className='text-2xl transition-colors duration-300 hover:text-blue-400' />
            </Link>
          </li>
          <li>
            <button
              className='btn'
              onClick={() => {
                const modal = document.getElementById(
                  'cart_id'
                ) as HTMLDialogElement | null
                if (modal) modal.showModal()
              }}
            >
              <FaShoppingCart className='text-2xl transition-colors duration-300 hover:text-blue-400' />
            </button>
          </li>
          <ToggleBtn />
        </ul>
      </div>

      {/* Mobile Search below menu (optional) */}
      <div className='md:hidden mt-4 px-6'>
        <Search />
      </div>
    </nav>
  )
}

export default Navbar
