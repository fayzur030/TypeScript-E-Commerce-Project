import ProductList from '../Component/ProductList'
import CartPage from './CartPage'

const Home = () => {
  return (
    <div>
      <div className='bg-white rounded-lg shadow p-4 flex-1'>
        <ProductList />
      </div>
      <div className='bg-white rounded-lg shadow p-4 w-full md:w-1/3'>
        <CartPage />
      </div>
    </div>
  )
}

export default Home
