const ContactPage = () => {
  return (
    <div className='max-w-3xl mx-auto p-10'>
      <h1 className='text-4xl font-bold mb-6'>Contact Us</h1>

      <p className='text-lg mb-6'>
        If you have any questions, feedback, or suggestions regarding this
        project, feel free to contact us.
      </p>

      <form className='space-y-4'>
        <div>
          <label htmlFor='name' className='block font-medium mb-1'>
            Your Name
          </label>
          <input
            type='text'
            id='name'
            placeholder='Enter your name'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div>
          <label htmlFor='email' className='block font-medium mb-1'>
            Your Email
          </label>
          <input
            type='email'
            id='email'
            placeholder='Enter your email'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div>
          <label htmlFor='message' className='block font-medium mb-1'>
            Your Message
          </label>
          <textarea
            id='message'
            rows={4}
            placeholder='Write your message here...'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          ></textarea>
        </div>
        <button
          type='submit'
          className='px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500'
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactPage
