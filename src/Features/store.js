import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./Cart/cartSlice.js";

export const store = configureStore({
    reducer: {
        cart : cartReducer,
    },
})