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
    const token = res.data.token
    localStorage.setItem('token', token)
    response = res;
  }).catch((e) => {
    response = e;
  })
  return response;
}

export async function loginWithToken() {
  let response = null;
  const token = localStorage.getItem("token");
  await axios({
    url: `${BEST_TICKET_API}auth/login`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    method: "POST",
    data: null,
  }).then((res) => {
    response = res;
  }).catch((e) => {
    response = e;
  })
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
  return response;
}

export async function logout(user) {
  let response = null;
  let token = localStorage.getItem('token');
  await axios({
    url: `${BEST_TICKET_API}auth/logout`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    method: "POST",
    data: user
  }).then((res) => {
    response = res;
  }).catch((e) => {
    response = e;
  })
  return response;
}

export async function getUser(userId) {
  let response = null;
  let token = localStorage.getItem('token');
  await axios({
    url: `${BEST_TICKET_API}users/${userId}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    method: "GET",
  }).then((res) => {
    response = res;
  }).catch((e) => {
    response = e;
  })
  return response;
}
export async function sendOtp(data) {
  let response = null;
  await axios({
    url: `${BEST_TICKET_API}auth/send-otp`,
    headers: {
      'Content-Type': 'application/json',
    },
    method: "POST",
    data: data
  }).then((res) => {
    response = res;
  }).catch((e) => {
    response = e;
  })
  console.log(response)
  return response;
}
export async function forgotPassword(data) {
  let response = null;
  await axios({
    url: `${BEST_TICKET_API}auth/forgot-password`,
    headers: {
      'Content-Type': 'application/json',
    },
    method: "POST",
    data: data
  }).then((res) => {
    response = res;
  }).catch((e) => {
    response = e;
  })
  console.log(response)
  return response;
}



