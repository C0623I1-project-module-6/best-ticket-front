import axios from "axios";
import {BEST_TICKET_API} from "../ultility/AppConstant.js";

export async function findAllBookings(currentPage) {
    let response = null;
    await axios({
        url: `${BEST_TICKET_API}bookings?page=${currentPage}`,
        headers: {
            'Content-Type': 'application/json',
        },
        method: "GET",
    }).then((res) => {
        response = res;
    }).catch((e) => {
        response = e;
    })
    return response;
}

export async function findAllBookingsByEventId(eventId, currentPage) {
    let response = null;
    await axios({
        url: `${BEST_TICKET_API}bookings/event/${eventId}?page=${currentPage}`,
        headers: {
            'Content-Type': 'application/json',
        },
        method: "GET",
    }).then((res) => {
        response = res;
    }).catch((e) => {
        response = e;
    })
    return response;
}

export async function searchBookingByKeyword(eventId, keyword, currentPage) {
    let response = null;
    await axios({
        url: `${BEST_TICKET_API}bookings/event/${eventId}/search?keyword=${keyword}&page=${currentPage}`,
        headers: {
            'Content-Type': 'application/json',
        },
        method: "GET",
    }).then((res) => {
        response = res;
    }).catch((e) => {
        response = e;
    })
    return response;
}

export async function sendEmail(message) {
    let response = null;
    await axios({
            url: `${BEST_TICKET_API}bookings/sent-email`,
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST",
            data: message
        }
    ).then((res) => {
        response = res;
    }).catch((e) => {
        response = e;
    })
    console.log(response)
    return response;
}

