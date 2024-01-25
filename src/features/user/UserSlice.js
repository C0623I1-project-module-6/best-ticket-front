import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getUser, login, loginGoogle, loginWithToken, logout, register} from "../../api/UserApi.js";

const initialState = {

    value: null,
    loading: false,
    loginError: null,
    loginSuccess: false,
    registerSuccess: false,
    registerError: null,
    logoutSuccess: false,
    logoutError: null,
    listRole: null,
    isLogin: false,
    isAdmin: false,
    userEdit: null,

};

export const loginUser = createAsyncThunk(
    "login",
    async (loginData, {rejectWithValue}) => {
        const response = await login(loginData);
        if (response.status !== 200) {
            return rejectWithValue(response.data.message);
        }
        console.log(response.data)
        return response.data;
    }
);
export const reLoginWithToken = createAsyncThunk(
    "loginWithToken",
    async (loginData, {rejectWithValue}) => {
        const response = await loginWithToken();
        if (response.status !== 200) {
            return rejectWithValue(response.data.message);
        }
        return response.data;
    }
);


export const logoutUser = createAsyncThunk(
    "logout",
    async (logoutData, {rejectWithValue}) => {
        const response = await logout(logoutData);
        if (response.status !== 200) {
            return rejectWithValue(response.data.message);
        }
        return response.data
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
        console.log(response.data)
        return response.data;
    }
);

export const fetchGetUser = createAsyncThunk(
    "profile",
    async (userId, {rejectWithValue}) => {
        const response = await getUser(userId);
        if (response.status !== 200) {
            console.log(response)
            return rejectWithValue(response.data.message);
        }
        return response.data;
    }
);

export const registerUser = createAsyncThunk(
    "register",
    async (registerData, {rejectWithValue}) => {
        const response = await register(registerData);
        if (response.status !== 201) {
            console.log(response)
            return rejectWithValue(response.data.message);
        }
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
            setLoginError: (state, action) => {
                state.loginError = action.payload;
            },
            setLoginSuccess: (state, action) => {
                state.loginSuccess = action.payload;
            },
            setRegisterSuccess: (state, action) => {
                state.registerSuccess = action.payload;
            },
            setRegisterError: (state, action) => {
                state.registerError = action.payload;
            },
            setLogoutSuccess: (state, action) => {
                state.logoutSuccess = action.payload;
            },
            setLogoutError: (state, action) => {
                state.logoutError = action.payload;
            },
            setValue: (state, action) => {
                state.value = action.payload;
            },
            setUserEdit: (state, action) => {
                state.userEdit = action.payload;
            }
        },
        extraReducers: (builder) => {
            builder
                .addCase(registerUser.pending, (state) => {
                    state.registerSuccess = false;
                    state.loading = true;
                    state.registerError = false;
                })
                .addCase(registerUser.rejected, (state, action) => {
                    state.registerSuccess = false;
                    state.loading = false;
                    state.registerError = action.payload;
                })
                .addCase(registerUser.fulfilled, (state, action) => {
                    state.registerSuccess = true;
                    state.loading = false;
                    state.value = action.payload.data;
                    state.registerError = false;
                })
                .addCase(loginUser.pending, (state) => {
                    state.loginSuccess = false;
                    state.loading = true;
                    state.loginError = false;
                })
                .addCase(loginUser.rejected, (state, action) => {
                    state.loginSuccess = false;
                    state.loading = false;
                    state.loginError = true;
                })
                .addCase(loginUser.fulfilled, (state, action) => {
                    state.loginSuccess = true;
                    state.loading = false;
                    state.value = action.payload.data;
                    state.listRole = action.payload.data.listRole;
                    localStorage.setItem("token", action.payload.data.token);
                    state.logoutSuccess = false;
                    state.loginError = false;
                    state.isLogin = true;
                })
                .addCase(reLoginWithToken.pending, (state) => {
                    state.loginSuccess = false;
                    state.loading = true;
                    state.loginError = false;
                })
                .addCase(reLoginWithToken.rejected, (state, action) => {
                    state.loginSuccess = false;
                    state.loading = false;
                    state.loginError = action.payload;
                })
                .addCase(reLoginWithToken.fulfilled, (state, action) => {
                    state.loginSuccess = true;
                    state.loading = false;
                    state.value = action.payload.data;
                    state.listRole = action.payload.data.listRole;
                    localStorage.setItem("token", action.payload.data.token);
                    state.logoutSuccess = false;
                    state.loginError = false;
                    state.isLogin = true;
                })
                .addCase(loginWithGoogle.pending, (state) => {
                    state.loginSuccess = false;
                    state.loading = true;
                    state.loginError = false;
                })
                .addCase(loginWithGoogle.rejected, (state, action) => {
                    state.loginSuccess = false;
                    state.loading = false;
                    state.loginError = action.payload;
                })
                .addCase(loginWithGoogle.fulfilled, (state, action) => {
                    state.loginSuccess = true;
                    state.loading = false;
                    state.logoutSuccess = false;
                    state.value = action.payload.data;
                    state.loginError = false;
                })
                .addCase(logoutUser.pending, (state) => {
                    state.logoutSuccess = false;
                    state.loading = true;
                    state.logoutError = false;
                })
                .addCase(logoutUser.rejected, (state, action) => {
                    state.logoutSuccess = false;
                    state.loading = false;
                    state.logoutError = action.payload;
                })
                .addCase(logoutUser.fulfilled, (state, action) => {
                    state.logoutSuccess = true;
                    state.loginSuccess = false;
                    state.isLogin = false;
                    state.user = null;
                    state.listRole = null;
                    state.loading = false;
                    state.value = action.payload.data;
                    state.logoutError = false;
                    localStorage.removeItem("token");
                })
                .addCase(fetchGetUser.fulfilled, (state, action) => {
                    state.userEdit = action.payload.data;
                })
        }
    }
)
export const {

    setLoading,
    setLoginError,
    setLoginSuccess,
    setRegisterSuccess,
    setRegisterError,
    setLogoutSuccess,
    setLogoutError,
    setValue,
    setUserEdit,
} = userSlice.actions;

export const selectLoginSuccess = (state) => state.user.loginSuccess;
export const selectLoginError = (state) => state.user.loginError;
export const selectUserLogin = (state) => state.user.value;
export const selectUserEdit = (state) => state.user.userEdit;
export const selectRegisterSuccess = (state) => state.user.registerSuccess;
export const selectRegisterError = (state) => state.user.registerError;
export const selectUserRegister = (state) => state.user.value;
export const selectLogoutSuccess = (state) => state.user.logoutSuccess;
export const selectUserLogout = (state) => state.user.value;
export const selectUserRole = (state) => state.user.listRole;
export const selectIsAdmin = (state) => state.user.isAdmin;
export const selectIsLogin = (state) => state.user.isLogin;
export default userSlice.reducer;
