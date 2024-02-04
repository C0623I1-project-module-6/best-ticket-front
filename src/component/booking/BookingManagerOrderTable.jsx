import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    getAllBookingsByEventId, getAllBookingsByKeyword, selectAllBookingsByEventId
} from '../../features/BookingSlice.js';
import {useParams} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import {ImSearch} from 'react-icons/im';
import {MdEmail} from "react-icons/md";
import {useFormatDate} from "../../ultility/customHook/useFormatDate.js";
import {useFormatCurrency} from "../../ultility/customHook/useFormatCurrency.js";
import {GiCancel} from "react-icons/gi";
import {FaCheckCircle} from "react-icons/fa";
import {Modal} from 'antd';
import emailjs from '@emailjs/browser';

const BookingManagerOrderTable = () => {
    const dispatch = useDispatch();
    const totalPages = useSelector(state => state.booking.totalPages);
    const bookings = useSelector(selectAllBookingsByEventId);
    const eventId1 = useParams().eventId;
    const [currentPage, setCurrentPage] = useState(1);
    const [keyword, setKeyword] = useState('');
    const [selectAllChecked, setSelectAllChecked] = useState(false);
    const [emailList, setEmailList] = useState([]);
    const [checkboxesChecked, setCheckboxesChecked] = useState([]);
    const [sortBy, setSortBy] = useState('createdAt');
    const [status, setStatus] = useState('createdAt');
    const {formatCurrency} = useFormatCurrency();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        dispatch(getAllBookingsByEventId({eventId: eventId1, currentPage: currentPage - 1}));
    }, [currentPage, dispatch, eventId1]);

    const searchBookingByKeyword = async (e) => {
        e.preventDefault();
        dispatch(getAllBookingsByKeyword({eventId: eventId1, keyword: keyword, currentPage: currentPage - 1}));
    };

    const handleSortChange = (selectedSortBy) => {
        setSortBy(selectedSortBy);
    };

    const handleStatusChange = (selectedStatus) => {
        setStatus(selectedStatus);
    };

    let sortedBookings = [];

    if (bookings && bookings.content) {
        sortedBookings = [...bookings.content];

        if (sortBy === 'createdAt') {
            sortedBookings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        } else if (sortBy === 'createdAt_reversed') {
            sortedBookings.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        } else if (sortBy === 'customer.fullName') {
            sortedBookings.sort((a, b) => a.customer.fullName.localeCompare(b.customer.fullName));
        } else if (sortBy === 'customer.fullName_reversed') {
            sortedBookings.sort((a, b) => b.customer.fullName.localeCompare(a.customer.fullName));
        }

        if (status === "ACTIVE" || status === "PENDING" || status === "INACTIVE") {
            sortedBookings = sortedBookings.filter(booking => booking.status === status);
        }

    }

    const toggleSelectAll = (e) => {
        const checked = e.target.checked;
        setSelectAllChecked(checked);
        if (checked) {
            const allBookingIds = sortedBookings.map((booking) => booking.id);
            setCheckboxesChecked(allBookingIds);
            setEmailList(sortedBookings.map((booking) => booking.customer.receiptEmail));
            console.log(emailList);
        } else {
            setCheckboxesChecked([]);
            setEmailList([]);
            console.log(emailList);
        }
    };

    const handleToggleAllClick = () => {
        const toggleAllInput = document.querySelector('input[name="toggleAll"]');
        if (toggleAllInput) {
            const changeEvent = new Event('change', {bubbles: true});
            toggleAllInput.checked = true;
            toggleAllInput.dispatchEvent(changeEvent);
            toggleSelectAll(changeEvent);
        }
    };

    const toggleCheckbox = (checkedBookingId) => {
        if (checkboxesChecked.includes(checkedBookingId)) {
            setCheckboxesChecked((prevChecked) => prevChecked.filter((id) => id !== checkedBookingId));
            const selectedBooking = sortedBookings.find((booking) => booking.id === checkedBookingId);
            if (selectedBooking) {
                const selectedEmail = selectedBooking.customer.receiptEmail;
                setEmailList((prevEmailList) => prevEmailList.filter((email) => email !== selectedEmail));
                console.log(emailList);
            }
        } else {
            const selectedBooking = sortedBookings.find((booking) => booking.id === checkedBookingId);
            if (selectedBooking) {
                setCheckboxesChecked((prevChecked) => [...prevChecked, checkedBookingId]);
                const selectedEmail = selectedBooking.customer.receiptEmail;
                if (!emailList.includes(selectedEmail)) {
                    setEmailList((prevEmailList) => [...prevEmailList, selectedEmail]);
                    console.log(emailList);
                }
            } else {
                console.log("Invalid booking ID");
            }
        }
    };
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        sendEmail();
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const form = useRef();

    const sendEmail = () => {
        // e.preventDefault();
        emailjs
            .sendForm('service_99xnbap', 'template_x4164f8', form.current, 'LHVxILU3VnOGyS6nU')
            .then((result) => {
                console.log(result.text);
                window.alert("Email sent successfully!");
            })
            .catch((error) => {
                console.log(error.text);
                window.alert("Email sent failed!");
            });
        setCheckboxesChecked([]);
    };

    let totalAmount = 0;

    return (<>
        <div className="border bg-gray-100 flex py-1">
            <div className="w-1/2 m-5 flex">
                <div>
                    <select className="bg-white border rounded border-black mx-1" value={sortBy}
                            onChange={(e) => handleSortChange(e.target.value)}>
                        <option value="createdAt">Mới nhất</option>
                        <option value="createdAt_reversed">Cũ nhất</option>
                        <option value="customer.fullName">A-Z</option>
                        <option value="customer.fullName_reversed">Z-A</option>
                    </select>
                </div>
                <div>
                    <select className="bg-white border rounded border-black mx-1" value={status}
                            onChange={(e) => handleStatusChange(e.target.value)}>
                        <option value="createdAt">Tất cả đơn hàng</option>
                        <option value="ACTIVE">Đang hiệu lực</option>
                        <option value="PENDING">Đang chờ</option>
                        <option value="INACTIVE">Không còn hiệu lực</option>
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
                                name="toggleAll"
                                className="bg-white"
                                checked={selectAllChecked}
                                onChange={toggleSelectAll}
                            />
                        </th>
                        <th className="py-2 text-center border-b border-black">TRẠNG THÁI</th>
                        <th className="py-2 text-left border-b border-black">ĐƠN HÀNG</th>
                        <th className="py-2 text-center border-b border-black">VÉ</th>
                        <th className="py-2 text-center border-b border-black">TỔNG CỘNG (VNĐ)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bookings === null || bookings === "" || bookings === undefined ? (<tr>
                        <td colSpan="5" className="text-center">Chưa có vé nào được bán</td>
                    </tr>) : (sortedBookings.map((booking) => {
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
                            <td>
                                {booking.status === "INACTIVE" ?
                                    <GiCancel className="mx-auto" color={"red"}/> : booking.status === "PENDING" ?
                                        <FaCheckCircle className="mx-auto"
                                                       color={"orange"}/> : booking.status === "ACTIVE" ?
                                            <FaCheckCircle className="mx-auto" color={"green"}/> : null}
                            </td>
                            <td className="py-2 border-x-0">
                                {booking.customer.fullName}
                                <br/>
                                {booking.customer.receiptEmail}
                                <br/>
                                {booking.customer.phoneNumber}
                                <br/>
                                {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
                                Ordered at {useFormatDate(booking.createdAt)}
                            </td>
                            <td className="py-2 border-x-0 text-center">
                                {Object.keys(ticketCounts).length > 0 ? Object.keys(ticketCounts).map((ticketType, index) => (
                                    <div key={index}>
                                        <div>{ticketCounts[ticketType]}</div>
                                        <div>{ticketType}</div>
                                    </div>)) : <span>No booking details available</span>}
                            </td>
                            <td className="py-2 border-x-0 text-center">
                                {formatCurrency(booking.totalAmount)}
                            </td>
                        </tr>;
                    }))}
                    {bookings === null || bookings === "" || bookings === undefined || sortedBookings.length === 0 ? (
                        <tr></tr>) : (<tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="py-5 text-center">{formatCurrency(totalAmount)}</td>
                    </tr>)}
                    </tbody>
                </table>
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
                    </Stack>)}
                </div>
                <div className="rounded-l bg-[#F6F6F6] flex">
                    <div className="m-auto text-center flex">
                        {bookings === null || bookings === "" || bookings === undefined ? (<div></div>) : (
                            <div className="flex">
                                <div className="my-3 mx-2 flex text-xl">
                                    <div className="py-1 px-1 text-xl"><MdEmail/></div>
                                    <div>Gửi mail đến</div>
                                </div>
                                <div className="mx-1 my-2">
                                    <button
                                        className="border-0 border-black rounded bg-[#C2DEA3]"
                                        onClick={() => {
                                            handleToggleAllClick();
                                            showModal();
                                        }}
                                    >
                                        <div className="m-2">Tất cả</div>
                                    </button>
                                </div>
                                <div className="mx-1 my-2">
                                    {checkboxesChecked.length > 0 && checkboxesChecked.length < bookings.content.length && (
                                        <button className="border-0 border-black rounded bg-[#C2DEA3]"
                                                onClick={showModal}>
                                            <div className="m-2">Đã chọn</div>
                                        </button>)}
                                </div>
                                <Modal
                                    title=""
                                    open={isModalOpen}
                                    onOk={handleOk}
                                    onCancel={handleCancel}
                                >
                                    <section className="bg-white dark:bg-gray-900">
                                        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                                                Gửi Thư
                                            </h2>
                                            <form ref={form} action="#" onSubmit={sendEmail} className="space-y-8">
                                                <div>
                                                    <label htmlFor="email"
                                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                        Email người nhận
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        // readOnly
                                                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                                        placeholder="Nhập email người nhận"
                                                        value={emailList.join(", ")}
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="subject"
                                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                        Tiêu đề
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="subject"
                                                        name="subject"
                                                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                                        placeholder="Nhập tiêu đề"
                                                        required
                                                    />
                                                </div>
                                                <div className="sm:col-span-2">
                                                    <label htmlFor="message"
                                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                                        Nội dung
                                                    </label>
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        rows="6"
                                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                        placeholder="Nhập nội dung..."
                                                    ></textarea>
                                                </div>
                                                <div>
                                                    <button type="submit" className="border border-black">
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </section>
                                </Modal>
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default BookingManagerOrderTable;
