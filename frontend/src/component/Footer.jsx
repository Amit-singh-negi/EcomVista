import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw] '>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] items-start gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} className='w-38 h-auto ' alt='EcomVista logo' />
          <p className='w-full md:w-2/3 text-gray-500 leading-relaxed'>
            EcomVista brings you a wide range of quality fashion at honest prices. From everyday essentials to the latest trends, we're committed to making your shopping experience simple, fast, and enjoyable.
          </p>
        </div>

        <div>
          <p className='text-xs tracking-widest uppercase text-gray-400 mb-4'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='hover:text-gray-900 cursor-pointer transition-colors'>Home</li>
            <li className='hover:text-gray-900 cursor-pointer transition-colors'>About us</li>
            <li className='hover:text-gray-900 cursor-pointer transition-colors'>Delivery</li>
            <li className='hover:text-gray-900 cursor-pointer transition-colors'>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xs tracking-widest uppercase text-gray-400 mb-4'>Get in touch</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 9898764500</li>
            <li>amitn7906@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className='border-t border-gray-200'>
        <p className='py-5 text-xs text-gray-400 text-center'>Copyright 2026 — EcomVista.com. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer