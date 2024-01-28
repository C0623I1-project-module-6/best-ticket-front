import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {fetchExistsUsers} from "../../api/ExistsUserApi.js"

const initialState = {
    existsUserList: null,
    username: null,
    userEmail: null,

    customerPhoneNumber: null,
    customerIdCard: null,
    customerReceiptEmail: null,

    personPhoneNumber: null,
    personEmail: null,
    personIdCard: null,
    personTaxCode: null,

    companyBusinessCode: null,
    companyName: null,
    companyEmail: null,
    companyPhone: null,

}
export const getExistsUsers = createAsyncThunk(
    "users/exists",
    async (existsUsers, {rejectWithValue}) => {
        const response = await fetchExistsUsers(existsUsers)
        if (response.status !== 200) {
            return rejectWithValue(response.data.message)
        }
        return response.data
    }
)

export const existsUserSlice = createSlice({
    name: "existsUsers",
    initialState,
    reducers: {
        setExistsUserList: (state, action) => {
            state.existsUserList = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getExistsUsers.fulfilled, (state, action) => {
                state.existsUserList = action.payload.data;
            })
    }
})
export const {
    setExistsUserList,
} = existsUserSlice.actions
export const selectExistsUsers = (state) => state.existsUsers.existsUserList;
export default existsUserSlice.reducer
