import { configureStore } from "@reduxjs/toolkit";
import cartslicereducer from './cartSlice';

const store = configureStore({
    reducer: {
        cart: cartslicereducer
    },
})

export default store