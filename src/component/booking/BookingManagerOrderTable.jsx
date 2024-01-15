import {useDispatch, useSelector} from 'react-redux';
import {getAllBookingsByEventId} from '../../features/BookingSlice.js';
import {useParams} from 'react-router-dom';
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import React, {useEffect, useState} from "react";
import {getAllBookingDetailsByBookingId} from "../../features/BookingDetailSlice.js";
import {CiSearch} from "react-icons/ci";

const sortingOptions = [
    { label: "Mới nhất", value: "newest" },
    { label: "Cũ nhất", value: "oldest" },
    { label: "A - Z", value: "az" },
    { label: "Z - A", value: "za" },
];

const BookingManagerOrderTable = () => {
    const dispatch = useDispatch();
    const bookings = useSelector((state) => state.booking.bookings);
    const eventId1 = useParams().eventId;
    const totalPages = useSelector(state => state.event.totalPages);
    const [currentPage, setCurrentPage] = useState(1);
    const [bookingDetails, setBookingDetails] = useState([])
    const [selectedSorting, setSelectedSorting] = useState("");

    const handleSortingChange = (event) => {
        setSelectedSorting(event.target.value);
        // Perform the sorting operation based on the selected option
        // You can add your sorting logic here
        switch (event.target.value) {
            case "newest":
                // Sort by newest
                break;
            case "oldest":
                // Sort by oldest
                break;
            case "az":
                // Sort A - Z
                break;
            case "za":
                // Sort Z - A
                break;
            default:
                // Handle default case
                break;
        }
    };

    const bookingsMemo = React.useMemo(() => {
        return bookings;
    }, [bookings]);

    useEffect(() => {
        dispatch(getAllBookingsByEventId(eventId1, currentPage - 1));
    }, [dispatch, eventId1, currentPage]);

    useEffect(() => {
        const fetchData = async () => {
            const promises = bookingsMemo
                .filter(booking => !booking.bookingDetails)
                .map(booking => dispatch(getAllBookingDetailsByBookingId(booking.id)));

            const results = await Promise.all(promises);
            const updatedBookingDetails = results.map(data => data.payload); // Extracting payload from the results

            setBookingDetails(updatedBookingDetails);
        };

        if (bookingsMemo.length > 0) {
            setBookingDetails([]); // Clear the booking details state
            fetchData().then(() => {
                console.log('Data fetched successfully');
            });
        }
    }, [bookingsMemo, dispatch]);

    console.log(bookingDetails)

    return (
        <>
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
                            <option value="">Tất cả đơn hàng</option>
                            {bookings.map((booking, index) => (
                                <React.Fragment key={index}>
                                    <option value="ACTIVE" selected={booking.status === "ACTIVE"}>
                                        Đang hiệu lực
                                    </option>
                                    <option value="PENDING" selected={booking.status === "PENDING"}>
                                        Đang xử lý
                                    </option>
                                    <option value="INACTIVE" selected={booking.status === "INACTIVE"}>
                                        Không còn hiệu lực
                                    </option>
                                </React.Fragment>
                            ))}
                        </select>
                    </div>
                    <div>
                        <select
                            className="bg-gray-300 rounded m-2"
                            value={selectedSorting}
                            onChange={handleSortingChange}
                        >
                            {sortingOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
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
                <div className="p-4">
                    <table className="w-full mt-4">
                        <thead>
                        <tr className="border-x-0">
                            <th className="px-4 py-2 text-left border-b border-black">
                                <input type="checkbox" className="bg-white"/>
                            </th>
                            <th className="px-4 py-2 text-left border-b border-black">ĐƠN HÀNG</th>
                            <th className="px-4 py-2 text-left border-b border-black">VÉ</th>
                            <th className="px-4 py-2 text-left border-b border-black">TỔNG CỘNG (VNĐ)</th>
                        </tr>
                        </thead>
                        <tbody>
                        {bookings.map((booking, index) => (
                            <tr key={index} className="border border-black border-x-0">
                                <th className="px-4 py-2 text-left border-b border-black">
                                    <input type="checkbox"/>
                                </th>
                                <td className="px-4 py-2 border-x-0">
                                    {booking.customer.fullName}
                                    <br/>
                                    {booking.customer.phoneNumber}
                                    <br/>
                                    Ordered at {booking.createdAt}
                                </td>
                                <td className="px-4 py-2 border-x-0">
                                    {bookingDetails && bookingDetails.length > 0 ? (
                                        <>
                                            {bookingDetails.flatMap((detail) =>
                                                detail.data.flatMap((detailData) =>
                                                    detailData.tickets.map((ticket, index) => {
                                                        return (
                                                            <div key={index}>
                                                                <div>{bookingDetails.flatMap((detail) =>
                                                                    detail.data.flatMap((detailData) =>
                                                                        detailData.tickets
                                                                    )
                                                                ).length}</div>
                                                                <span>{ticket.seat}</span>

                                                                {/* Render other ticket properties */}
                                                            </div>
                                                        );
                                                    })
                                                )
                                            )}
                                        </>
                                    ) : (
                                        <span>No booking details available</span>
                                    )}
                                </td>
                                <td className="px-4 py-2 border-x-0">
                                    {booking.totalAmount}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div className="flex items-center justify-center h-20">
                        <Stack
                            spacing={2}
                        >
                            <Pagination
                                count={totalPages || 0}
                                color="primary"
                                page={currentPage}
                                onChange={(event, value) => setCurrentPage(value)}
                            />
                        </Stack>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingManagerOrderTable;