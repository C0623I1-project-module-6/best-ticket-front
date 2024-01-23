import {useDispatch, useSelector} from 'react-redux';
import {getAllBookingsByEventId} from '../../features/BookingSlice';
import {getAllBookingDetailsByBookingId} from '../../features/BookingDetailSlice';
import {useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {ImInfo} from "react-icons/im";

const BookingManagerTicketTable = () => {
    const dispatch = useDispatch();
    const bookings = useSelector((state) => state.booking.bookings);
    const eventId = useParams().eventId;
    const [bookingDetails, setBookingDetails] = useState([]);
    const [currentPage] = useState(1);

    const bookingsMemo = React.useMemo(() => {
        return bookings;
    }, [bookings]);

    useEffect(() => {
        dispatch(getAllBookingsByEventId(eventId, currentPage - 1));
    }, [dispatch, eventId, currentPage]);

    useEffect(() => {
        const fetchData = async () => {
            const promises = bookingsMemo
                .filter((booking) => !booking.bookingDetails)
                .map((booking) => dispatch(getAllBookingDetailsByBookingId(booking.id)));

            const results = await Promise.all(promises);
            const updatedBookingDetails = results.map((data) => data.payload); // Extracting payload from the results

            setBookingDetails(updatedBookingDetails);
        };

        if (bookingsMemo.length > 0) {
            setBookingDetails([]); // Clear the booking details state
            fetchData().then(() => {
                console.log('Data fetched successfully');
            });
        }
    }, [bookingsMemo, dispatch]);

    return (<>
        <div className="table-container max-h-96 overflow-y-auto">
            <table className="w-full text-left border border-black">
                <thead className="border border-black">
                <tr className="text-center bg-[#C2DEA3]">
                    <th className="p-2 border border-black">No.</th>
                    <th className="p-2 border border-black">Họ và Tên</th>
                    <th className="p-2 border border-black">Email</th>
                    <th className="p-2 border border-black">Điện thoại</th>
                    <th className="p-2 border border-black">Hình thức thanh toán</th>
                    <th className="p-2 border border-black">Loại vé</th>
                    <th className="p-2 border border-black">Giá vé</th>
                    <th className="p-2 border border-black">Số tiền</th>
                </tr>
                </thead>

                <tbody>
                {bookings.length === 0 || bookings.length === undefined ? (<tr>
                    <td colSpan="4">No booking available for this event</td>
                </tr>) : (bookings.map((booking, index) => {
                    const count = index + 1;
                    return (<>
                        {bookingDetails && bookingDetails.length > 0 ? (bookingDetails.map((detail) => detail.data.map((detailData) => {
                            return detailData.ticketInBookingDetailResponses.map((ticket, index1) => {
                                if (detailData.booking.id === booking.id) {
                                    if (ticket.bookingDetail.id !== detailData.id) {
                                        return null; // Use null instead of <div></div> for an empty element
                                    } else {
                                        return (<React.Fragment
                                            key={index1}> {/* Use React.Fragment instead of empty tags <> </> */}
                                            <tr key="index">
                                                <td className="p-2 border border-black"
                                                    rowSpan={bookings.length}>{count}</td>
                                                <td className="p-2 border border-black bg-gray-200">{booking.customer.fullName}</td>
                                                <td className="p-2 border border-black">{booking.userEmail}</td>
                                                <td className="p-2 border border-black bg-gray-200">{booking.customer.phoneNumber}</td>
                                                <td className="p-2 border border-black">N/A</td>
                                                <td className="p-2 border border-black bg-gray-200">{ticket.ticketTypeName}</td>
                                                <td className="p-2 border border-black">{ticket.ticketTypePrice}</td>
                                                <td className="p-2 border border-black bg-gray-200">{booking.totalAmount}</td>
                                            </tr>
                                        </React.Fragment>);
                                    }
                                }
                                return null; // Add a return statement for the outer map functions
                            });
                        }))) : (<td colSpan="2">No booking details available</td>)}
                    </>);
                }))}
                </tbody>
            </table>
        </div>
        <div className="rounded-l bg-[#F6F6F6] flex">
            <div className="m-auto text-center flex">
                <div className="my-2"><ImInfo/></div>
                <div className="my-auto">
                    Thông tin của khách chọn hình thức giao vé và thu tiền tận nơi sẽ được cập nhật sau khi khách
                    thanh
                    toán xong
                </div>
            </div>
        </div>
    </>);
};

export default BookingManagerTicketTable;