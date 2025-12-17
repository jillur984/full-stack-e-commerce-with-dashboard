import React from "react";
import { ImCross } from "react-icons/im";
import PriceContainer from "./PriceContainer";
import AddToCart from "./AddToCart";
import PriceFormat from "./PriceFormat";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { deleteProduct } from "@/redux/cartSlice";

const CartProduct = ({ item }) => {

  const dispatch=useDispatch()

  const handleProductDelete=()=>{
    dispatch(deleteProduct(item._id))
    toast.success("Product Deleted Succesfully")
  }
  return (
    <div>
      <div className="grid grid-cols-5">
        <div className="flex col-span-2 p-4 gap-4 items-center">
          <ImCross onClick={handleProductDelete} />
                  <img src={item?.images[0]} alt="productImage" className="w-32 cursor-pointer h-32 object-contain" />
        </div>

        <div className="grid-cols-1 mt-20">
          <PriceContainer item={item}/>
        </div>
        
        <div className="mt-20">
          <AddToCart item={item}/>
        </div>

        <div className="mt-20">
          <p>
            <PriceFormat amount={item?.price*item?.quantity}/>
          </p>
        </div>
        

      </div>
    </div>
  );
};

export default CartProduct;
