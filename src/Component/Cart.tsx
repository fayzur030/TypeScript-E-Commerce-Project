import React from 'react'
import { useCartStore } from '../ContextCart/CartStore'
import type { CartItem } from '../Interface/CartItem'
import { RiDeleteBin6Line } from 'react-icons/ri'
const Cart = () => {
  const cart = useCartStore((state) => state.cart)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const remove_On_By_On = useCartStore((state) => state.remove_On_By_On)
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white text-center w-full md:w-auto">
      <h2 className="text-2xl font-semibold mb-4">🛒 Cart </h2>
      <div>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item: CartItem) => (
              <div
                key={item.id}
                className='border p-2 rounded flex justify-between items-center'
              >
                <div className='justify-center items-center p-2 border-b'>
                  <h4 className="font-semibold text-gray-700">
                    {item.title} x {item.quantity}
                  </h4>
                  <p className='font-medium text-gray-600'>
                    Price: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <div className='flex gap-4 justify-center mt-2'>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded'
                    >
                      Remove All
                    </button>
                    <button
                      onClick={() => remove_On_By_On(item.id)}
                      className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded'
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className='mt-6 text-xl font-bold text-blue-700'>
              Total: ${total.toFixed(2)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
