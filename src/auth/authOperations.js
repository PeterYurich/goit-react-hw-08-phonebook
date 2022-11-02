import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('users/signup', credentials)
        return data
    } catch (error) {
        console.log(error.message)
    }
})

export const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('users/login', credentials)
        return data
    } catch (error) {
        console.log(error.message)
    }
})