import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    forgotPassword,
    getUser,
    login,
    loginGoogle,
    loginWithToken,
    logout,
    register,
    sendOtp
} from "../../api/UserApi.js";

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
    sendOtpSuccess: false,
    sendOtpError: null,
    forgotPasswordSuccess: false,
    forgotPasswordError: null,
};

export const loginUser = createAsyncThunk(
    "login",
    async (loginData, {rejectWithValue}) => {
        const response = await login(loginData);
        if (response.status !== 200) {
            return rejectWithValue(response.data.message);
        }
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
            return rejectWithValue(response.data.message);
        }
        return response.data;
    }
);

export const fetchGetUser = createAsyncThunk(
    "profile",
    async (userId, {rejectWithValue}) => {
        const response = await getUser(userId);
        if (response.status !== 200) {
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
        console.log(response)
        return response.data;
    }
);
export const sendOtpWithEmail = createAsyncThunk(
    "send-otp",
    async (otpData, {rejectWithValue}) => {
        const response = await sendOtp(otpData);
        if (response.status !== 200) {
            console.log(response)
            return rejectWithValue(response.data.message);
        }
        console.log(response)
        return response.data;
    }
);
export const forgotPasswordUser = createAsyncThunk(
    "forgot-password",
    async (data, {rejectWithValue}) => {
        const response = await forgotPassword(data);
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
            },
            setSendOtpSuccess: (state, action) => {
                state.sendOtpSuccess = action.payload;
            },
            setSendOtpError: (state, action) => {
                state.sendOtpError = action.payload;
            },
            setForgotPasswordSuccess: (state, action) => {
                state.forgotPasswordSuccess = action.payload;
            },
            setForgotPasswordError: (state, action) => {
                state.forgotPasswordError = action.payload;
            },

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
                    state.listRole = action.payload.data.listRole;
                    localStorage.setItem("token", action.payload.data.token);
                    state.logoutSuccess = false;
                    state.loginError = false;
                    state.isLogin = true;
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

                .addCase(sendOtpWithEmail.pending, (state) => {
                    state.sendOtpSuccess = false;
                    state.loading = true;
                    state.sendOtpError = false;
                })
                .addCase(sendOtpWithEmail.rejected, (state, action) => {
                    state.sendOtpSuccess = false;
                    state.loading = false;
                    state.sendOtpError = true;
                })
                .addCase(sendOtpWithEmail.fulfilled, (state, action) => {
                    state.sendOtpSuccess = true;
                    state.loading = false;
                    state.value = action.payload.data;
                    state.sendOtpError = false;
                })

                .addCase(forgotPasswordUser.pending, (state) => {
                    state.forgotPasswordSuccess = false;
                    state.loading = true;
                    state.forgotPasswordError = false;
                })
                .addCase(forgotPasswordUser.rejected, (state, action) => {
                    state.forgotPasswordSuccess = false;
                    state.loading = false;
                    state.forgotPasswordError = true;
                })
                .addCase(forgotPasswordUser.fulfilled, (state, action) => {
                    state.forgotPasswordSuccess = true;
                    state.loading = false;
                    state.value = action.payload.data;
                    state.forgotPasswordError = false;
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
    setSendOtpSuccess,
    setSendOtpError,
    setForgotPasswordError,
    setForgotPasswordSuccess,
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
export const selectSendOtpSuccess = (state) => state.user.sendOtpSuccess;
export const selectSendOtpError = (state) => state.user.sendOtpSuccess;

export default userSlice.reducer;
