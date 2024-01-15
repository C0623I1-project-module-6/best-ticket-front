import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {create} from "../api/CustomerApi.js";

const initialState = {
    value: null,
    loading: false,
    addProfileSuccess: false,
    addProfileError: null,
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
        }
    }
)
export const {
    setValue,
    setLoading,
    setAddProfileSuccess,
    setAddProfileError,
} = customerSlice.actions;

export const selectAddProfileSuccess = (state) => state.customer.addProfileSuccess;
export const selectProfileAdded = (state) => state.customer.addProfileSuccess;
export default customerSlice.reducer;


