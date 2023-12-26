import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {login, loginGoogle, register} from "../api/UserApi.js";

const initialState = {
    value: {},
    loading: false,
    token: null,
    loginError: null,
    logoutStatus: true,
    loginStatus: false,
    loginSuccess: false
};

export const loginUser = createAsyncThunk(
    "login",
    async (loginData, {rejectWithValue}) => {
        const response = await login(loginData);
        if (response.status !== 200) {
            console.log(response)
            return rejectWithValue(response.data.message);
        }
        console.log(response)
        return response.data;
    }
);

export const loginWithGoogle = createAsyncThunk(
    "loginGoogle",
    async (loginData, {rejectWithValue}) => {
        const response = await loginGoogle(loginData);
        if (response.status !== 200) {
            console.log(response)
            return rejectWithValue(response.data.message);
        }
        return response.data;
    }
)

export const registerUser = createAsyncThunk(
    "register",
    async (registerData, {rejectWithValue}) => {
        const response = await register(registerData);
        if (response.status !== 200) {
            console.log(response)
            return rejectWithValue(response.data.message);
        }
        console.log(response)
        return response.data;
    }
);

export const userSlice = createSlice(
    {
        name: "user",
        initialState,
        reducers: {
            setLoading: (state, action) => {
                state.loading = action.payload;
            },
            setLoginSuccess: (state, action) => {
                state.loginSuccess = action.payload;
            },
            setError: (state, action) => {
                state.error = action.payload
            }
        },
        extraReducers: (builder) => {
            builder
                .addCase(
                    loginUser.pending, (state) => {
                        state.loginStatus = false;
                        state.loading = true;
                        state.error = false;
                    }
                )
                .addCase(
                    loginUser.rejected, (state, action) => {
                        state.loginStatus = false;
                        state.loading = false;
                        state.error = action.payload;
                    }
                )
                .addCase(
                    loginUser.fulfilled, (state, action) => {
                        state.loginSuccess = true;
                        state.loading = false;
                        state.value = action.payload;
                        state.loginError = false;
                        localStorage.setItem("token", action.payload.data.accessToken);
                        // localStorage.setItem("user", JSON.stringify(action.payload.data.userResponseDTO));
                    })
        }

    }
)
export const {
    setValue,
    setLoading,


} = userSlice.actions;

export const selectLoginSuccess = (state) => state.login.loginSuccess;
export const selectToken = (state) => state.login.token;
export default userSlice.reducer;