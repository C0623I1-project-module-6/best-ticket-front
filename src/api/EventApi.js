import axios from "axios";
import {BEST_TICKET_API} from "../ultility/AppConstant.js"

export const findAllEvents = async (currentPage)=>{
    let result = null;
    try {
        result = await axios.get(`${BEST_TICKET_API}events?page=${currentPage}&pageSize=20`);
        console.log(result.data)
    } catch (e) {
        console.log("Find events API error: " + e);
    }
    return result;
}
export const findEventsByName = async (searchTerm,currentPage) => {
    let result = null;
    try {
        result = await axios.get(`${BEST_TICKET_API}events/search?text=${searchTerm}&page=${currentPage}&pageSize=20`);
    } catch (e) {
        console.log("Find events API error: " + e);
    }
    return result;
};

export const findEventsByEventTypes = async (eventTypeNames,currentPage) => {
    let result = null;
    try {
        result = await axios.get(`${BEST_TICKET_API}events/eventTypeNames?eventTypeNames=${eventTypeNames}&page=${currentPage}&pageSize=20`);
        console.log(eventTypeNames)
    } catch (e) {
        console.log("Find events API error: " + e);
    }
    return result;
};