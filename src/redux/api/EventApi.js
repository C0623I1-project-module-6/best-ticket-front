import axios from "axios";
import {BEST_TICKET_API} from "../../ultility/AppConstant.js"

export const findAllEvents = async (currentPage)=>{
    let result = null;
    try {
        result = await axios.get(`${BEST_TICKET_API}events?page=${currentPage}&pageSize=20`);
        console.log(result.data)
    } catch (e) {
        console.log("Find events API error: " + e);
    }
    return result.data;
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