import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {findAllBookingDetailsByBookingId} from "../api/BookingDetailApi.js";

const initialState = {
    bookingDetails: [],
    bookingDetail: null,
    totalPages: null,
    loading: false,
    success: false,
    error: null,
};

export const getAllBookingDetailsByBookingId = createAsyncThunk("bookingDetails/byBookingId", async (bookingId) => {
    try {
        const response = await findAllBookingDetailsByBookingId(bookingId);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
});

const handlePending = (state) => {
    state.success = false;
    state.loading = true;
    state.error = false;
}, handleRejected = (state, action) => {
    state.success = false;
    state.loading = false;
    state.error = action.error;
}, handleFulfilled = (state, action) => {
    if (action.payload) {
        state.success = true;
        state.loading = false;
        state.bookingDetails = action.payload;
        state.totalPages = action.payload.totalPages;
        state.error = false;
    }
};

export const BookingDetailSlice = createSlice({
    name: "BookingDetail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllBookingDetailsByBookingId.pending, handlePending)
            .addCase(getAllBookingDetailsByBookingId.rejected, handleRejected)
            .addCase(getAllBookingDetailsByBookingId.fulfilled, handleFulfilled);
    },
});

export default BookingDetailSlice.reducer;
