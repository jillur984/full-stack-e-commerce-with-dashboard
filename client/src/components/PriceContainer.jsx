import React, { useEffect, useState } from "react";
import PriceFormat from "./PriceFormat";
import { useSelector } from "react-redux";

const PriceContainer = ({ item }) => {
  // console.log(item?.discountPercentage);

  const { products } = useSelector((state) => state.cart);
  const [cartProduct, setCartProduct] = useState(null);

  useEffect(() => {
    if (!item || !products?.length) return;

    const existingProduct = products.find(
      (product) => product && product._id === item._id
    );

    setCartProduct(existingProduct || null);
  }, [products, item]);

  // console.log("Products from Price container", cartProduct);
  const regularPrice = cartProduct
    ? cartProduct.quantity * item?.price
    : item?.price;

  const discountedPricePerItem =
    item?.price - item?.price * (item?.discountPercentage / 100);
  const mainAmountAfterDiscount = cartProduct
    ? discountedPricePerItem * cartProduct.quantity
    : discountedPricePerItem;

  return (
    <div className="flex gap-2 items-center">
      <PriceFormat className="line-through" amount={mainAmountAfterDiscount} />
      <PriceFormat amount={regularPrice} />
    </div>
  );
};

export default PriceContainer;
