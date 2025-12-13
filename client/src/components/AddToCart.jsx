import React from 'react'
import toast from 'react-hot-toast'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '@/redux/cartSlice'






const AddToCart = ({item,className}) => {

  

  const dispatch=useDispatch()
  const handleAddToCart=()=>{
    dispatch(addToCart(item))
    toast.success(`${item?.name} Added Succesfully`)
  }

  return (
    <button onClick={handleAddToCart} className='bg-black text-white text-center p-2 w-full rounded-md hover:bg-blue-500'>Add To Cart</button>
  )
}

export default AddToCart