import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {findAllEvents, findEventById, findEventsByEventTypes, findEventsByName} from "../api/EventApi.js";

const initialState = {
    events: [],
    event: null,
    totalPages: null,
    loading: false,
    success: false,
    error: null,
};
export const getEventsByName = createAsyncThunk("events/byName", async ({searchTerm, currentPage}) => {
    const response = await findEventsByName(searchTerm, currentPage);
    return response.data;
});
export const getAllEvent = createAsyncThunk("events", async (currentPage) => {
    const response = await findAllEvents(currentPage);
    return response.data;
})

export const getEventsByEventTypes = createAsyncThunk("events/eventTypes", async ({eventTypeNames, currentPage}) => {
    const response = await findEventsByEventTypes(eventTypeNames, currentPage);
    console.log(response.data)

    return response.data;
})

export const getEventById = createAsyncThunk("events/byEventId", async (eventId) => {
    const response = await findEventById(eventId);
    console.log(response.data)

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
    state.events = action.payload.data;
    state.totalPages = action.payload.totalPages;
    state.error = false;
};

export const EventSlice = createSlice({
    name: "Event",
    initialState,
    reducers: {},
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
            .addCase(getAllEvent.fulfilled, handleFulfilled)
            // find by EventType
            .addCase(getEventsByEventTypes.pending, handlePending)
            .addCase(getEventsByEventTypes.rejected, handleRejected)
            .addCase(getEventsByEventTypes.fulfilled, handleFulfilled)
            //find by EventId
            .addCase(getEventById.pending, handlePending)
            .addCase(getEventById.rejected, handleRejected)
            .addCase(getEventById.fulfilled, handleFulfilled);
    },
})

// export const selectEvents = (State)=> State.event.events
export default EventSlice.reducer
