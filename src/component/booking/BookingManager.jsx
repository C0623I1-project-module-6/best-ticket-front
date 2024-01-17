import BookingManagerOrderTable from "./BookingManagerOrderTable.jsx";
import BookingManagerSidebar from "./BookingManagerSidebar.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getEventById} from "../../features/EventSlice.js";
import BookingManagerTicketTable from "./BookingManagerTicketTable.jsx";
import UserFooter from "../footer/UserFooter.jsx"

export function BookingManager() {
    const dispatch = useDispatch();
    const event = useSelector((state) => state.event.events);
    const eventId = useParams().eventId;
    useEffect(() => {
        dispatch(getEventById(eventId))
    }, [dispatch, eventId]);

    const [activeTab, setActiveTab] = useState("order");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="flex">
                <div className="w-[42%] text-white">
                    <BookingManagerSidebar/>
                </div>
                <div className="w-full bg-white">
                    <div className="w-[80%] mx-[10%] my-[5%] text-black">
                        <div className="w-[80%] text-2xl">{event.name}</div>
                        <div className="w-[80%]">{event.duration}</div>
                        <hr className="my-5 border-0.5px border-black"/>
                        <div className="my-6">
                            <button
                                className={`${
                                    activeTab === "order" ? "bg-black" : "bg-gray-400"
                                } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2`}
                                onClick={() => handleTabClick("order")}
                            >
                                Đơn hàng
                            </button>
                            <button
                                className={`${
                                    activeTab === "tickets" ? "bg-black" : "bg-gray-400"
                                } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
                                onClick={() => handleTabClick("tickets")}
                            >
                                Vé
                            </button>
                        </div>
                        {/* Conditional rendering based on activeTab */}
                        {activeTab === "order" && <BookingManagerOrderTable/>}
                        {activeTab === "tickets" && <BookingManagerTicketTable/>}
                    </div>
                    <div>
                        <UserFooter/>
                    </div>
                </div>
            </div>

        </>
    )
}