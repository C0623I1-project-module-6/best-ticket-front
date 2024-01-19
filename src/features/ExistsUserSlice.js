import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchExistsUsers} from "../api/ExistsUserApi.js";

const initialState = {
    existsUserList: [],
    usernames:[],
};
export const getExistsUsers = createAsyncThunk(
    "users/exists",
    async (existsUsers, {rejectWithValue}) => {
        const response = await fetchExistsUsers(existsUsers);
        if (response.status !== 200) {
            return rejectWithValue(response.data.message);
        }
        console.log(response)
        return response.data;
    }
)

export const existsUserSlice = createSlice({
    name: "existsUsers",
    initialState,
    reducers: {
        setExistsUserList: (state, action) => {
            state.existsUserList = action.payload.usernames;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getExistsUsers.fulfilled, (state, action) => {
                state.existsUserList = action.payload.data;
            })
    }
});
export const {
    setExistsUserList,
} = existsUserSlice.actions;
export const selectExistsUsers = (state) => state.existsUsers.existsUserList;
export const selectUsernames = (state) => state.existsUsers.existsUserList;
export const selectUserEmails = (state) => state.existsUsers.existsUserList;
export const selectCustomerPhoneNumbers = (state) => state.existsUsers.existsUserList;
export const selectCustomerIdCards = (state) => state.existsUsers.existsUserList;
export const selectOrganizerPhoneNumbers = (state) => state.existsUsers.existsUserList;
export const selectOrganizerIdCard = (state) => state.existsUsers.existsUserList;
export const selectOrganizerEmails = (state) => state.existsUsers.existsUserList;
export const selectOrganizerTaxCode = (state) => state.existsUsers.existsUserList;
export const selectOrganizerBusinessCode = (state) => state.existsUsers.existsUserList;
export default existsUserSlice.reducer;
