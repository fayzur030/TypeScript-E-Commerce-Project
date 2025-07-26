import type { Product } from '../Data/ProductData'
import { useCartStore } from '../ContextCart/CartStore'

const ProductCart = ({ product }: { product: Product }) => {
  const { title, description, price, image } = product
  const addToCart = useCartStore((state) => state.addToCart)
  const Buy_Now = useCartStore((state) => state.Buy_Now)
  return (
    <div className='border p-4 rounded-xl dark:bg-gray-900 shadow-md bg-white hover:shadow-lg transition duration-300 flex flex-col h-full'>
      <img
        src={image}
        alt={title}
        className='h-48 w-full object-contain  dark:bg-gray-900 shadow-md bg-white rounded-lgp-3'
      />
      <h2 className='text-lg md:text-xl font-semibold bg-white dark:bg-gray-900 mt-3'>
        {title}
      </h2>
      <p className='text-sm  bg-white dark:bg-gray-900 mt-2 line-clamp-3 flex-grow'>
        {description}
      </p>
      <div className='mt-4 flex items-center justify-between'>
        <span className='text-lg text-left font-bold text-blue-600'>
          ${price}
        </span>
        <div className='flex gap-3'>
          <button
            onClick={() => Buy_Now(product.id)}
            className='bg-gradient-to-r from-yellow-400 to-yellow-300 text-black px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform'
          >
            Buy Now
          </button>
          <button
            onClick={() => addToCart(product)}
            className='bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform'
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCart
