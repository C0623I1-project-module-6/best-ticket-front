import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {findAllBookings, findAllBookingsByEventId, searchBookingByKeyword, sendEmail} from "../api/BookingApi.js";

const initialState = {
    bookings: null,
    booking: null,
    message: null,
    totalPages: null,
    loading: false,
    success: false,
    error: null,
};

export const getAllBookings = createAsyncThunk("bookings", async (currentPage, rejectWithValue) => {
    const response = await findAllBookings(currentPage);
    if (response.status !== 200) {
        return rejectWithValue(response.data)
    }
    return response.data;
});
export const getAllBookingsByEventId = createAsyncThunk("bookings/byEventId", async ({eventId, currentPage}, rejectWithValue) => {
    const response = await findAllBookingsByEventId(eventId, currentPage);
    if (response.status !== 200) {
        return rejectWithValue(response.data)
    }
    return response.data;
});
export const getAllBookingsByKeyword = createAsyncThunk("bookings/byEventId/byKeyword",
    async ({eventId, keyword, currentPage}, rejectWithValue) => {
        const response = await searchBookingByKeyword(eventId, keyword, currentPage);
        if (response.status !== 200) {
            return rejectWithValue(response.data)
        }
        return response.data;
    });

export const sendEmailToCustomers = createAsyncThunk("bookings/sentEmail",
    async (message, rejectWithValue) => {
        const response = await sendEmail();
        if (response.status !== 200) {
            return rejectWithValue(response.data)
        }
        return response.data;
    });

const handlePending = (state) => {
    state.success = false;
    state.loading = true;
    state.error = false;
}, handleRejected = (state, action) => {
    state.success = false;
    state.loading = false;
    state.bookings = action.payload;
    state.error = action.error;
}, handleFulfilled = (state, action) => {
    state.success = true;
    state.loading = false;
    if (action.payload && action.payload.data) {
        state.bookings = action.payload.data;
        state.booking = action.payload;
        state.totalPages = action.payload.data.totalPages;
    } else {
        state.bookings = [];
        state.booking = null;
        state.totalPages = null;
    }
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
            .addCase(getAllBookingsByEventId.fulfilled, handleFulfilled)

            .addCase(getAllBookingsByKeyword.pending, handlePending)
            .addCase(getAllBookingsByKeyword.rejected, handleRejected)
            .addCase(getAllBookingsByKeyword.fulfilled, (state, action) => {
                state.success = true;
                state.loading = false;
                state.bookings = action.payload.data;
                state.totalPages = action.payload.data.totalPages;
                state.error = false;
            })

            .addCase(sendEmailToCustomers.pending, handlePending)
            .addCase(sendEmailToCustomers.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.message = action.payload;
                state.error = action.error;
            })
            .addCase(sendEmailToCustomers.fulfilled, (state, action) => {
                state.success = true;
                state.loading = false;
                state.message = action.payload.data;
                state.error = false;
            })
    },
});

export const selectAllBookingsByEventId = (state) => state.booking.bookings;
export const selectAllBookingsByKeyword = (state) => state.booking.bookings;
export default BookingSlice.reducer;
