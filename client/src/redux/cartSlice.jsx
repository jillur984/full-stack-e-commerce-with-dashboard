import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[],
    userInfo:null,
}

export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
        
            state.products.push(action.payload)

        }
    }

})

export const {addToCart}=cartSlice.actions

export default cartSlice.reducer;