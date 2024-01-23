import axios from "axios";
import {BEST_TICKET_API} from "../ultility/AppConstant.js";

export async function create(customer) {
    let response = null;
    let token=localStorage.getItem("token");
    await axios({
        url: `${BEST_TICKET_API}customers/add`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${token}`,
        },
        method: "POST",
        data: customer
    }).then((res) => {
        response = res;
    }).catch((e) => {
        response = e;
    })
    console.log(response)
    return response;
}
export async function update(customer) {
    let response = null;
    let token=localStorage.getItem("token");
    await axios({
        url: `${BEST_TICKET_API}customers/edit`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${token}`,
        },
        method: "PUT",
        data: customer
    }).then((res) => {
        response = res;
    }).catch((e) => {
        response = e;
    })
    console.log(response)
    return response;
}

