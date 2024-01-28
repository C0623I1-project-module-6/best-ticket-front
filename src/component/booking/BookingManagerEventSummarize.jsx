import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {getEventById} from "../../features/EventSlice.js";
import UserFooter from "../footer/UserFooter.jsx"

const BookingManagerEventSummarize = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const event = useSelector((state) => state.event.event);
    const eventId = useParams().eventId;

    useEffect(() => {
        dispatch(getEventById(eventId))
    }, [dispatch, eventId, navigate]);


    return (<>
        <div>
            <UserFooter/>
        </div>
    </>)
};


export default BookingManagerEventSummarize;