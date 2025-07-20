const AboutPage = () => {
  return (
    <div className='max-w-4xl mx-auto p-10'>
      <h1 className='text-4xl font-bold mb-6'>About Our Project</h1>
      <p className='text-lg mb-4 leading-relaxed'>
        Welcome to our simple E-Commerce demo website! This project has been
        created as part of a learning exercise to understand how to build modern
        web applications using{' '}
        <strong>React, TypeScript, Zustand, and Tailwind CSS</strong>. The goal
        of this project is to demonstrate the fundamental concepts of{' '}
        <strong>
          component-based architecture, state management, and routing in React.
        </strong>
      </p>
      <h2 className='text-2xl font-semibold mt-6 mb-3'>
        What is This Project?
      </h2>
      <p className='text-lg mb-4 leading-relaxed'>
        This is a small and simple online shopping platform where users can:
        <ul className='list-disc list-inside ml-4'>
          <li>View a list of products</li>
          <li>Add products to the shopping cart</li>
          <li>See total prices dynamically</li>
          <li>Remove items from the cart</li>
        </ul>
        <br />
        However, this is only a practice project. No real transactions or real
        products are involved here.
      </p>
      <h2 className='text-2xl font-semibold mt-6 mb-3'>Technologies Used</h2>
      <p className='text-lg mb-4 leading-relaxed'>
        <strong>React:</strong> Building reusable components
        <br />
        <strong>TypeScript:</strong> Writing clean and strongly-typed code
        <br />
        <strong>Zustand:</strong> Managing the cart state globally
        <br />
        <strong>Tailwind CSS:</strong> Fast and clean styling
      </p>
      <h2 className='text-2xl font-semibold mt-6 mb-3'>
        Purpose of This Project
      </h2>
      <p className='text-lg mb-4 leading-relaxed'>
        This project is designed mainly for students, junior developers, and
        beginners who want to learn:
        <ul className='list-disc list-inside ml-4'>
          <li>React Project Structure</li>
          <li>State Management</li>
          <li>Routing Setup</li>
          <li>Clean Component Reuse</li>
        </ul>
      </p>
      <h2 className='text-2xl font-semibold mt-6 mb-3'>Developer Info</h2>
      <p className='text-lg leading-relaxed'>
        Developer: <strong>Md. Fayzur Rahman</strong>
        <br />
        This project is part of a learning journey into modern frontend web
        development using TypeScript and React.
      </p>
    </div>
  )
}

export default AboutPage
