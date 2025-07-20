import ProductList from '../Component/ProductList'

const ProductPage = () => {
  return (
    <div className='max-w-7xl mx-auto p-8'>
      <h1 className='text-4xl font-bold mb-6'>Our Products</h1>
      <p className='mb-6 text-gray-700'>
        Here you can browse all our available products. Click on any product to
        know more.
      </p>
      <ProductList />
    </div>
  )
}

export default ProductPage
