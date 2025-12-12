import AddToCart from '@/components/AddToCart'
import Badge from '@/components/Badge'
import PriceContainer from '@/components/PriceContainer'
import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({productData}) => {
  
  const productId=productData._id;
  return (
    <div className='w-full group pr-2.5 relative '>
      <Link to={`/product/${productId}`} className=' border border-gray-300 relative rounded-tl-md rounded-tr-md overflow-hidden'>
        <div className='w-full h-[270px] items-center flex p-3 bg-amber-100 '>
          <img src={productData?.images[0]} alt='productImage' className='w-full h-full hover:scale-110 duration-300 object-cover '/>
           <div className='absolute top-2 right-2'>
          {productData?.offer && <Badge text="Sale"/>}
        </div>
        </div>
       
        <div className='max-w-80 py-6 flex flex-col gap-1 border-t-0 border-gray-300 px-4 rounded-b-md '>
          <p className='text-lg text-black font-black'>{productData?.name}</p>
          <PriceContainer item={productData}/>
          <AddToCart item={productData}/>
        </div>
      </Link>
    </div>
  )
}

export default Product