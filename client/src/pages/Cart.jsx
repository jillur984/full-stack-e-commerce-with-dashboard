import CartProduct from "@/components/CartProduct";
import Container from "@/components/Container";
import PriceContainer from "@/components/PriceContainer";
import PriceFormat from "@/components/PriceFormat";
import { resetCart } from "@/redux/cartSlice";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  const[subTotal,setSubTotal]=useState(null)
  const[total,setTotal]=useState(null)
  const [cartProduct, setCartProduct] = useState([]);

  const dispatch = useDispatch();


  useEffect(()=>{
    
    let subTotal=0;
    let totalDiscount=0;


    products.map((item)=>{
      const itemTotal=item?.price*item?.quantity
      const itemDiscount=(item?.price*item?.discountPercentage)/100*item?.quantity

      subTotal+=itemTotal;
      totalDiscount+=itemDiscount
    })

    setTotal(subTotal-totalDiscount)
    setSubTotal(subTotal)

  },[products])

  useEffect(() => {
    if (!products) return;

    setCartProduct(products || null);
  }, [products]);

  // console.log("Cart Product", products);

  // console.log(Array.isArray(cartProduct));

  const HandleResetCart = () => {
    const confirmed = window.confirm("Are you want to reset your Cart ?");
    if (confirmed) {
      dispatch(resetCart());
    }
  };




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

          <div className="bg-red-500 w-[10%] p-2 rounded-md">
            <button onClick={HandleResetCart}>Reset cart</button>
          </div>

          <div className="flex justify-end ">
            <div className="flex flex-col border justify-end">
              <h1 className="flex justify-end">CART TOTALS</h1>
              <div className="border-t">
                <div className="flex border-b items-center gap-8 justify-between">
                  <p>Subtotal</p>
                  <PriceFormat amount={subTotal} />
                </div>
                <div className="flex border-t border-b items-center gap-8 justify-between">
                  <p>Discount</p>
                  <PriceFormat amount={subTotal-total} />
                </div>
                <div className="flex font-bold items-center gap-8 justify-between">
                  <p>Total</p>
                  <PriceFormat amount={total}  />
                </div>
              </div>

               <button onClick={()=>toast.success("Payment will process shortly")} className="bg-green-500 flex justify-end p-2 px-5 mt-10 rounded-md">
              Process to checkout
            </button>
            </div>
           
          </div>
        </div>
      ) : (
        <div>Nothing Product</div>
      )}
    </Container>
  );
};

export default Cart;
