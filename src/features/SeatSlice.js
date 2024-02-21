import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    seats : [],
    totalPrice: null,
    ticketTypes: [],
    price: [],
    ticketCode: []
};

export const SeatSlice = createSlice({
    name: "seat",
    initialState,
    reducers: {
        setSeats: (state, action) => {
            state.seats = action.payload;
        },
        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload;
        },
        setTicketType:(state,action)=>{
            state.ticketTypes = action.payload;
        },
        setPrice:(state,action)=>{
            state.price = action.payload;
            console.log(state.price)
        },
        setTicketCode:(state,action)=>{
            state.ticketCode = action.payload;
            console.log(state.ticketCode)
        },
    },
});

export const { setSeats,setTotalPrice,setTicketType ,setPrice,setTicketCode} = SeatSlice.actions;

export default SeatSlice.reducer;
