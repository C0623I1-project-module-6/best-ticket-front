import {RiGroupLine} from "react-icons/ri";
import {BsGraphUpArrow} from "react-icons/bs";
import {GiReturnArrow} from "react-icons/gi";
import {GrAnnounce, GrUserManager} from "react-icons/gr";
import {BiSolidDiscount} from "react-icons/bi";
import {useNavigate, useParams} from "react-router-dom";
import {logoutUser, selectUserLogin, selectUserLogout} from "../../features/user/UserSlice.js";
import {useDispatch, useSelector} from "react-redux";
import avatar from "../../assets/img/User.png";
import {getExistsUsers, selectExistsUsers} from "../../features/user/ExistsUserSlice.js";
import {Avatar, Popover, PopoverContent, PopoverHandler} from "@material-tailwind/react";
import {FaSignOutAlt} from "react-icons/fa";
import {Bounce, toast} from "react-toastify";
import logo from "../../assets/img/logo/logo-auth-header-light.svg";


const BookingManagerSidebar = () => {
    const eventId = useParams().eventId;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(selectUserLogin);
    const userExists = useSelector(selectExistsUsers)
    const userLogout = useSelector(selectUserLogout);

    const logout = () => {
        dispatch(logoutUser(userLogout));
        toast('🦄 Logout success!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        navigate("/404");
    }

    return (<div className="fixed w-[26%] border-r shadow-md">
        <nav className="bg-[#424242] h-screen">
            <ul className="text-left">
                <li>
                    <div className="text-center p-2 flex bg-[#14B981]">
                        <div className="w-1/2 text-left ml-6 my-2">
                            <div className="flex items-center gap-3 font-semibold dark:text-white">
                                <img src={logo} alt="" className="h-[75px] w-[100px] m-0 cursor-pointer  "
                                     onClick={() => navigate("/")}/>
                            </div>
                        </div>
                        {user ? (<div className="w-1/2 text-right mx-3 my-6 mr-8">
                            <Popover placement="bottom-end" dismiss={true}>
                                <PopoverHandler>
                                    <Avatar
                                        size="sm"
                                        alt={avatar}
                                        src={user.avatar}
                                        className="border border-white-500 shadow-xl shadow-green-900/20 ring-4 ring-blue-300"
                                    />
                                </PopoverHandler>
                                <PopoverContent className="w-48 p-1">
                                    <div className="flex-col w-full gap-3">
                                        <div className="flex space-x-2 border-2  items-center justify-start w-full
                                      cursor-pointer" onClick={() => {
                                            dispatch(getExistsUsers())
                                            if (userExists !== null) {
                                                navigate(`/my-ticket/${user.id}`)
                                            }
                                        }}>
                                            <div>Vé đã mua</div>
                                        </div>
                                        <div className="flex space-x-2 border-2 items-center justify-start w-full
                                     cursor-pointer
                                    " onClick={() => {
                                            dispatch(getExistsUsers())
                                            if (userExists !== null) {
                                                navigate(`/profile`)
                                            }
                                        }}>
                                            <div>Hồ sơ cá nhân</div>
                                        </div>
                                        <div className="flex space-x-2 border-2 items-center justify-start w-full
                                     cursor-pointer
                                    " onClick={() => {
                                            dispatch(getExistsUsers())
                                            if (userExists !== null) {
                                                navigate(`/my-event/legal/createdEvent`)
                                            }
                                        }}>
                                            <div>Sự kiện đã tạo</div>
                                        </div>
                                        <div className="flex space-x-2 border-2 items-center justify-start w-full
                                     cursor-pointer
                                    " onClick={() => {
                                            dispatch(getExistsUsers())
                                            if (userExists !== null) {
                                                navigate(`/404`)
                                            }
                                        }}>
                                            <div>Thống kê Pos</div>
                                        </div>
                                        <div className="flex space-x-2   items-center justify-start w-full
                                    border-2 cursor-pointer
                                    "
                                             onClick={logout}>
                                            <div className="w-[20px]">
                                                <FaSignOutAlt/>
                                            </div>
                                            <div>Đăng xuất</div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>) : navigate(`/login`)}
                    </div>
                </li>
                <li>
                    <a onClick={() => {
                        navigate(`/my-event/legal/createdEvent`)
                    }} className="block p-5 rounded hover:bg-indigo-600 hover:text-white">
                        <div className="flex">
                            <div className="m-1 pr-2"><GiReturnArrow/></div>
                            Quay lại trang sự kiện của tôi
                        </div>
                    </a>
                </li>
                <li>
                    <a onClick={() => {
                        navigate(`/my-event/event/${eventId}/summarize`)
                    }}
                       className="block p-5 rounded hover:bg-indigo-600 hover:text-white">
                        <div className="flex">
                            <div className="m-1 pr-2"><BsGraphUpArrow/></div>
                            Tổng kết
                        </div>
                    </a>
                </li>
                <li>
                    <a onClick={() => {
                        navigate(`/my-event/event/${eventId}/RSVPs/bookings`)
                    }}
                       className="block p-5 rounded hover:bg-indigo-600 hover:text-white">
                        <div className="flex">
                            <div className="m-1 pr-2"><RiGroupLine/></div>
                            RSVPs
                        </div>
                    </a>
                </li>
                <li>
                    <a onClick={() => {
                        navigate(`/my-event/event/${eventId}/promote`)
                    }}
                       className="block p-5 rounded hover:bg-indigo-600 hover:text-white">
                        <div className="flex">
                            <div className="m-1 pr-2"><GrAnnounce/></div>
                            Quảng bá
                        </div>
                    </a>
                </li>
                <li>
                    <a onClick={() => {
                        navigate(`/404`)
                    }}
                       className="block p-5 rounded hover:bg-indigo-600 hover:text-white">
                        <div className="flex">
                            <div className="m-1 pr-2"><BiSolidDiscount/></div>
                            Mã giảm giá
                        </div>
                    </a>
                </li>
                <li>
                    <a onClick={() => {
                        navigate(`/my-event/event/${eventId}/moderators`)
                    }}
                       className="block p-5 rounded hover:bg-indigo-600 hover:text-white">
                        <div className="flex">
                            <div className="m-1 pr-2"><GrUserManager/></div>
                            Người quản lý
                        </div>
                    </a>
                </li>
            </ul>
            <div className="h-screen">
                <div className="text-center flex">
                    <a onClick={() => {
                        navigate(`/404`)
                    }}
                       className="w-full border-none rounded-xl bg-[#57616A] m-10 my-[70%]">
                        <div className="m-3">Câu hỏi thường gặp</div>
                    </a>
                </div>
            </div>
        </nav>
    </div>);
};

export default BookingManagerSidebar;
