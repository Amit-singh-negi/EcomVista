import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext)
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller)
    setBestSeller(bestProduct.slice(0, 5))
  }, [products])

  return (
    <div className='my-16'>
      <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 pb-4 border-b border-gray-200'>
        <div>
          <p className='text-xs tracking-widest uppercase text-gray-400 mb-1'>Top 5 this season</p>
          <h2 className='text-3xl font-medium'>
            <Title text1={'Best'} text2={'Sellers'} />
          </h2>
        </div>
        <p className='text-sm text-gray-500 max-w-xs sm:text-right'>
          Ranked by what customers actually buy, not what we wish they would.
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-8 mt-8'>
        {bestSeller.map((item, index) => (
          <div key={item._id} className='relative'>
            <span className='absolute top-2 left-2 z-10 w-6 h-6 rounded-full bg-white border border-gray-300 text-xs font-medium flex items-center justify-center'>
              {String(index + 1).padStart(2, '0')}
            </span>
            <ProductItem id={item._id} name={item.name} image={item.image} price={item.price} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BestSeller