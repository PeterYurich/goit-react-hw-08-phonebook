import { createSlice } from "@reduxjs/toolkit";
import { signup, login, logout } from './authOperations'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: {
        [signup.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [login.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [logout.pending]() {
            console.log('logout pending')
        },
        [logout.fulfilled](state) {
            console.log('loged out')
            state.user = null;
            state.token = '';
            state.isLoggedIn = false;
        },
        [logout.rejected](state) {
            console.log('logout error')
        },
    }
})

export const authReducer = authSlice.reducer