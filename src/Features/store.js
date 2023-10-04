import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./Cart/cartSlice.js";
import loginReducer from './Login/login.js'

export const store = configureStore({
    reducer: {
        cart : cartReducer,
        login: loginReducer,
    },
})