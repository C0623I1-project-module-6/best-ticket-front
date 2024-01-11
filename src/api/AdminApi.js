import axios from "axios";
import {BEST_TICKET_API} from "../ultility/AppConstant.js";

export async function showBookings(currentPage) {
  let response = null;
  await axios({
    url: `${BEST_TICKET_API}admin/bookings?page=${currentPage}`,
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
export async function showTickets() {
  let response = null;
  await axios({
    url: `${BEST_TICKET_API}admin/tickets`,
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
export async function showUsers(currentPage) {
  let response = null;
  await axios({
    url: `${BEST_TICKET_API}admin/users?page=${currentPage}`,
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
export async function showEvents(currentPage) {
  let response = null;
  await axios({
    url: `${BEST_TICKET_API}admin/events?page=${currentPage}`,
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
