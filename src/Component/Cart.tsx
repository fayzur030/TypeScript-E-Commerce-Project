import { useCartStore } from '../ContextCart/CartStore'
import type { CartItem } from '../Interface/CartItem'
import { FaMinus } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io'
import { FaDeleteLeft } from 'react-icons/fa6'
const Cart = () => {
  const cart = useCartStore((state) => state.cart)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const remove_On_By_On = useCartStore((state) => state.remove_On_By_On)
  const add_To_Cart = useCartStore((state) => state.addToCart)
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return (
    <div className='border p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 dark:text-white text-center w-full md:w-auto'>
      <h2 className='text-2xl font-semibold mb-4'>🛒 Cart </h2>
      <div>
        {cart.length === 0 ? (
          <p className=' dark:bg-gray-800 dark:text-white'>Cart is empty</p>
        ) : (
          <div className='p-6 max-w-lg mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-md'>
            {cart.map((item: CartItem) => (
              <div
                key={item.id}
                className='border p-2 rounded flex justify-between items-center  dark:bg-gray-800 dark:text-white'
              >
                <div className='justify-center items-center p-2 border-b  dark:bg-gray-800 dark:text-white'>
                  <h4 className='font-semibold  dark:bg-gray-800 dark:text-white'>
                    {item.title}
                  </h4>
                  <h4>Quantity: {item.quantity}</h4>
                  <p className='font-medium  dark:bg-gray-800 dark:text-white'>
                    Price: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <div className='flex gap-4 justify-center mt-2'>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded'
                    >
                      <FaDeleteLeft />
                    </button>
                    <button
                      onClick={() => remove_On_By_On(item.id)}
                      className='bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded'
                    >
                      <FaMinus />
                    </button>
                    <button
                      onClick={() => add_To_Cart(item)}
                      className='bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded'
                    >
                      <IoMdAdd />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className='mt-6 text-xl text-center font-bold text-blue-700'>
              Total: ${total.toFixed(2)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
