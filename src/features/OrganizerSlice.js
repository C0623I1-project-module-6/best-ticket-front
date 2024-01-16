import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {createOrganizer} from "../api/OrganizerApi.js";

const initialState = {
    value: null,
    loading: false,
    registerProfileSuccess: false,
    registerProfileError: null,
}
export const registerProfile = createAsyncThunk(
    "organizers/add",
    async (organizer, {rejectedWithValue}) => {
        const response = await createOrganizer(organizer);
        if (response.status !== 201) {
            console.log(response);
            return rejectedWithValue(response.data.message);
        }
        console.log(response)
        return response.data;
    }
);
export const organizerSlice = createSlice(
    {
        name: "organizer",
        initialState,
        reducers: {
            setLoading: (state, action) => {
                state.loading = action.payload;
            },
            setRegisterProfileSuccess: (state, action) => {
                state.registerProfileSuccess = action.payload;
            },
            setRegisterProfileError: (state, action) => {
                state.registerProfileError = action.payload;
            },
            setValue: (state, action) => {
                state.value = action.payload
            },
        },
        extraReducers: (builder) => {
            builder
                .addCase(registerProfile.pending, (state) => {
                    state.registerProfileSuccess = false;
                    state.loading = true;
                    state.registerProfileError = false;
                })
                .addCase(registerProfile.rejected, (state, action) => {
                    state.registerProfileSuccess = false;
                    state.loading = false;
                    state.registerProfileError = action.payload;
                })
                .addCase(registerProfile.fulfilled, (state, action) => {
                    state.registerProfileSuccess = true;
                    state.loading = false;
                    state.value = action.payload.data;
                    state.registerProfileError = false;
                })
        }
    }
)
export const {
    setValue,
    setLoading,
    setRegisterProfileSuccess,
    setRegisterProfileError,
} = organizerSlice.actions;

export const selectRegisterProfileSuccess = (state) => state.organizer.registerProfileSuccess;
export const selectOrganizerRegister = (state) => state.organizer.value;
export const selectRegisterProfileError = (state) => state.organizer.registerProfileError;
export default organizerSlice.reducer;

