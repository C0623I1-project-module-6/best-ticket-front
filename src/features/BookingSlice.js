import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {findAllBookings} from "../api/BookingApi.js";

const initialState = {
    bookings: [],
    booking: null,
    loading: false,
    success: false,
    error: null,
};

export const getAllBookings = createAsyncThunk("bookings", async () => {
    const response = await findAllBookings();
    return response.data;
});

const handlePending = (state) => {
    state.success = false;
    state.loading = true;
    state.error = false;
};

const handleRejected = (state, action) => {
    state.success = false;
    state.loading = false;
    state.error = action.error;
};

const handleFulfilled = (state, action) => {
    state.success = true;
    state.loading = false;
    state.bookings = action.payload.bookingDTOS;
    state.error = false;
};

export const BookingSlice = createSlice({
    name: "Booking",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllBookings.pending, handlePending)
            .addCase(getAllBookings.rejected, handleRejected)
            .addCase(getAllBookings.fulfilled, handleFulfilled);
    },
});

export default BookingSlice.reducer;
