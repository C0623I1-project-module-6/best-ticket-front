import axios from "axios";
import { BEST_TICKET_API } from "../ultility/AppConstant";

export const showAllTicketUpcoming = async (status) => {
    let result = null;
    try {
        result = await axios.get(
            `${BEST_TICKET_API}tickets/show-ticket/upcoming/${status}`,{
                headers: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsYW1taW5nIiwiaWF0IjoxNzA0NzY3NjE0LCJleHAiOjE3MDQ4NTQwMTR9.e5psJvm0vZi0RB9y4hliAsabokhUtdTeVFpd92kj5dFc5aTTox5MZhSh5jgDEXoYaPxV4jVlEN1TOqRnoYAk_g"
            });
        console.log(result);
    } catch (error) {
        console.log("Find tickets API error: " + error);
    }
    return result;
};


export const showAllTicketFinished = async () => {
    let result = null;
    try {
        result = await axios.get(
            `${BEST_TICKET_API}tickets`);
        console.log(result);
    } catch (error) {
        console.log("Find tickets API error: " + error);
    }
    return result;
};

