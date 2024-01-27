import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    getAllBookingsByEventId, getAllBookingsByKeyword, selectAllBookingsByEventId
} from '../../features/BookingSlice.js';
import {useNavigate, useParams} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import {ImSearch} from 'react-icons/im';
import {MdEmail} from "react-icons/md";
import {useFormatDate} from "../../ultility/customHook/useFormatDate.js";
import {useFormatCurrency} from "../../ultility/customHook/useFormatCurrency.js";

const BookingManagerOrderTable = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const totalPages = useSelector(state => state.booking.totalPages);
    const bookings = useSelector(selectAllBookingsByEventId);
    const eventId1 = useParams().eventId;
    const [currentPage, setCurrentPage] = useState(1);
    const [keyword, setKeyword] = useState('');
    const [selectAllChecked, setSelectAllChecked] = useState(false);
    const [checkboxesChecked, setCheckboxesChecked] = useState([]);
    const [sortBy, setSortBy] = useState('createdAt');
    const [sortDirection, setSortDirection] = useState('desc');
    const {formatCurrency} = useFormatCurrency();

    const handleSortChange = (selectedSortBy) => {
        let newSortDirection = 'desc';
        if (selectedSortBy === 'createdAt_reversed') {
            newSortDirection = 'asc';
        } else if (sortBy === selectedSortBy) {
            newSortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        } else if (selectedSortBy === 'A-Z') {
            newSortDirection = 'asc';
            selectedSortBy = 'customer.fullName';
        } else if (selectedSortBy === 'Z-A') {
            newSortDirection = 'desc';
            selectedSortBy = 'customer.fullName';
        }
        setSortBy(selectedSortBy);
        setSortDirection(newSortDirection);

        dispatch(getAllBookingsByEventId({eventId: eventId1, currentPage: currentPage - 1}, {
            sortBy: selectedSortBy, sortDirection: newSortDirection
        }));
    };

    // useEffect(() => {
    //     dispatch(getAllBookings(currentPage - 1));
    // }, [currentPage]);

    useEffect(() => {
        dispatch(getAllBookingsByEventId({eventId: eventId1, currentPage: currentPage -1}));
    }, [currentPage, dispatch, eventId1]);

    const searchBookingByKeyword = async (e) => {
        e.preventDefault();
        dispatch(getAllBookingsByKeyword({eventId: eventId1, keyword: keyword}));
    };

    const toggleSelectAll = (e) => {
        const checked = e.target.checked;
        setSelectAllChecked(checked);
        if (checked) {
            const allBookingIds = bookings.content.map((booking) => booking.id);
            setCheckboxesChecked(allBookingIds);
        } else {
            setCheckboxesChecked([]);
        }
    };

    const toggleCheckbox = (checkedBookingId) => {
        if (checkboxesChecked.includes(checkedBookingId)) {
            setCheckboxesChecked(prevChecked => prevChecked.filter(id => id !== checkedBookingId));
        } else {
            setCheckboxesChecked(prevChecked => [...prevChecked, checkedBookingId]);
        }
    };

    console.log(bookings)
    let totalAmount = 0;
    return (<>
        <div className="border bg-gray-100 flex py-1">
            <div className="w-1/2 m-5 flex">
                <div>
                    <select className="bg-white" value={sortBy} onChange={(e) => handleSortChange(e.target.value)}>
                        <option value="createdAt">Mới nhất</option>
                        <option value="createdAt_reversed">Cũ nhất</option>
                        <option value="customer.fullName">A-Z</option>
                        <option value="customer.fullName">Z-A</option>
                    </select>
                </div>
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
                    </tr>) : (bookings.content.map((booking) => {
                        const ticketCounts = {};
                        if (booking.bookingDetailResponseList && booking.bookingDetailResponseList.length > 0) {
                            booking.bookingDetailResponseList.forEach((detail) => {
                                if (booking.id === detail.bookingId && detail.ticketInBookingDetailResponses && detail.ticketInBookingDetailResponses.length > 0) {
                                    detail.ticketInBookingDetailResponses.forEach((ticket) => {
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
                        totalAmount += booking.totalAmount;
                        return <tr key={booking.id} className="border border-black border-x-0">
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
                                {Object.keys(ticketCounts).length > 0 ? Object.keys(ticketCounts).map((ticketType, index) => (
                                    <div key={index}>
                                        <div>{ticketCounts[ticketType]}</div>
                                        <div>{ticketType}</div>
                                    </div>)) : <span>No booking details available</span>}
                            </td>
                            <td className="px-4 py-2 border-x-0">
                                {formatCurrency(booking.totalAmount)}
                            </td>
                        </tr>;
                    }))}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="py-5 px-4">{formatCurrency(totalAmount)}</td>
                    </tr>
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
                <div className="rounded-l bg-[#F6F6F6] flex">
                    <div className="m-auto text-center flex">
                        {bookings === null || bookings === "" || bookings === undefined ? (<div></div>) : (<div>
                            <div className="m-2 flex text-xl">
                                <div className="py-1 px-1 text-xl"><MdEmail/></div>
                                <div>Gửi mail đến</div>
                            </div>
                            <div className="m-auto">
                                <button className="border-0 border-black rounded bg-[#C2DEA3]" onClick={() => {
                                    navigate(`/503`)
                                }}>
                                    <div className="m-2">Tất cả</div>
                                </button>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default BookingManagerOrderTable;
