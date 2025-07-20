import { products } from '../Data/ProductData'
import ProductCart from './ProductCart'

const ProductList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {products.map((product) => (
        <ProductCart key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
