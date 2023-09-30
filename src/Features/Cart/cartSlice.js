import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state,action) => {

            const updatedCartIndex = state.value.findIndex((item)=>item.id === action.payload.id)

            if (updatedCartIndex < 0){

                state.value.push({...action.payload,quantity: 1})
            }else {
                state.value[updatedCartIndex].quantity++
            }


        },

    },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer