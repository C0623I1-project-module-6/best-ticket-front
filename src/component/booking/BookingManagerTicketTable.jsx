import {useDispatch, useSelector} from 'react-redux';
import {getAllBookingsByEventId, selectAllBookingsByEventId,} from '../../features/BookingSlice';
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {ImInfo} from "react-icons/im";
import {useFormatCurrency} from "../../ultility/customHook/useFormatCurrency.js";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import {GiCancel} from "react-icons/gi";
import {FaCheckCircle} from "react-icons/fa";
import {RiFileExcel2Fill} from "react-icons/ri";


const BookingManagerTicketTable = () => {
    const dispatch = useDispatch();
    const bookings = useSelector(selectAllBookingsByEventId);
    const eventId1 = useParams().eventId;
    const totalPages = useSelector(state => state.booking.totalPages);
    const [currentPage, setCurrentPage] = useState(1);
    const {formatCurrency} = useFormatCurrency();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllBookingsByEventId({eventId: eventId1, currentPage: currentPage -1}));
    }, [currentPage, dispatch, eventId1]);

    const rowsPerPage = 10;
    const startIndex = (currentPage - 1) * rowsPerPage;
    
    return (<>
        <div className="border bg-gray-100 flex my-6">
            <div className="w-1/2 m-5 flex">
                <div className="mx-1">
                    <button className="border-0 border-black rounded bg-[#C2DEA3]" onClick={() => {
                        navigate(`/404`)
                    }}>
                        <div className="m-2 flex">
                            <div className="p-1"><RiFileExcel2Fill /></div>
                            <div>Tải về file Excel</div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <div className="table-container border border-black max-h-96 overflow-y-auto">
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
                    <th className="p-2 border border-black">Trạng thái thanh toán</th>
                </tr>
                </thead>
                <tbody>
                {bookings === null || bookings === "" || bookings === undefined ? (<tr>
                    <td colSpan="9" className="text-center">Chưa có vé nào được bán</td>
                </tr>) : (bookings.content.map((booking, index) => {
                    const detailRows = [];
                    if (booking.bookingDetailResponseList && booking.bookingDetailResponseList.length > 0) {
                        booking.bookingDetailResponseList.forEach((detail) => {
                            if (booking.id === detail.bookingId && detail.ticketInBookingDetailResponses && detail.ticketInBookingDetailResponses.length > 0) {
                                detail.ticketInBookingDetailResponses.forEach((ticket, ticketIndex) => {
                                    detailRows.push(<tr key={ticket.id}>
                                        {ticketIndex === 0 && (<>
                                            <td className="border border-black row-span-2"
                                                rowSpan={detail.ticketInBookingDetailResponses.length}>
                                                {startIndex + index + 1}
                                            </td>
                                            <td className="border border-black"
                                                rowSpan={detail.ticketInBookingDetailResponses.length}>
                                                {booking.customer.fullName}
                                            </td>
                                            <td className="border border-black"
                                                rowSpan={detail.ticketInBookingDetailResponses.length}>
                                                {booking.customer.receiptEmail}
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
                                        <td className="border border-black">
                                        {ticket.status === "UNPAID" || ticket.status === "Fail" || ticket.status === null ?
                                            <GiCancel className="mx-auto" color={"red"}/> : ticket.status === "PENDING" || ticket.status === "All"?
                                                <FaCheckCircle className="mx-auto"
                                                               color={"orange"}/> : ticket.status === "PAID" || ticket.status === "Success"?
                                                    <FaCheckCircle className="mx-auto" color={"green"}/> : null}
                                    </td>
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
        <div className="flex items-center justify-center h-20">
            {bookings === null || bookings === "" || bookings === undefined ? (<div></div>) : (<Stack
                spacing={2}
            >
                <Pagination
                    count={totalPages || 0}
                    color="primary"
                    page={currentPage}
                    onChange={(event, value) => setCurrentPage(value)}
                />
            </Stack>)
            }
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