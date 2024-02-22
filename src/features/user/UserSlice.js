import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    forgotPassword,
    getUser,
    lock,
    login,
    loginGoogle,
    loginWithToken,
    logout,
    register,
    remove,
    sendOtp,
    unlock
} from "../../api/UserApi.js";
import {Bounce} from "react-toastify";


const initialState = {

    value: null,
    loading: false,
    loginError: false,
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
    lockUserSuccess: false,
    lockUserError: null,
    unlockUserSuccess: false,
    unlockUserError: null,
    removeUserSuccess: false,
    removeUserError: null,
    isAuthenticated: false,
    isLocked: null,
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
            return rejectWithValue(response.data.message);
        }
        return response.data;
    }
);
export const sendOtpWithEmail = createAsyncThunk(
    "send-otp",
    async (otpData, {rejectWithValue}) => {
        const response = await sendOtp(otpData);
        if (response.status !== 200) {
            return rejectWithValue(response.data.message);
        }
        return response.data;
    }
);
export const forgotPasswordUser = createAsyncThunk(
    "forgot-password",
    async (data, {rejectWithValue}) => {
        const response = await forgotPassword(data);
        if (response.status !== 200) {
            return rejectWithValue(response.data.message);
        }
        return response.data;
    }
);
export const lockUser = createAsyncThunk(
    "lock",
    async (userData, {rejectWithValue}) => {
        const response = await lock(userData);
        if (response.status !== 200) {
            return rejectWithValue(response.data.message);
        }
        return response.data
    }
);
export const removeUser = createAsyncThunk(
    "remove",
    async (data, {rejectWithValue}) => {
        const response = await remove(data);
        if (response.status !== 200) {
            return rejectWithValue(response.data.message);
        }
        return response.data
    }
);
export const unlockUser = createAsyncThunk(
    "unlock",
    async (data, {rejectWithValue}) => {
        const response = await unlock(data);
        if (response.status !== 200) {
            return rejectWithValue(response.data.message);
        }
        return response.data
    }
);
const toastOptions = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
};


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
            setLockUserSuccess: (state, action) => {
                state.loginSuccess = action.payload;
            },
            setLockUserError: (state, action) => {
                state.lockUserError = action.payload;
            },
            setUnlockUserSuccess: (state, action) => {
                state.unlockUserSuccess = action.payload;
            },
            setUnlockUserError: (state, action) => {
                state.unlockUserError = action.payload;
            },
            setRemoveUserSuccess: (state, action) => {
                state.removeUserSuccess = action.payload;
            },
            setRemoveUserError: (state, action) => {
                state.removeUserError = action.payload;
            },
            setIsLocked: (state, action) => {
                state.isLocked = action.payload;
            },
            setIsAuthenticated: (state, action) => {
                state.isAuthenticated = action.payload;
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
                    state.registerError = true;
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
                    state.isAuthenticated = false;
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
                    state.isLocked = false;
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

                .addCase(lockUser.pending, (state) => {
                    state.lockUserSuccess = false;
                    state.loading = true;
                    state.lockUserError = false;
                })
                .addCase(lockUser.rejected, (state, action) => {
                    state.lockUserSuccess = false;
                    state.loading = false;
                    state.lockUserError = true;
                })
                .addCase(lockUser.fulfilled, (state, action) => {
                    state.lockUserSuccess = true;
                    state.loading = false;
                    state.value = action.payload.data;
                    state.lockUserError = false;
                })

                .addCase(unlockUser.pending, (state) => {
                    state.unlockUserSuccess = false;
                    state.loading = true;
                    state.unlockUserError = false;
                })
                .addCase(unlockUser.rejected, (state, action) => {
                    state.unlockUserSuccess = false;
                    state.loading = false;
                    state.unlockUserError = true;
                })
                .addCase(unlockUser.fulfilled, (state, action) => {
                    state.unlockUserSuccess = true;
                    state.loading = false;
                    state.value = action.payload.data;
                    state.unlockUserError = false;
                })

                .addCase(removeUser.pending, (state) => {
                    state.removeUserSuccess = false;
                    state.loading = true;
                    state.removeUserError = false;
                })
                .addCase(removeUser.rejected, (state, action) => {
                    state.removeUserSuccess = false;
                    state.loading = false;
                    state.removeUserError = true;
                })
                .addCase(removeUser.fulfilled, (state, action) => {
                    state.removeUserSuccess = true;
                    state.loading = false;
                    state.value = action.payload.data;
                    state.removeUserError = false;
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
    setLockUserSuccess,
    setLockUserError,
    setUnlockUserSuccess,
    setUnlockUserError,
    setIsLocked,
    setRemoveUserError,
    setRemoveUserSuccess,
    setIsAuthenticated,
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
export const selectLockUser = (state) => state.user.value;
export const selectRemoveUser = (state) => state.user.value;
export const selectIsLocked = (state) => state.user.isLocked;
export default userSlice.reducer;
