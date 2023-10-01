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
        deleteItem:(state, action)=>{
            const indexOfDeleteObject = state.value.findIndex((item)=>item.id === action.payload.id)

            if (indexOfDeleteObject >= 0){
                if(state.value[indexOfDeleteObject].quantity > 1){
                    state.value[indexOfDeleteObject].quantity --
                }else {
                    state.value.splice(indexOfDeleteObject,1)
                }

            }

        }

    },
})

// Action creators are generated for each case reducer function
export const { addToCart, deleteItem } = cartSlice.actions

export default cartSlice.reducer