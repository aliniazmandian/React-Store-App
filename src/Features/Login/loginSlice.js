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
            // console.log(action.payload)
            if(FAKE_USER.email === action.payload.emailInput && +FAKE_USER.password === +action.payload.passwordInput ){
                state.value.user = action.payload.email
                // console.log('login')
                state.value.authenticated = true
            }else {
                // console.log(' incorrect name or password')
            }
        },
        logout : (state)=>{
            state.value.user = null
            state.value.authenticated = false
            // console.log('logout')
        },
    }
})


export const {login,logout} = loginSlice.actions

export default loginSlice.reducer
