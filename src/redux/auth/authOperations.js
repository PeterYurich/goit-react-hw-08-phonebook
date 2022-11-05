import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const signup = createAsyncThunk('auth/signup', async (credentials,
    { rejectWithValue }) => {
    console.log(credentials)
    try {
        const { data } = await axios.post('users/signup', credentials)
        setAuthHeader(data.token)
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const login = createAsyncThunk('auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('users/login', credentials)
            setAuthHeader(data.token)
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })

export const logout = createAsyncThunk('auth/logout', async (credentials,
    { rejectWithValue }) => {
    try {
        const { data } = await axios.post('users/logout', credentials)
        clearAuthHeader()
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})