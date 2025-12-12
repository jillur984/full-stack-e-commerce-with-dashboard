import React from 'react'
import toast from 'react-hot-toast'


const AddToCart = ({item,className}) => {
  const handleAddToCart=()=>{
    toast.success(`${item?.name} is Clicked`)
  }

  return (
    <button onClick={handleAddToCart} className='bg-black text-white text-center p-2 w-full rounded-md hover:bg-blue-500'>Add To Cart</button>
  )
}

export default AddToCart