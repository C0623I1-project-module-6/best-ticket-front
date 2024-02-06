import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {getEventById, selectEventById} from "../../features/EventSlice.js";
import UserFooter from "../footer/UserFooter.jsx"
import {selectUserLogin} from "../../features/user/UserSlice.js";
import {SlLocationPin} from "react-icons/sl";
import logo from "../../assets/img/logo/logo-auth-header-light.svg";
import {useFormatCurrency} from "../../ultility/customHook/useFormatCurrency.js";

const BookingManagerEventSummarize = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const event = useSelector(selectEventById);
    const eventId = useParams().eventId;
    const {formatCurrency} = useFormatCurrency();

    useEffect(() => {
        dispatch(getEventById(eventId))
    }, [dispatch, eventId, navigate]);

    const user = useSelector(selectUserLogin);

    return (
        <>
            {user ? (<>
                <div className="mt-16 mb-10 mx-[10%] border border-gray-300 rounded-xl text-black">
                    <div className="flex">
                        <div className="w-1/6 m-10 pl-5">
                            <div className="flex items-center gap-3 font-semibold dark:text-white">
                                <img src={logo} alt="" className="h-[75px] w-[100px] m-0 cursor-pointer  "
                                     onClick={() => navigate("/")}/>
                            </div>
                        </div>
                        <div className="w-3/6 my-14">
                            <div className="text-xl pb-2">{event !== null ? event.name : <div>Loading...</div>}</div>
                            <div>{event !== null ? (
                                    <div className="flex">
                                        <div className="pr-1"><SlLocationPin/></div>
                                        <div>{event.location.address}, {event.location.district}, {event.location.province} </div>
                                    </div>
                                ) :
                                <div>Loading...</div>}</div>
                        </div>
                        <div className="m-14">
                            <button className="border rounded-xl bg-gray-200 shadow shadow-black" onClick={() => {
                                navigate(`/checkin-app`)
                            }}>
                                <div className="m-2">Check-in</div>
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#F1F1F1] mb-5 mx-16 flex">
                        <div className="p-2">Hiển thị</div>
                        <div className="py-2">
                            <select className="bg-white">
                                <option>01/2024</option>
                                <option>02/2024</option>
                            </select>
                        </div>
                        <div className="px-2 py-2">
                            <select className="bg-white">
                                <option>01/2024</option>
                                <option>02/2024</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mb-16 mx-[10%] bg-gray-300 border rounded-xl text-black">
                    <div className="flex">
                        <div className="p-5 text-xl w-1/2">Tổng thu nhập</div>
                        <div className="p-5 text-xl text-green-400 w-1/2">{formatCurrency(0)}</div>
                    </div>
                    <div className="flex">
                        <div className="py-5 pl-12 text-xl w-1/2">Vé đã thanh toán</div>
                        <div className="p-5 text-xl w-1/2">{formatCurrency(0)}</div>
                    </div>
                    <div className="flex">
                        <div className="py-5 pl-12 text-xl w-1/2">Mức phí</div>
                        <div className="p-5 text-xl w-1/2">N/A</div>
                    </div>
                    <div className="flex">
                        <div className="py-5 pl-12 text-xl w-1/2">Phí dịch vụ</div>
                        <div className="p-5 text-xl w-1/2">{formatCurrency(0)}</div>
                    </div>
                </div>
                <div className=""><UserFooter/></div>
            </>) : (navigate('/'))}
        </>
    );
};


export default BookingManagerEventSummarize;