import React from 'react'
import Title from '../component/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../component/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='pb-4 border-b border-gray-200 pt-8'>
        <p className='text-xs tracking-widest uppercase text-gray-400 mb-1 text-center'>Our story</p>
        <h2 className='text-3xl font-medium text-center'>
          <Title text1={'About'} text2={'Us'} />
        </h2>
      </div>

      <div className='my-12 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] object-cover' src={assets.about_img} alt="About EcomVista" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            EcomVista was born out of a passion for making quality fashion accessible to everyone. Since our inception, we've been committed to bringing you the latest styles without compromising on comfort or affordability.
          </p>
          <p>
            We carefully curate every collection, partnering with trusted manufacturers to ensure every piece meets our standards for quality, durability, and design. From everyday essentials to standout pieces, we're here to help you express your style with confidence.
          </p>
          <p className='text-xs tracking-widest uppercase text-gray-400 mt-2'>Our mission</p>
          <p>
            Our mission is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that keeps you coming back, season after season.
          </p>
        </div>
      </div>

      <div className='pb-4 border-b border-gray-200'>
        <p className='text-xs tracking-widest uppercase text-gray-400 mb-1'>What sets us apart</p>
        <h2 className='text-2xl font-medium'>
          <Title text1={'Why'} text2={'Choose Us'} />
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 text-sm mb-20 mt-8 gap-6'>
        <div className='border border-gray-200 rounded-lg px-8 py-10 flex flex-col gap-3'>
          <p className='font-medium text-gray-800'>Quality assurance</p>
          <p className='text-gray-500'>
            We meticulously select and vet each product to ensure it meets our stringent quality standards.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg px-8 py-10 flex flex-col gap-3'>
          <p className='font-medium text-gray-800'>Convenience</p>
          <p className='text-gray-500'>
            With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg px-8 py-10 flex flex-col gap-3'>
          <p className='font-medium text-gray-800'>Exceptional support</p>
          <p className='text-gray-500'>
            Our team of dedicated professionals is here to assist you, ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default About