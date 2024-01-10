import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectBookings, selectBookingsSuccess, selectUsers, selectUsersSuccess} from "../../features/AdminSlice.js";
import {GiCancel} from "react-icons/gi";
import {FaCheckCircle} from "react-icons/fa";

function TableContent(props) {
    const [data, setData] = useState([]);
    const bookings = useSelector(selectBookings);
    const users = useSelector(selectUsers);
    const selectUserSuccess = useSelector(selectUsersSuccess);
    const selectBookingSuccess = useSelector(selectBookingsSuccess)
    useEffect(() => {
        setData(users)
    }, [selectUserSuccess]);
    useEffect(() => {
        setData(bookings)
    }, [selectBookingSuccess]);
    if (props.content.param === "users") {
        return (
            <>
                <tbody className="bg-white dark:bg-blue-gray-400 items-center justify-center">
                {
                    data !== null ? data.map((user, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">{index + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">{user.username}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">{user.customerName === null ? "N/A" : user.customerName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">
                                    {
                                        user.customerName === null ? <GiCancel className="mx-auto" color={"red"}/> :
                                            <FaCheckCircle className="mx-auto" color={"blue"}/>
                                    }
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                    {
                                        user.organizerName === null ?
                                            <GiCancel className="mx-auto" color={"red"}/> :
                                            <FaCheckCircle className="mx-auto" color={"blue"}/>
                                    }
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                    {
                                        user.isActivated ? <button type="button"
                                                                   className="btn btn-outline btn-sm btn-active btn-info">Active
                                        </button> : <button type="button"
                                                            className="btn btn-outline btn-sm btn-disabled btn-info dark:btn-accent">Inactive
                                        </button>
                                    }
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                    <button type="button" className="btn btn-outline btn-sm btn-warning">Edit
                                    </button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
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
                <tbody className="bg-white dark:bg-blue-gray-400 items-center justify-center">
                {
                    data !== null ? data.map((booking, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">{index + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">{booking.createdAt}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">{booking.customerName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">{booking.customerName === null ? "N/A" : booking.customerName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">
                                    {
                                        booking.organizeName
                                    }
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                    {
                                        booking.status
                                    }
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                    <button type="button" className="btn btn-outline btn-sm btn-warning">Edit
                                    </button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
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
