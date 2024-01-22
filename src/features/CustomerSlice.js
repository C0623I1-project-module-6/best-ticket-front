import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {create, update} from "../api/CustomerApi.js";

const initialState = {
    value: null,
    loading: false,
    addProfileSuccess: false,
    addProfileError: null,
    editProfileSuccess: false,
    editProfileError: null,

};
export const addProfile = createAsyncThunk(
    "customers/add",
    async (customerData, {rejectedWithValue}) => {
        const response = await create(customerData);
        if (response.status !== 201) {
            console.log(response);
            return rejectedWithValue(response.data.message);
        }
        console.log(response);
        return response.data;
    }
);
export const editProfile = createAsyncThunk(
    "customers/edit",
    async (customerData, {rejectedWithValue}) => {
        const response = await update(customerData);
        if (response.status !== 201) {
            console.log(response);
            return rejectedWithValue(response.data.message);
        }
        console.log(response);
        return response.data;
    }
);

export const customerSlice = createSlice(
    {
        name: "customer",
        initialState,
        reducers: {
            setLoading: (state, action) => {
                state.loading = action.payload;
            },
            setAddProfileSuccess: (state, action) => {
                state.addProfileSuccess = action.payload;
            },
            setAddProfileError: (state, action) => {
                state.addProfileError = action.payload;
            },
            setEditProfileSuccess: (state, action) => {
                state.addProfileSuccess = action.payload;
            },
            setEditProfileError: (state, action) => {
                state.addProfileError = action.payload;
            },
            setValue: (state, action) => {
                state.value = action.payload;
            },
        },
        extraReducers: (builder) => {
            builder
                .addCase(addProfile.pending, (state) => {
                    state.addProfileSuccess = false;
                    state.loading = true;
                    state.addProfileError = false;
                })
                .addCase(addProfile.rejected, (state, action) => {
                    state.addProfileSuccess = false;
                    state.loading = false;
                    state.addProfileError = action.payload;
                })
                .addCase(addProfile.fulfilled, (state, action) => {
                    state.addProfileSuccess = true;
                    state.loading = false;
                    state.value = action.payload.data;
                    state.addProfileError = false;
                })

                .addCase(editProfile.pending, (state) => {
                    state.editProfileSuccess = false;
                    state.loading = true;
                    state.editProfileError = false;
                })
                .addCase(editProfile.rejected, (state, action) => {
                    state.editProfileSuccess = false;
                    state.loading = false;
                    state.editProfileError = action.payload;
                })
                .addCase(editProfile.fulfilled, (state, action) => {
                    state.editProfileSuccess = true;
                    state.loading = false;
                    state.value = action.payload.data;
                    state.editProfileError = false;
                })
        }
    }
)
export const {
    setValue,
    setLoading,
    setAddProfileSuccess,
    setAddProfileError,
    setEditProfileSuccess,
    setEditProfileError,
} = customerSlice.actions;

export const selectAddProfileSuccess = (state) => state.customer.addProfileSuccess;
export const selectProfileAdded = (state) => state.customer.value;
export const selectProfileEdited = (state) => state.customer.value;
export default customerSlice.reducer;


