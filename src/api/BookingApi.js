import axios from "axios";
import {BEST_TICKET_API} from "../ultility/AppConstant.js";

export const findAllBookings = async () => {
    let result = null;
    try {
        result = await axios.get(`${BEST_TICKET_API}bookings`);
        // console.log(`${BEST_TICKET_API}bookings`);
    } catch (e) {
        console.log("Find bookings API error: " + e);
    }
    return result;
};

export const findAllBookingsByEventId = async (eventId) => {
    let result = null;
    try {
        result = await axios.get(`${BEST_TICKET_API}bookings/event/${eventId}`);
    } catch (e) {
        console.log("Find bookings API error: " + e);
    }
    return result;
};

export const searchBookingByKeyword = async (eventId, keyword) => {
    let result = null;
        await axios.get(`${BEST_TICKET_API}bookings/event/${eventId}/search?keyword=${keyword}`).then((res) => {
            result = res
        }).catch(e => {
            console.log(e)
        });

    return result;
};
