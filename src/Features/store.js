import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./Cart/cartSlice.js";
import loginReducer from './Login/loginSlice.js'


export const store = configureStore({
    reducer: {
        cart : cartReducer,
        login: loginReducer,
    },
})