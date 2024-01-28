import {BEST_TICKET_API} from "../ultility/AppConstant.js";
import axios from "axios";

export const findAllFiles = async () => {
    let result = null;
    await axios.get(`${BEST_TICKET_API}api/files`).then((res) => {
        result = res
    }).catch(e => {
        console.log(e)
    });

    return result;
}

export const addFile = async (file) => {
    let result = null;
    await axios.post(`${BEST_TICKET_API}api/files/upload`, file).then((res) => {
        result = res
    }).catch(e => {
        console.log(e)
    });

    return result;
}