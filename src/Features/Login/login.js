import {createSlice} from "@reduxjs/toolkit";


const FAKE_USER ={
    email : 'ali@gmail.com',
    password : '1234'
}

const initialState = {
    value: {
        user : null,
        authenticated : false
    },
}
export const loginSlice = createSlice({
    name :'login',
    initialState,
    reducers : {
        login : (state,action)=>{
            if(FAKE_USER.email === action.payload.email && FAKE_USER.password === action.payload.password ){
                state.value.user = action.payload.email
                state.value.authenticated = true
            }
        },
        logout : (state)=>{
            state.value.user = null
            state.value.authenticated = false
        }
    }
})