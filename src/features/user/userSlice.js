import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { authService } from './userService'
import { toast } from 'react-toastify'


const initialState = {
    user: '',
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


export const registerUser = createAsyncThunk(
    'auth/register',
    async (userData, thunkAPI) => {
        try {
            return await authService.register(userData)
        } 
        catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)



export const loginUser = createAsyncThunk(
    'auth/login',
    async (userData, thunkAPI) => {
        try {
            console.log("sdfdf", userData)
            return await authService.login(userData)
        } 
        catch (error) {
            console.log("errrrrrr ", error)
            return thunkAPI.rejectWithValue(error)
        }
    }
)



export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.createdUser = action.payload
                if (state.isSuccess === true) {
                    toast.info('User Created Successfully')
                }
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.error
                if (state.isError === true) {
                    toast.error(action.error)
                }
            })


            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.user = action.payload
                console.log(action.payload)
                if (state.isSuccess === true) {
                    localStorage.setItem('token', action.payload.token)
                    toast.info('User Logged Successfully')
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.error
                if (state.isError === true) {
                    toast.error(action.error)
                }
            })


    }
})


console.log(authSlice);

export default authSlice.reducer