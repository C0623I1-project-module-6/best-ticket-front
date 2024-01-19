import axios from "axios";
import {BEST_TICKET_API} from "../ultility/AppConstant.js";

export const fetchExistsUsers = async () => {
    let response = null;
    await axios({
        url: `${BEST_TICKET_API}users/exists`,
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