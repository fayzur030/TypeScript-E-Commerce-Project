const Search = () => {
  return (
    <div className='w-full md:w-80 mx-auto'>
      <input
        type='text'
        placeholder='Search here...'
        className='w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
    </div>
  )
}

export default Search
