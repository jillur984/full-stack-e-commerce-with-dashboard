import CartProduct from "@/components/CartProduct";
import Container from "@/components/Container";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { products } = useSelector((state) => state.cart);

  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    if (!products) return;

    setCartProduct(products || null);
  }, [products]);

  // console.log("Cart Product", products);

  // console.log(Array.isArray(cartProduct));

  return (
    <Container>
      {cartProduct.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-5 bg-slate-100  p-2">
            <h2 className="col-span-2">Product</h2>
            <h2>Price</h2>
            <h2>quantity</h2>
            <h2>Sub Total</h2>
          </div>

          <div>
            {products?.map((item) => (
              <div key={item._id}>
                <CartProduct key={item?._id} item={item} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>Nothing Product</div>
      )}
    </Container>
  );
};

export default Cart;
