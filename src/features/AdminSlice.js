import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {showBookings, showEvents, showTickets, showUsers} from "../api/AdminApi.js";

const initialState = {
  bookings: null,
  tickets: null,
  users: null,
  events: null,
  success: false,
  loading: true,
  error: false,

};

export const getPageBookings = createAsyncThunk(
  "getBookings",
  async (keyword, {rejectWithValue}) => {
    const response = await showBookings(keyword);
    if (response.status !== 200) {
      console.log(response)
      return rejectWithValue(response.data.message);
    }
    console.log(response)
    return response.data;
  }
)

export const getPageTickets = createAsyncThunk(
  "getTickets",
  async (keyword, {rejectWithValue}) => {
    const response = await showTickets(keyword);
    if (response.status !== 200) {
      console.log(response)
      return rejectWithValue(response.data.message);
    }
    console.log(response)
    return response.data;
  }
)
export const getPageUsers = createAsyncThunk(
  "getUsers",
  async (keyword, {rejectWithValue}) => {
    const response = await showUsers(keyword);
    if (response.status !== 200) {
      console.log(response)
      return rejectWithValue(response.data.message);
    }
    console.log(response)
    return response.data;
  }
)
export const getPageEvents = createAsyncThunk(
  "getEvents",
  async (keyword, {rejectWithValue}) => {
    const response = await showEvents(keyword);
    if (response.status !== 200) {
      console.log(response)
      return rejectWithValue(response.data.message);
    }
    console.log(response)
    return response.data;
  }
)

export const adminSlice = createSlice(
  {
    name: "admin",
    initialState,
    reducers: {
      setBookings: (state, action) => {
        state.bookings = action.payload;
      },
      setTickets: (state, action) => {
        state.tickets = action.payload;
      },
      setUsers: (state, action) => {
        state.users = action.payload;
      },
      setEvents: (state, action) => {
        state.events = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(getPageBookings.pending, (state) => {
          state.success = false;
          state.loading = true;
          state.error = false;
        })
        .addCase(getPageBookings.rejected, (state, action) => {
          state.success = false;
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(getPageBookings.fulfilled, (state, action) => {
          state.success = true;
          state.loading = false;
          state.bookings = action.payload.data.content;
          state.error = false;
        })
        .addCase(getPageTickets.pending, (state) => {
          state.success = false;
          state.loading = true;
          state.error = false;
        })
        .addCase(getPageTickets.rejected, (state, action) => {
          state.success = false;
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(getPageTickets.fulfilled, (state, action) => {
          state.success = true;
          state.loading = false;
          state.tickets = action.payload.data.content;
          state.error = false;
        })
        .addCase(getPageUsers.pending, (state) => {
          state.success = false;
          state.loading = true;
          state.error = false;
        })
        .addCase(getPageUsers.rejected, (state, action) => {
          state.success = false;
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(getPageUsers.fulfilled, (state, action) => {
          state.success = true;
          state.loading = false;
          state.users = action.payload.data.content;
          state.error = false;
        })
        .addCase(getPageEvents.pending, (state) => {
          state.success = false;
          state.loading = true;
          state.error = false;
        })
        .addCase(getPageEvents.rejected, (state, action) => {
          state.success = false;
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(getPageEvents.fulfilled, (state, action) => {
          state.success = true;
          state.loading = false;
          state.events = action.payload.data.content;
          state.error = false;
        })
    }

  }
)

export const {
  setBookings,
  setTickets,
  setUsers,
  setEvents

} = adminSlice.actions;
export const selectBookings = (state) => state.admin.bookings;
export const selectTickets = (state) => state.admin.tickets;
export const selectUsers = (state) => state.admin.users;
export const selectEvents = (state) => state.admin.events;


export default adminSlice.reducer;
