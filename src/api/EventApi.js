import axios from "axios";
import {BEST_TICKET_API} from "../ultility/AppConstant.js"

export const findAllEvents = async ()=>{
    let result = null;
    try {
        result = await axios.get(`${BEST_TICKET_API}event/events`);
        console.log(`${BEST_TICKET_API}event/events`)
    } catch (e) {
        console.log("Find events API error: " + e);
    }
    return result;
}
export const findEventsByName = async (searchText) => {
    let result = null;
    try {
        result = await axios.get(`${BEST_TICKET_API}?searchText=${searchText}`);
    } catch (e) {
        console.log("Find events API error: " + e);
    }
    return result;
};
