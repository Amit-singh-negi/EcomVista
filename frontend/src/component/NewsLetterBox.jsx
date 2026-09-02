import React from 'react'

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className='text-center py-10 border-t border-gray-200'>
      <p className='text-xs tracking-widest uppercase text-gray-400 mb-2'>Stay in the loop</p>
      <h2 className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</h2>
      <p className='text-gray-500 mt-3 max-w-md mx-auto'>
        Be the first to know about new arrivals, exclusive deals, and special offers. Subscribe to our newsletter and save 20% on your next order.
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 pl-3 focus-within:border-gray-500 transition-colors'>
        <input className='w-full sm:flex-1 outline-none text-sm' type='email' placeholder="Enter your email" required />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4 hover:bg-gray-800 transition-colors'>
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsLetterBox