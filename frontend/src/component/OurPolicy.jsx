import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='py-16 border-t border-gray-200'>
      <div className='text-center mb-12'>
        <p className='text-xs tracking-widest uppercase text-gray-400'>Why shop with us</p>
      </div>
      <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
          <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="Exchange" />
          <p className='font-medium text-gray-800'>Easy exchange policy</p>
          <p className='text-gray-400 mt-1'>We offer hassle-free exchanges</p>
        </div>
        <div>
          <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="Returns" />
          <p className='font-medium text-gray-800'>7-day return policy</p>
          <p className='text-gray-400 mt-1'>Free returns within 7 days</p>
        </div>
        <div>
          <img src={assets.support_img} className='w-12 m-auto mb-5' alt="Support" />
          <p className='font-medium text-gray-800'>Best customer support</p>
          <p className='text-gray-400 mt-1'>We're here 24/7, every day</p>
        </div>
      </div>
    </div>
  )
}

export default OurPolicy