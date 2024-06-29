import { createSlice } from "@reduxjs/toolkit";

const initialState = []


export  const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
             state.push(action.payload) // action.payload containes the id
        },

        removeCart: (state, action) => {
          const itemId = action.payload;
          return state.filter(item => item.id !== itemId); // The reducer filters the state to remove the product with the matching id and returns the updated state.
            
            }
    }
})


export const {addCart, removeCart} = cartSlice.actions;
export default cartSlice.reducer;
