import axios from "axios";
import {BEST_TICKET_API} from "../../ultility/AppConstant.js"

export const findAllEventType = async ()=>{
    let result = null;
    try {
        result = await axios.get('http://localhost:8080/api/event-type');
    } catch (e) {
        console.log(" API error: " + e);
    }
    return result;
}