import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    getAllBookingsByEventId,
    getAllBookingsByKeyword,
    selectAllBookingsByEventId
} from '../../features/BookingSlice.js';
import {getAllBookingDetailsByBookingId} from '../../features/BookingDetailSlice.js';
import {useNavigate, useParams} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import {ImSearch} from 'react-icons/im';
import {useFormatDate} from "../../ultility/customHook/useFormatDate.js";

const BookingManagerOrderTable = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const totalPages = useSelector(state => state.event.totalPages);
    const bookings = useSelector(selectAllBookingsByEventId);
    console.log(bookings)
    const eventId1 = useParams().eventId;
    const [currentPage, setCurrentPage] = useState(1);
    const [bookingDetails, setBookingDetails] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [selectAllChecked, setSelectAllChecked] = useState(false);
    const [checkboxesChecked, setCheckboxesChecked] = useState([]);

    useEffect(() => {
        dispatch(getAllBookingsByEventId(eventId1, currentPage - 1));
    }, [dispatch, eventId1, currentPage]);

    const searchBookingByKeyword = async (e) => {
        e.preventDefault();
        dispatch(getAllBookingsByKeyword({eventId: eventId1, keyword: keyword}));
    };

    const bookingsMemo = React.useMemo(() => {
        return (bookings === null || bookings === undefined ? []: bookings);
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
    }, [bookings, bookingsMemo, dispatch])

    const toggleSelectAll = (e) => {
        setSelectAllChecked(e.target.checked);
        if (e.target.checked) {
            const allBookingIds = bookings.map((booking) => booking.id);
            setCheckboxesChecked(allBookingIds);
        } else {
            setCheckboxesChecked([]);
        }
    };

    const toggleCheckbox = (checkedBookingId) => {
        if (checkboxesChecked.includes(checkedBookingId)) {
            setCheckboxesChecked(checkboxesChecked.filter((id) => id !== checkedBookingId));
        } else {
            setCheckboxesChecked([...checkboxesChecked, checkedBookingId]);
        }
    };

    return (<>
        <div className="border bg-gray-100 flex py-1">
            <div className="w-1/2 m-1 flex">

            </div>
            <div className="w-1/2 m-2">
                <form className="text-right mr-2" onSubmit={searchBookingByKeyword}>
                    <input
                        className="bg-white"
                        type="text"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        placeholder="Name/Email/PhoneNumber"
                    />
                    <button type="submit" className="p-3">
                        <ImSearch/>
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
                            <input
                                type="checkbox"
                                className="bg-white"
                                checked={selectAllChecked}
                                onChange={toggleSelectAll}
                            />
                        </th>
                        <th className="px-4 py-2 text-left border-b border-black">ĐƠN HÀNG</th>
                        <th className="px-4 py-2 text-left border-b border-black">VÉ</th>
                        <th className="px-4 py-2 text-left border-b border-black">TỔNG CỘNG (VNĐ)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bookings === null || bookings === "" || bookings === undefined ? (<tr>
                        <td colSpan="4">No booking available</td>
                    </tr>)
                        :
                        (bookings.map((booking, index) => {
                        const ticketCounts = {}; // Object to store ticket counts
                        if (bookingDetails && bookingDetails.length > 0) {
                            bookingDetails.forEach((detail) => {
                                if (detail.data && detail.data.length > 0) {
                                    detail.data.forEach((detailData) => {
                                        if (detailData.ticketInBookingDetailResponses && detailData.ticketInBookingDetailResponses.length > 0) {
                                            detailData.ticketInBookingDetailResponses.forEach((ticket) => {
                                                const ticketTypeName = ticket.ticketTypeName;
                                                if (ticketCounts[ticketTypeName]) {
                                                    ticketCounts[ticketTypeName] += 1;
                                                } else {
                                                    ticketCounts[ticketTypeName] = 1;
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                        return (<tr key={index} className="border border-black border-x-0">
                            <th className="px-4 py-2 text-left border-b border-black">
                                <input
                                    type="checkbox"
                                    className="bg-white"
                                    checked={checkboxesChecked.includes(booking.id)}
                                    onChange={() => toggleCheckbox(booking.id)}
                                />
                            </th>
                            <td className="px-4 py-2 border-x-0">
                                {booking.customer.fullName}
                                <br/>
                                {booking.userEmail}
                                <br/>
                                {booking.customer.phoneNumber}
                                <br/>
                                {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
                                Ordered at {useFormatDate(booking.createdAt)}
                            </td>
                            <td className="px-4 py-2 border-x-0">
                                {Object.keys(ticketCounts).length > 0 ? (Object.keys(ticketCounts).map((ticketType, index) => (
                                    <div key={index}>
                                        <span>{ticketCounts[ticketType]}</span>
                                        <br/>
                                        <span>{ticketType}</span>
                                    </div>))) : (<span>No booking details available</span>)}
                            </td>
                            <td className="px-4 py-2 border-x-0">{booking.totalAmount}</td>
                        </tr>);
                    }))}
                    </tbody>
                </table>
                <div className="flex items-center justify-center h-20">
                    <Stack spacing={2}>
                        <Pagination
                            count={totalPages || 0}
                            color="primary"
                            page={currentPage}
                            onChange={(event, value) => setCurrentPage(value)}
                        />
                    </Stack>
                </div>
                <div className="rounded-l bg-[#F6F6F6] flex">
                    {/*<div className="m-auto text-center flex">*/}
                    {/*    {bookings.length === undefined || bookings.length < 0 ? (<div></div>) : (<div>*/}
                    {/*        <div className="m-2 flex text-xl">*/}
                    {/*            <div className="py-1 px-1 text-xl"><MdEmail/></div>*/}
                    {/*            <div>Gửi mail đến</div>*/}
                    {/*        </div>*/}
                    {/*        <div className="m-auto">*/}
                    {/*            <button className="border-0 border-black rounded bg-[#C2DEA3]" onClick={() => {*/}
                    {/*                navigate(`/503`)*/}
                    {/*            }}>*/}
                    {/*                <div className="m-2">Tất cả</div>*/}
                    {/*            </button>*/}
                    {/*        </div>*/}
                    {/*    </div>)}*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    </>);
};

export default BookingManagerOrderTable;
