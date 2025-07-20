import type { Product } from '../Data/ProductData'
import { useCartStore } from '../ContextCart/CartStore'

const ProductCart = ({ product }: { product: Product }) => {
  const { title, description, price, image } = product
  const addToCart = useCartStore((state) => state.addToCart)
  return (
    <div className='border p-4 rounded-xl shadow-md bg-white hover:shadow-lg transition duration-300 flex flex-col h-full'>
      <img
        src={image}
        alt={title}
        className='h-48 w-full object-contain rounded-lg bg-gray-50 p-3'
      />
      <h2 className='text-lg md:text-xl font-semibold text-gray-800 mt-3'>
        {title}
      </h2>
      <p className='text-sm text-gray-600 mt-2 line-clamp-3 flex-grow'>
        {description}
      </p>
      <div className='mt-4 flex items-center justify-between'>
        <span className='text-lg font-bold text-blue-600'>${price}</span>
        <button
          onClick={() => addToCart(product)}
          className='bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform'
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCart
