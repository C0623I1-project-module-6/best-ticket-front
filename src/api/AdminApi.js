import axios from "axios";
import {BEST_TICKET_API} from "../ultility/AppConstant.js";

export async function showBookings() {
  let response = null;
  await axios({
    url: `${BEST_TICKET_API}admins/bookings`,
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
export async function showUsers() {
  let response = null;
  await axios({
    url: `${BEST_TICKET_API}admin/users`,
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
export async function showEvents() {
  let response = null;
  await axios({
    url: `${BEST_TICKET_API}admin/events`,
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
