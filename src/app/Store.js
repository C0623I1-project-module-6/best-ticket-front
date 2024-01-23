import {applyMiddleware, compose, configureStore} from "@reduxjs/toolkit";
import UserSlice from "../features/UserSlice.js";
import EventSlice from "../features/EventSlice.js";
import AdminSlice from "../features/AdminSlice.js";
import TicketSlice from "../features/TicketSlice.js";
import BookingSlice from "../features/BookingSlice.js";
import BookingDetailSlice from "../features/BookingDetailSlice.js";
import CustomerSlice from "../features/CustomerSlice.js";
import OrganizerSlice from "../features/OrganizerSlice.js";
import ExistsUserSlice from "../features/ExistsUserSlice.js"
import TicketTypeSlice from "../features/TicketTypeSlice.js";
import TimeSlice from "../features/TimeSlice.js";
import SeatSlice from "../features/SeatSlice.js";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = configureStore(
    {
        reducer: {
            user: UserSlice,
            event: EventSlice,
            ticket: TicketSlice,
            ticketType: TicketTypeSlice,
            time: TimeSlice,
            admin: AdminSlice,
            booking: BookingSlice,
            bookingDetail: BookingDetailSlice,
            customer: CustomerSlice,
            organizer: OrganizerSlice,
            existsUsers: ExistsUserSlice,
            seat: SeatSlice,
        },
    },
    composeEnhancers(applyMiddleware())
);