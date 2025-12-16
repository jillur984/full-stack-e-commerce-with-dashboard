import React from "react";
import { ImCross } from "react-icons/im";

const CartProduct = ({ item }) => {
  return (
    <div>
      <div className="w-full mb-4">
        <div className="flex col-end-2 p-4 gap-4 items-center">
          <ImCross />
                  <img src={item?.images[0]} alt="productImage" className="w-32 h-32 object-contain" />
        </div>


      </div>
    </div>
  );
};

export default CartProduct;
