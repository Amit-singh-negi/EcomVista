import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter((item) => subCategory === item.subCategory)
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products])

  return (
    <div className='my-24'>
      <div className='pb-4 border-b border-gray-200'>
        <p className='text-xs tracking-widest uppercase text-gray-400 mb-1'>You might also like</p>
        <h2 className='text-3xl font-medium'>
          <Title text1={'Related'} text2={'Products'} />
        </h2>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mt-8'>
        {related.map((item) => (
          <ProductItem key={item._id} id={item._id} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts