import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  userInfo: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push({ ...action.payload, quantity: 1 });
    },
    increaseCart: (state, action) => {
      const productId = action.payload;

      const existingProduct = state.products.find((item) => item._id === productId);
      if (existingProduct) {
        existingProduct.quantity++;
      }
    },
    descreaseCart: (state, action) => {
      const productId = action.payload;

      const existingProduct = state.products.find((item) => item._id === productId);
      if (existingProduct) {
        existingProduct.quantity--;
      }
    },
    descreaseCart: (state, action) => {
      const productId = action.payload;

      const existingProduct = state.products.find((item) => item._id === productId);
      if (existingProduct) {
        existingProduct.quantity--;
      }
    },
    deleteProduct:(state,action)=>{
        state.products.filter((item)=>item._id!===action.payload)
    },
    resetCart:(state)=>{
        state.products=[]
    }
    
  },
});

export const { addToCart, increaseCart,descreaseCart } = cartSlice.actions;

export default cartSlice.reducer;
