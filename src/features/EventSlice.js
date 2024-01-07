import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {findAllEvents, findEventsByName} from "../api/EventApi.js";

const initialState = {
    events : [],
    event : null,
    loading: false,
    success: false,
    error: null,
};
export const getEventsByName = createAsyncThunk("events/byName",async ()=>{
    const response = await findEventsByName();
    return response.data;
    }
)
export const getAllEvent = createAsyncThunk("events",async ()=>{
    const response = await findAllEvents();
    return response.data;
})

// set action for slice
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
    state.events = action.payload.eventDTOS;
    state.error = false;
};

export const EventSlice = createSlice({
    name: "Event",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            // find by name
            // addcase (actiontype,reducer)
            .addCase(getEventsByName.pending, handlePending)
            .addCase(getEventsByName.rejected, handleRejected)
            .addCase(getEventsByName.fulfilled, handleFulfilled)
            // find all
            .addCase(getAllEvent.pending, handlePending)
            .addCase(getAllEvent.rejected, handleRejected)
            .addCase(getAllEvent.fulfilled, handleFulfilled);
            // find by EventType
    },
})

// export const selectEvents = (State)=> State.event.events
export default EventSlice.reducer
