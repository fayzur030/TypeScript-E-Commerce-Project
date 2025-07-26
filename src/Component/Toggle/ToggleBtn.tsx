import { useTheme } from '../../Toggle_Context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'
const ToggleBtn = () => {
  const { toggleTheme, isDarkMode } = useTheme()
  return (
    <div>
      <button
        onClick={toggleTheme}
        className='text-xl p-2 rounded-full hover:bg-gray-900 dark:hover:bg-gray-700 transition'
        aria-label='Toggle Theme'
      >
        {isDarkMode ? (
          <FaSun className='text-yellow-400' />
        ) : (
          <FaMoon className='text-white' />
        )}
      </button>
    </div>
  )
}

export default ToggleBtn
