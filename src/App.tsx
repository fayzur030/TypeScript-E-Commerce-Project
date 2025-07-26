import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Router/Router'
import { useTheme } from './Toggle_Context/ThemeContext'
import Cart from './Component/Cart'

function App() {
  const { theme } = useTheme()
  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div
        className={`modal-box transition-colors duration-300 ${
          theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'
        }`}
      >
        <dialog id='cart_id' className='modal'>
          <div className='modal-box'>
            <form method='dialog'>
              <button className=' bg-white btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
                ✕
              </button>
            </form>
            <Cart />
          </div>
        </dialog>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
