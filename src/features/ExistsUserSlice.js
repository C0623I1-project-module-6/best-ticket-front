import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {showTickets} from "../api/AdminApi.js";

const initialState = {
    usernames: [],
    userEmails: [],
    customerPhoneNumbers: [],
    customerIdCards: [],
    organizerPhoneNumbers: [],
    organizerIdCards: [],
    organizerEmails: [],
    organizerTaxCodes: [],
    organizerBusinessCodes: [],
    success: true,
    loading: false,
    error: true,
};
export const getExistsUsers = createAsyncThunk(
    "users/exists",
    async (data, {rejectWithValue}) => {
        const response = await showTickets(data);
        if (response.status !== 200) {
            return rejectWithValue(response.data.message);
        }
        return response.data;
    }
)

export const existsUserSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsernames: (state, action) => {
            state.usernames = action.payload;
        },
        setUserEmails: (state, action) => {
            state.userEmails = action.payload;
        },
        setCustomerPhoneNumbers: (state, action) => {
            state.customerPhoneNumbers = action.payload;
        },
        setCustomerIdCards: (state, action) => {
            state.customerIdCards = action.payload;
        },
        setOrganizerPhoneNumbers: (state, action) => {
            state.organizerPhoneNumbers = action.payload;
        },
        setOrganizerIdCards: (state, action) => {
            state.organizerIdCards = action.payload;
        },
        setOrganizerEmails: (state, action) => {
            state.organizerEmails = action.payload;
        },
        setOrganizerTaxCodes: (state, action) => {
            state.organizerTaxCodes = action.payload;
        },
        setOrganizerBusinessCode: (state, action) => {
            state.organizerBusinessCodes = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getExistsUsers.pending, (state) => {
                state.success = false;
                state.loading = true;
                state.error = false;
            })
            .addCase(getExistsUsers.rejected, (state, action) => {
                state.success = false;
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getExistsUsers.fulfilled, (state, action) => {
                state.success = true;
                state.loading = false;
                state.usernames = action.payload.data.data;
                state.userEmails = action.payload.data.data;
                state.customerPhoneNumbers = action.payload.data.data;
                state.customerIdCards = action.payload.data.data;
                state.organizerPhoneNumbers = action.payload.data.data;
                state.organizerEmails = action.payload.data.data;
                state.organizerIdCards = action.payload.data.data;
                state.organizerTaxCodes = action.payload.data.data;
                state.organizerBusinessCodes = action.payload.data.data;
                state.error = false;
            })
    }
});
export const {
    setUsernames,
    setUserEmails,
    setCustomerPhoneNumbers,
    setCustomerIdCards,
    setOrganizerPhoneNumbers,
    setOrganizerEmails,
    setOrganizerIdCards,
    setOrganizerTaxCodes,
    setOrganizerBusinessCode,
} = existsUserSlice.actions;
export const selectUsernames = (state) => state.users.usernames;
export const selectUserEmails = (state) => state.users.userEmails;
export const selectCustomerPhoneNumbers = (state) => state.users.customerPhoneNumbers;
export const selectCustomerIdCards = (state) => state.users.customerIdCards;
export const selectOrganizerPhoneNumbers = (state) => state.users.organizerPhoneNumbers;
export const selectOrganizerIdCard = (state) => state.users.organizerIdCards;
export const selectOrganizerEmails = (state) => state.users.organizerEmails;
export const selectOrganizerTaxCode = (state) => state.users.organizerTaxCodes;
export const selectOrganizerBusinessCode = (state) => state.users.organizerBusinessCodes;
export default existsUserSlice.reducer;
