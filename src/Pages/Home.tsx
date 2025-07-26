import ProductList from '../Component/ProductList'
const Home = () => {
  return (
    <div>
      <div className='bg-white dark:bg-gray-900 rounded-lg shadow p-4 flex-1 text-black dark:text-white'>
        <ProductList />
      </div>
    </div>
  )
}

export default Home
