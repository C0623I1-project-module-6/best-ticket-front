import axios from "axios";
import {BEST_TICKET_API} from "../ultility/AppConstant.js"

export async function login(user) {
  let response = null;
  await axios({
    url: `${BEST_TICKET_API}auth/login`,
    headers: {
      'Content-Type': 'application/json',
    },
    method: "POST",
    data: user
  }).then((res) => {
    response = res;
  }).catch((e) => {
    response = e;
  })
  console.log(response)
  return response;
}

export async function register(user) {
  let response = null;
  await axios({
    url: `${BEST_TICKET_API}auth/register`,
    headers: {
      'Content-Type': 'application/json',
    },
    method: "POST",
    data: user
  }).then((res) => {
    response = res;
  }).catch((e) => {
    response = e;
  })
  console.log(response)
  return response;
}

export async function loginGoogle(user) {
  let response = null;
  await axios({
    url: `${BEST_TICKET_API}auth/google-login`,
    headers: {
      'Content-Type': 'application/json',
      'Accept-Encoding': "gzip, deflate, br",
    },
    method: "POST",
    data: user
  }).then((res) => {
    response = res;
  }).catch((e) => {
    response = e;
  })
  console.log(response)
  return response;
}

export function logout() {

}
