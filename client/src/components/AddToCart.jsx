import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, descreaseCart, increaseCart } from "@/redux/cartSlice";
import { FaMinus, FaPlus } from "react-icons/fa";

const AddToCart = ({ item, className }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(item));
    toast.success(`${item?.name} Added Succesfully`);
  };

  const {products}=useSelector((state)=>state.cart)

  // console.log("Products of Jillu",products)

  const [cartProduct,setCartProduct]=useState(null)
  

  useEffect(()=>{
   const existingProduct=products.find((product)=>product._id===item._id)
   console.log("Hello Existing Product",existingProduct)
   
    setCartProduct(existingProduct)
   
  },[products,item])


  const increaseQuantity=(id)=>{
     dispatch(increaseCart(id))
  }
  const descreaseQuantity=(id)=>{
    dispatch(descreaseCart(id))
    toast.success(`${item?.name} Descresed Succesfully`);
  }

  return (
   <>
    {cartProduct ? (
      <div className="flex items-center gap-6">
        <button disabled={cartProduct?.quantity===1} onClick={()=>descreaseQuantity(item._id)} className="border border-gray-300 text-gray-700 p-2 hover:border-black hover:text-black rounded-md text-sm transition-all duration-200 cursor-pointer disabled:text-gray-300 disabled:border-gray-200 disabled:hover:border-gray-200 disabled:hover:text-gray-300 disabled:cursor-not-allowed disabled:bg-red-600">
        <FaMinus/>
        </button>
        <p>{cartProduct?.quantity}</p>
        <button onClick={()=>increaseQuantity(item._id)} className="border border-gray-300 text-gray-700 p-2 hover:border-black hover:text-black rounded-md text-sm transition-all duration-200 cursor-pointer disabled:text-gray-300 disabled:border-gray-200 disabled:hover:border-gray-200 disabled:hover:text-gray-300">
          <FaPlus/>
        </button>
      </div>
      
    ):(
       <button
      onClick={handleAddToCart}
      className="bg-black text-white text-center p-2 w-full rounded-md hover:bg-blue-500">
      Add To Cart
    </button>
    )
   }
   </>
  );
};

export default AddToCart;
