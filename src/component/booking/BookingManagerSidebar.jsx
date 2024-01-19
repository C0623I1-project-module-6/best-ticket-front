import {RiGroupLine} from "react-icons/ri";
import {BsGraphUpArrow} from "react-icons/bs";
import {GiReturnArrow} from "react-icons/gi";
import {GrAnnounce} from "react-icons/gr";
import {BiSolidDiscount} from "react-icons/bi";
import {GrUserManager} from "react-icons/gr";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const BookingManagerSidebar = () => {
    const eventId = useParams().eventId;
    const navigate = useNavigate();
    return (
        <div className="fixed w-[26%] border-r shadow-md">
            <nav className="bg-[#303B46] h-screen">
                <ul className="text-left">
                    <li>
                        <div className="text-center p-2 flex bg-[#262F38]">
                            <div className="w-1/2 text-left ml-6">
                                <a href="/">
                                    <img src="/src/assets/img/logo/logo-auth-header-light.svg" alt=""
                                         className="h-[50px] w-[50px] cursor-pointer bg-white"/>
                                </a>
                            </div>
                            <div className="w-1/2 text-right m-3 mr-8">User</div>
                        </div>
                    </li>
                    <li>
                        <a onClick={() => {navigate(`/my-event/legal`)}} className="block p-5 rounded hover:bg-indigo-600 hover:text-white">
                            <div className="flex">
                                <div className="m-1"><GiReturnArrow/></div>
                                Quay lại trang sự kiện của tôi
                            </div>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => {navigate(`/404`)}}
                           className="block p-5 rounded hover:bg-indigo-600 hover:text-white">
                            <div className="flex">
                                <div className="m-1"><BsGraphUpArrow/></div>
                                Tổng kết
                            </div>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => {navigate(`/my-event/event/${eventId}/RSVPs/bookings`)}}
                           className="block p-5 rounded hover:bg-indigo-600 hover:text-white">
                            <div className="flex">
                                <div className="m-1"><RiGroupLine/></div>
                                RSVPs
                            </div>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => {navigate(`/404`)}}
                           className="block p-5 rounded hover:bg-indigo-600 hover:text-white">
                            <div className="flex">
                                <div className="m-1"><GrAnnounce/></div>
                                Quảng bá
                            </div>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => {navigate(`/404`)}}
                           className="block p-5 rounded hover:bg-indigo-600 hover:text-white">
                            <div className="flex">
                                <div className="m-1"><BiSolidDiscount/></div>
                                Mã giảm giá
                            </div>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => {navigate(`/my-event/event/${eventId}/moderators`)}}
                           className="block p-5 rounded hover:bg-indigo-600 hover:text-white">
                            <div className="flex">
                                <div className="m-1"><GrUserManager/></div>
                                Người quản lý
                            </div>
                        </a>
                    </li>
                </ul>
                <div className="h-screen">
                    <div className="text-center flex">
                        <a onClick={() => {navigate(`/404`)}}
                            className="w-full border-none rounded-xl bg-[#57616A] m-10 my-[70%]">
                            <div className="m-3">Câu hỏi thường gặp</div>
                        </a>
                    </div>
                </div>

            </nav>
        </div>);
};

export default BookingManagerSidebar;