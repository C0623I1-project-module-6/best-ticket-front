import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {createEvent, findAllEvents, findEventById, findEventsByEventTypes, findEventsByName} from "../api/EventApi.js";

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
    return response.data;
})

export const addEvent = createAsyncThunk("event/create",async (eventRequest)=>{
    const response = await createEvent(eventRequest);
    return response.data;
})

export const getEventById = createAsyncThunk("events/byEventId", async (eventId) => {
    const response = await findEventById(eventId);
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
    state.event = action.payload.data;
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

            // find by EventById
            .addCase(getEventById.pending, handlePending)
            .addCase(getEventById.rejected, handleRejected)
            .addCase(getEventById.fulfilled, handleFulfilled)

            //create event
            .addCase(addEvent.pending, (state)=>{
                state.success = false;
                state.loading = true;
                state.error = false;
            })
            .addCase(addEvent.rejected, (state,action)=>{
                state.success = false;
                state.loading = false;
                state.error = action.error;
            })
            .addCase(addEvent.fulfilled, (state,action)=>{
                state.success = true;
                state.loading = false;
                state.error = false;
                state.event = action.payload;
            })

    },
})

// export const selectEvents = (State)=> State.event.events
export const selectEventById = (state) => state.event.event;
export default EventSlice.reducer
