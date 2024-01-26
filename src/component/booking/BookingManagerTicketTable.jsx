import {useDispatch, useSelector} from 'react-redux';
import {getAllBookingsByEventId} from '../../features/BookingSlice';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {ImInfo} from "react-icons/im";
import {useFormatCurrency} from "../../ultility/customHook/useFormatCurrency.js";

const BookingManagerTicketTable = () => {
    const dispatch = useDispatch();
    const bookings = useSelector((state) => state.booking.bookings);
    const eventId = useParams().eventId;
    const [currentPage] = useState(1);
    const {formatCurrency} = useFormatCurrency();

    useEffect(() => {
        dispatch(getAllBookingsByEventId(eventId, currentPage - 1));
    }, [dispatch, eventId, currentPage]);

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
                {bookings === null || bookings === "" || bookings === undefined ? (<tr>
                        <td colSpan="8">No booking available for this event</td>
                    </tr>) : (bookings.content.map((booking, index) => {
                        const detailRows = [];
                        if (booking.bookingDetailResponseList && booking.bookingDetailResponseList.length > 0) {
                            booking.bookingDetailResponseList.forEach((detail) => {
                                if (booking.id === detail.bookingId && detail.ticketInBookingDetailResponses && detail.ticketInBookingDetailResponses.length > 0) {
                                    detail.ticketInBookingDetailResponses.forEach((ticket, ticketIndex) => {
                                        detailRows.push(<tr key={ticket.id}>
                                            {ticketIndex === 0 && (<>
                                                    <td className="border border-black"
                                                        rowSpan={detail.ticketInBookingDetailResponses.length}>
                                                        {index + 1}
                                                    </td>
                                                    <td className="border border-black"
                                                        rowSpan={detail.ticketInBookingDetailResponses.length}>
                                                        {booking.customer.fullName}
                                                    </td>
                                                    <td className="border border-black"
                                                        rowSpan={detail.ticketInBookingDetailResponses.length}>
                                                        {booking.userEmail}
                                                    </td>
                                                    <td className="border border-black"
                                                        rowSpan={detail.ticketInBookingDetailResponses.length}>
                                                        {booking.customer.phoneNumber}
                                                    </td>
                                                    <td className="border border-black"
                                                        rowSpan={detail.ticketInBookingDetailResponses.length}>
                                                        N/A
                                                    </td>
                                                </>)}
                                            <td className="border border-black">{ticket.ticketTypeName}</td>
                                            <td className="border border-black">{ticket.ticketTypePrice}</td>
                                            {ticketIndex === 0 && (<td className="border border-black"
                                                                       rowSpan={detail.ticketInBookingDetailResponses.length}>
                                                    {formatCurrency(booking.totalAmount)}
                                                </td>)}
                                        </tr>);
                                    });
                                }
                            });
                        }
                        return detailRows;
                    }))}
                </tbody>
            </table>
        </div>
        <div className="my-2 rounded-l bg-[#F6F6F6] flex">
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