import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export const register = createAsyncThunk('users/signup', async credentials => {
    try {
        const { data } = await axios.post()
        return data
    } catch (error) {
        console.log(error.message)
    }
}) 