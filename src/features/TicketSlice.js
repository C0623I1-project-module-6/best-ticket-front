import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {showAllTicket, showAllTicketFinished, showAllTicketUpcoming, showTicketById} from "../api/TicketApi";

const initialState = {
    tickets: [],
    ticket: null,
    loading: false,
    success: false,
    error: null,
};


export const getTicketsByStatusFinished = createAsyncThunk(
    "tickets/showAllTicketFinished",
    async (status) => {
        const response = await showAllTicketFinished(status);
        return response.data;
    }
);
export const getTicketsByStatusUpcoming = createAsyncThunk(
    "tickets/showAllTicketUpcoming",
    async (status) => {
        const response = await showAllTicketUpcoming(status);
        return response.data;
    }
);
export const getTickets = createAsyncThunk(
    "tickets/showAllTicket",
    async () => {
        const response = await showAllTicket();
        return response.data;
    }
);
export const getTicket = createAsyncThunk(
    "tickets/showTicketById",
    async (id) => {
        const response = await showTicketById(id);
        console.log(response.data)
        return response.data;
    }
);
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
    state.tickets = action.payload;
    state.ticket = action.payload;
    console.log(state.ticket);
    state.error = false;
};

export const TicketSlice = createSlice({
    name: "ticket",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setSuccess: (state, action) => {
            state.success = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTicketsByStatusFinished.pending, handlePending)
            .addCase(getTicketsByStatusFinished.rejected, handleRejected)
            .addCase(getTicketsByStatusFinished.fulfilled, handleFulfilled)

            .addCase(getTicketsByStatusUpcoming.pending, handlePending)
            .addCase(getTicketsByStatusUpcoming.rejected, handleRejected)
            .addCase(getTicketsByStatusUpcoming.fulfilled, handleFulfilled)

            .addCase(getTickets.pending, handlePending)
            .addCase(getTickets.rejected, handleRejected)
            .addCase(getTickets.fulfilled, handleFulfilled)

            .addCase(getTicket.pending, handlePending)
            .addCase(getTicket.rejected, handleRejected)
            .addCase(getTicket.fulfilled, handleFulfilled)


    }
});
export const {setLoading, setError, setSuccess} = TicketSlice.actions;

export const selectShowTicket = (state) => state.ticket.tickets;

export const selectShowTicketById = (state) => state.ticket.ticket;

export default TicketSlice.reducer;
