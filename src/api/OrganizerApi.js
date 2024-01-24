import axios from "axios";
import {BEST_TICKET_API} from "../ultility/AppConstant.js";

export async function createOrganizer(organizer) {
  let response = null;
  let token = localStorage.getItem("token");
  await axios({
    url: `${BEST_TICKET_API}users/organizer/add`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    method: "POST",
    data: organizer
  }).then((res) => {
    response = res;
  }).catch((e) => {
    response = e;
  })
  console.log(response)
  return response;
}

export async function updateOrganizer(editOrganizer) {
  let response = null;
  let token = localStorage.getItem("token");
  await axios({
    url: `${BEST_TICKET_API}users/organizer/edit`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    method: "PUT",
    data: editOrganizer
  }).then((res) => {
    response = res;
  }).catch((e) => {
    response = e;
  })
  console.log(response)
  return response;
}
