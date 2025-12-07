import React from 'react'
import PriceFormat from './PriceFormat'

const PriceContainer = ({item}) => {
    console.log(item?.discountPercentage)
  return (
    <div className='flex gap-2 items-center'>
   
          <PriceFormat amount={item?.price + (item?.discountPercentage * item?.price)/100}/>
          <PriceFormat className="line-through" amount={item?.price}/>
     
    </div>
  )
}

export default PriceContainer