import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {findAllBookings, findAllBookingsByEventId} from "../api/BookingApi.js";

const initialState = {
    bookings: [],
    booking: null,
    totalPages: null,
    loading: false,
    success: false,
    error: null,
};

export const getAllBookings = createAsyncThunk("bookings", async () => {
    const response = await findAllBookings();
    return response.data;
});
export const getAllBookingsByEventId = createAsyncThunk("bookings/byEventId", async (eventId) => {
    const response = await findAllBookingsByEventId(eventId);
    console.log(response)
    return response.data;
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
    state.success = true;
    state.loading = false;
    state.bookings = action.payload.data;
    state.totalPages=action.payload.totalPages;
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
            .addCase(getAllBookings.fulfilled, handleFulfilled)
            .addCase(getAllBookingsByEventId.pending, handlePending)
            .addCase(getAllBookingsByEventId.rejected, handleRejected)
            .addCase(getAllBookingsByEventId.fulfilled, handleFulfilled);

    },
});

export default BookingSlice.reducer;
