import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {createOrganizer} from "../api/OrganizerApi.js";
import {findEventsByName} from "../api/EventApi.js";

const initialState = {
  value: null,
  loading: false,
  success: false,
  error: null,
}

export const getOrganizerByUserId = createAsyncThunk(
    "organizers/userId",
    async () => {
        const response = await findEventsByName();
        return response.data;
    }


);
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
      setSuccess: (state, action) => {
        state.success = action.payload;
      },
      setError: (state, action) => {
        state.error = action.payload;
      },
      setValue: (state, action) => {
        state.value = action.payload
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(registerProfile.pending, (state) => {
          state.success = false;
          state.loading = true;
          state.error = false;
        })
        .addCase(registerProfile.rejected, (state, action) => {
          state.success = false;
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(registerProfile.fulfilled, (state, action) => {
          state.success = true;
          state.loading = false;
          state.value = action.payload.data;
          state.error = false;
        })
          .addCase(getOrganizerByUserId.fulfilled,(state, action)=>{
              state.success = true;
              state.loading = false;
              state.value = action.payload.data;
              state.error = false;
          })
    }
  }
)
export const {
  setValue,
  setLoading,
  setSuccess,
  setError,
} = organizerSlice.actions;

export const selectSuccess = (state) => state.organizer.success;
export const selectOrganizerRegister = (state) => state.organizer.value;
export const selectError = (state) => state.organizer.error;
export default organizerSlice.reducer;

