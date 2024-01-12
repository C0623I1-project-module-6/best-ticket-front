import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {showAllTicketFinished} from "../api/TicketApi";

const initialState = {
  tickets: [],
  ticket: null,
  loading: false,
  success: false,
  error: null,
};


export const getTicketsByStatusFinished = createAsyncThunk(
  "tickets/byStatus",
  async (status) => {
    const response = await showAllTicketFinished(status);
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
  }
});
export const {setLoading, setError, setSuccess} = TicketSlice.actions;

export const selectShowTicketUpcoming = (state) => state.ticket.tickets;
export const selectShowTicketFinished = (state) => state.ticket.tickets;

export default TicketSlice.reducer;
