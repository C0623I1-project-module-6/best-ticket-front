import {useDispatch, useSelector} from "react-redux";
import {getEventById, selectEventById} from "../../features/EventSlice.js";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

const EventDetail = () => {
    const dispatch = useDispatch();
    const param = useParams();
    const event = useSelector(selectEventById)
    const showEventById = async () => {
        dispatch(getEventById(param));
    }

    useEffect(() => {
        showEventById(param);
    }, []);
    return (
        <>
            <div>ahiiii</div>
        </>
    )
}
export default EventDetail;