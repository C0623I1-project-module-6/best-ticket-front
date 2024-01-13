import {CiSearch} from "react-icons/ci";
import BookingManagerTable from "./BookingManagerTable.jsx";
import BookingManagerSidebar from "./BookingManagerSidebar.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getEventById} from "../../features/EventSlice.js";

export function BookingManager() {
    const dispatch = useDispatch();
    const event = useSelector((state) => state.event.events);
    const eventId = useParams().eventId;
    useEffect(() => {
        dispatch(getEventById(eventId))
    }, [dispatch, eventId]);

    return (
        <>
            <div className="flex text-black">
                <div>
                    <BookingManagerSidebar/>
                </div>
                <div className="w-full bg-white">
                    <div className="w-[80%] mx-[10%] my-[5%]">
                        <div className="w-[80%] text-2xl">{event.name}</div>
                        <div className="w-[80%]">{event.duration}</div>
                        <hr className="my-5 border-0.5px border-black"/>
                        <div className="my-6">
                            <button
                                className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                                Đơn hàng
                            </button>
                            <button className="bg-gray-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Vé
                            </button>
                        </div>
                        <div className="border bg-gray-100 flex py-1">
                            <div className="w-1/2 m-1 flex">
                                <div>
                                    <select className="bg-gray-300 rounded m-2">
                                        <option>Tất cả</option>
                                        <option>Vip</option>
                                        <option>Nhà nghèo</option>
                                    </select>
                                </div>
                                <div>
                                    <select className="bg-gray-300 rounded m-2">
                                        <option>Tất cả đơn hàng</option>
                                        <option>Hoàn tất</option>
                                        <option>Đang xử lý</option>
                                    </select>
                                </div>
                                <div>
                                    <select className="bg-gray-300 rounded m-2">
                                        <option>Mới nhất</option>
                                        <option>Cũ nhất</option>
                                        <option>A - Z</option>
                                        <option>Z - A</option>
                                    </select>
                                </div>
                            </div>
                            <div className="w-1/2 m-2">
                                <form className="text-right mr-2">
                                    <span className="">
                                        <input type="text" value="" className="bg-white"
                                               placeholder="Name/Email/PhoneNumber"/>
                                        <button type="submit" className="px-2"><CiSearch/></button>
                                    </span>
                                </form>
                            </div>
                        </div>
                        <div className="-4 bg-white rounded-lg shadow-md">
                            <BookingManagerTable/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}