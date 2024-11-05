import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: null,
}

export const authlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            // login user
        },
        logout: (state) => {
            // logout user
        },
        registerUser: (state, action) => {
            // register user
        }
    },
})

export const {login, logout, registerUser} = authlice.actions

export default authlice.reducer