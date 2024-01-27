import BookingManagerOrderTable from "./BookingManagerOrderTable.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getEventById} from "../../features/EventSlice.js";
import BookingManagerTicketTable from "./BookingManagerTicketTable.jsx";
import UserFooter from "../footer/UserFooter.jsx"

export function BookingManagerEventBookings() {
    const dispatch = useDispatch();
    const event = useSelector((state) => state.event.event);
    const eventId = useParams().eventId;

    useEffect(() => {
        dispatch(getEventById(eventId))
    }, [dispatch, eventId]);

    const [activeTab, setActiveTab] = useState("orders");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (<>
            <div className="w-full bg-white">
                <div className="w-[80%] mx-[10%] my-[5%] text-black">
                    <div className="w-[80%] text-2xl">{event !== null ? event.name : <div>Loading...</div>}</div>
                    <div className="w-[80%]">{event !== null ? event.duration: <div>Loading...</div>}</div>
                    <hr className="my-5 border-0.5px border-black"/>
                    <div className="my-6">
                        <button
                            className={`${activeTab === "orders" ? "bg-black" : "bg-gray-400"} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2`}
                            onClick={() => handleTabClick("orders")}
                        >
                            Đơn hàng
                        </button>
                        <button
                            className={`${activeTab === "tickets" ? "bg-black" : "bg-gray-400"} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
                            onClick={() => handleTabClick("tickets")}
                        >
                            Vé
                        </button>
                    </div>
                    {activeTab === "orders" ? <BookingManagerOrderTable/> : <BookingManagerTicketTable/>}
                </div>
                <div>
                    <UserFooter/>
                </div>
            </div>
        </>)
}