import ProductList from '../Component/ProductList'
import Cart from '../Component/Cart'

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4 p-4'>
      <div className='bg-white rounded-lg shadow p-4 flex-1'>
        <ProductList />
      </div>
      <div className='bg-white rounded-lg shadow p-4 w-full md:w-1/3'>
        <Cart />
      </div>
    </div>
  )
}

export default Home
