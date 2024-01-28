import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {addFile, findAllFiles} from "../api/FileApi.js";

const initialState = {
    files: null, file: null, totalPages: null, loading: false, success: false, error: null,
};

export const testFirebase = createAsyncThunk("testFireBase", async () => {
    const response = await findAllFiles();
    return response.data;
});

export const uploadFirebase = createAsyncThunk("uploadFireBase", async (file) => {
    const response = await addFile(file);
    return response.data;
});


const handlePending = (state) => {
    state.success = false;
    state.loading = true;
    state.error = false;
}, handleRejected = (state, action) => {
    state.success = false;
    state.loading = false;
    state.files = action.payload;
    state.error = action.error;
}, handleFulfilled = (state, action) => {
    state.success = true;
    state.loading = false;
    if (action.payload && action.payload.data) {
        state.files = action.payload.data;
        state.file = action.payload;
        state.totalPages = action.payload.data.totalPages;
    } else {
        state.files = [];
        state.file = null;
        state.totalPages = null;
    }
    state.error = false;
};

export const FileSlice = createSlice({
    name: "Booking", initialState, reducers: {}, extraReducers: (builder) => {
        builder
            .addCase(testFirebase.pending, handlePending)
            .addCase(testFirebase.rejected, handleRejected)
            .addCase(testFirebase.fulfilled, handleFulfilled)

            .addCase(uploadFirebase.pending, handlePending)
            .addCase(uploadFirebase.rejected, handleRejected)
            .addCase(uploadFirebase.fulfilled, handleFulfilled)
    },
});

export default FileSlice.reducer;
