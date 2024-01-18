import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBookingsByEventId, getAllBookingsByKeyword } from '../../features/BookingSlice.js';
import { getAllBookingDetailsByBookingId} from '../../features/BookingDetailSlice.js';
import {useNavigate, useParams} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { ImSearch } from 'react-icons/im';

const BookingManagerOrderTable = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const bookings = useSelector((state) => state.booking.bookings);
    const eventId1 = useParams().eventId;
    const totalPages = useSelector(state => state.event.totalPages);
    const [currentPage, setCurrentPage] = useState(1);
    const [bookingDetails, setBookingDetails] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        if (searchKeyword.trim() !== '') {
            await dispatch(getAllBookingsByKeyword({ eventId: eventId1, keyword: searchKeyword }, currentPage - 1));
        } else {
            await dispatch(getAllBookingsByEventId(eventId1, currentPage - 1));
        }
    };

    useEffect(() => {
        dispatch(getAllBookingsByEventId(eventId1, currentPage - 1));
    }, [dispatch, eventId1, currentPage]);

    const bookingsMemo = React.useMemo(() => {
        return bookings;
    }, [bookings]);

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

    return (
        <>
            <div className="border bg-gray-100 flex py-1">
                <div className="w-1/2 m-1 flex"></div>
                <div className="w-1/2 m-2">
                    <form className="text-right mr-2" onSubmit={(e) => handleSearch(e)}>
                        <input
                            className="bg-white"
                            type="text"
                            value={searchKeyword}
                            onChange={(e) => setSearchKeyword(e.target.value)}
                            placeholder="Name/Email/PhoneNumber"
                        />
                        <button onClick={handleSearch} className="p-3">
                            <ImSearch />
                        </button>
                    </form>
                </div>
            </div>
            <div className="my-2 bg-white rounded-lg shadow-md">
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
                        {bookings.length === 0 || false ? (
                            <tr>
                                <td colSpan="4">No booking available for this event</td>
                            </tr>
                        ) : (bookings.map((booking, index) => (
                                <tr key={index} className="border border-black border-x-0">
                                    <th className="px-4 py-2 text-left border-b border-black">
                                        <input type="checkbox"/>
                                    </th>
                                    <td className="px-4 py-2 border-x-0">
                                        {booking.customer.fullName}
                                        <br/>
                                        {booking.userEmail}
                                        <br/>
                                        {booking.customer.phoneNumber}
                                        <br/>
                                        Ordered at {booking.createdAt}
                                    </td>
                                    <td className="px-4 py-2 border-x-0">
                                        {bookingDetails && bookingDetails.length > 0 ? (
                                            <>
                                                {bookingDetails.map((detail) =>
                                                    detail.data.map((detailData) => {
                                                        let ticketCount = 0;
                                                        return detailData.ticketInBookingDetailResponses.map((ticket, index) => {
                                                            if (detailData.booking.id === booking.id) {
                                                                if (ticket.bookingDetail.id !== detailData.id) {
                                                                    return <div key={index}></div>;
                                                                } else {
                                                                    ticketCount++;
                                                                    return (
                                                                        <div key={index}>
                                                                            <span>{ticketCount}</span>
                                                                            <br/>
                                                                            <span>{ticket.ticketTypeName}</span>
                                                                            <br/>
                                                                            {/* Render other ticket properties */}
                                                                        </div>
                                                                    );
                                                                }
                                                            }
                                                        });
                                                    })
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
                            ))
                        )}
                        </tbody>
                    </table>
                    <div className="flex items-center justify-center h-20">
                        <Stack spacing={2}>
                            <Pagination
                                count={parseInt(totalPages) || Math.ceil(bookings.length / 10)}
                                color="primary"
                                page={currentPage}
                                onChange={(event, value) => setCurrentPage(value)}
                            />
                        </Stack>
                    </div>
                    <div className="rounded-l bg-[#F6F6F6] flex">
                        <div className="m-auto text-center flex">
                            {bookings.length === undefined ? (
                                <div></div>
                            ) : (
                                <div>
                                    <div className="m-3">
                                        Gửi mail đến
                                    </div>
                                    <div className="m-auto">
                                        <button className="border-0 border-black rounded bg-[#C2DEA3]" onClick={() => {navigate(`/404`)}}>
                                            <div className="m-2">Tất cả</div>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingManagerOrderTable;