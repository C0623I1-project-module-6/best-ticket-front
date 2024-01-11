import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {login, loginGoogle, logout, register} from "../api/UserApi.js";

const initialState = {
  value: null,
  loading: false,
  loginError: null,
  loginSuccess: false,
  registerSuccess: false,
};

export const loginUser = createAsyncThunk(
  "login",
  async (loginData, {rejectWithValue}) => {
    const response = await login(loginData);
    if (response.status !== 200) {
      console.log(response)
      return rejectWithValue(response.data.message);
    }
    console.log(response.data.data)
    return response.data;
  }
);

export const logoutUser = createAsyncThunk(
  "logout",
  async (logoutData,{rejectWithValue}) => {
    const response = await logout(logoutData);
    if (response.status !== 200) {
      console.log(response)
      return rejectWithValue(response.data.message);
    }
    console.log(response)
    return response.data;
  }
)

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
    console.log(response.data)
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
      setRegisterSuccess:(state, action)=>{
        state.registerSuccess=action.payload;
      },
      setValue: (state, action) => {
        state.value = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
      .addCase(registerUser.pending, (state) => {
        state.loginSuccess = false;
        state.loading = true;
        state.loginError = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loginSuccess = false;
        state.loading = false;
        state.loginError = action.payload;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loginSuccess = true;
        state.loading = false;
        state.value = action.payload.data;
        state.loginError = false;
      })
        .addCase(loginUser.pending, (state) => {
          state.loginSuccess = false;
          state.loading = true;
          state.loginError = false;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.loginSuccess = false;
          state.loading = false;
          state.loginError = action.payload;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.loginSuccess = true;
          state.loading = false;
          state.value = action.payload.data;
          state.loginError = false;
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
          state.loginError = false;
        })
    }

  }
)
export const {
  setLoading,
  setLoginError,
  setLoginSuccess,
  setValue

} = userSlice.actions;

export const selectLoginSuccess = (state) => state.user.loginSuccess;
export const selectUserLogin = (state) => state.user.value;
export const selectRegisterSusccess=(state)=>state.user.registerSuccess;
export const selectUserRegister=(state)=>state.user.value;
export default userSlice.reducer;
