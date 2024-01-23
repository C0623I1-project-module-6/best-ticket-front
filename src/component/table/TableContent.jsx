import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    getBookingDetails,
    selectBookings,
    selectBookingsSuccess,
    selectUsers,
    selectUsersSuccess
} from "../../features/AdminSlice.js";
import {GiCancel} from "react-icons/gi";
import {FaCheckCircle} from "react-icons/fa";
import {useFormatDate} from "../../ultility/customHook/useFormatDate.js";
import ModalContent from "../ModalContent.jsx";

function TableContent(props) {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const bookings = useSelector(selectBookings);
    const users = useSelector(selectUsers);
    const selectUserSuccess = useSelector(selectUsersSuccess);
    const selectBookingSuccess = useSelector(selectBookingsSuccess)
    const [showDetail, setShowDetail] = useState(false);
    const [bookingDetailId, setBookingDetailId] = useState()
    useEffect(() => {
        setData(users)
    }, [selectUserSuccess]);
    useEffect(() => {
        setData(bookings)
    }, [selectBookingSuccess]);
    const handleClick = async (value) => {
        if (!showDetail) {
            await dispatch(getBookingDetails(value));
            await setShowDetail(true);
        } else {
            await dispatch(getBookingDetails(value));
            await setShowDetail(false);
        }
    }
    const callbackFunction = (data) => {
        setShowDetail(data);
    }
    if (props.content.param === "users") {
        return (
            <>
                <tbody className="bg-white text-black dark:bg-blue-gray-400 items-center justify-center">
                {
                    data !== null ? data.map((user, index) => (
                            <tr key={index}>
                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-800 ">{index + 1}</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-800 truncate hover:text-clip">{user.username}</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-800 truncate hover:text-clip">{user.email}</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-800 truncate hover:text-clip">{user.customerName === null ? "N/A" : user.customerName}</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-800 truncate hover:text-clip ">
                                    {
                                        user.customerName === null ? <GiCancel className="mx-auto" color={"red"}/> :
                                            <FaCheckCircle className="mx-auto" color={"blue"}/>
                                    }
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-800 truncate hover:text-clip">
                                    {
                                        user.organizerName === null ?
                                            <GiCancel className="mx-auto" color={"red"}/> :
                                            <FaCheckCircle className="mx-auto" color={"blue"}/>
                                    }
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-800 truncate hover:text-clip">
                                    {
                                        user.isActivated ? <button type="button"
                                                                   className="btn btn-outline btn-sm btn-active btn-info">Active
                                        </button> : <button type="button"
                                                            className="btn btn-outline btn-sm btn-disabled btn-info dark:btn-accent">Inactive
                                        </button>
                                    }
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-800 ">
                                    <button type="button" className="btn btn-outline btn-sm btn-warning">Edit
                                    </button>
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-800 ">
                                    <button type="button" className="btn btn-outline btn-sm btn-error">Delete
                                    </button>
                                </td>
                            </tr>
                        )) :
                        <tr className="text-center">
                            <td><span className="loading loading-spinner text-primary"></span></td>
                            <td><span className="loading loading-spinner text-primary"></span></td>
                            <td><span className="loading loading-spinner text-primary"></span></td>
                            <td><span className="loading loading-spinner text-primary"></span></td>
                            <td><span className="loading loading-spinner text-primary"></span></td>
                            <td><span className="loading loading-spinner text-primary"></span></td>
                        </tr>
                }
                </tbody>
            </>
        )
    }
    if (props.content.param === "bookings") {
        return (
            <>
                <ModalContent
                    parentCallback={callbackFunction}
                    dataFromParent={showDetail}
                />
                <tbody className="bg-white dark:bg-blue-gray-400 items-center justify-center">
                {
                    data !== null ? data.map((booking, index) => (
                            <tr key={index}>
                                <td className="px-4 py-3 whitespace text-sm font-medium text-gray-800">{index + 1}</td>
                                <td className="px-4 py-3 whitespace text-sm font-medium text-gray-800 truncate hover:text-clip">{useFormatDate(booking.createdAt)}</td>
                                <td className="px-4 py-3 whitespace text-sm font-medium text-gray-800 truncate hover:text-clip">
                                    {booking.customerName}
                                </td>

                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-800 truncate hover:text-clip">
                                    {
                                        booking.totalAmount
                                    }
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-800 truncate hover:text-clip">
                                    {
                                        booking.status
                                    }
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-800 truncate hover:text-clip">
                                    <button type="button" className="btn btn-outline btn-sm btn-info"
                                            onClick={() => handleClick(booking.id)}

                                    >Detail
                                    </button>
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-800 truncate hover:text-clip">
                                    <button type="button" className="btn btn-outline btn-sm btn-warning">Edit
                                    </button>
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-800 truncate hover:text-clip">
                                    <button type="button" className="btn btn-outline btn-sm btn-error">Delete
                                    </button>
                                </td>
                            </tr>
                        )) :
                        <tr className="text-center">
                            <td><span className="loading loading-spinner text-primary"></span></td>
                            <td><span className="loading loading-spinner text-primary"></span></td>
                            <td><span className="loading loading-spinner text-primary"></span></td>
                            <td><span className="loading loading-spinner text-primary"></span></td>
                            <td><span className="loading loading-spinner text-primary"></span></td>
                            <td><span className="loading loading-spinner text-primary"></span></td>
                        </tr>
                }
                </tbody>
            </>
        )
    }
}

export default TableContent;
