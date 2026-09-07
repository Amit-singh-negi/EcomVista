import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProduct, setLatestProduct] = useState([])

  useEffect(() => {
    setLatestProduct(products.slice(0, 10))
  }, [products])

  return (
    <div className='my-16'>
      <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 pb-4 border-b border-gray-200'>
        <div>
          <p className='text-xs tracking-widest uppercase text-gray-400 mb-1'>Just landed</p>
          <h2 className='text-3xl font-medium'>
            <Title text1={'Latest'} text2={'Collection'} />
          </h2>
        </div>
        <p className='text-sm text-gray-500 max-w-xs sm:text-right'>
          New styles, dropped weekly. Here's what's fresh right now.
        </p>
      </div>

      {/* Rendering product */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mt-8'>
        {latestProduct.map((item) => (
          <ProductItem key={item._id} id={item._id} name={item.name} image={item.image} price={item.price} />
        ))}
      </div>
    </div>
  )
}

export default LatestCollection