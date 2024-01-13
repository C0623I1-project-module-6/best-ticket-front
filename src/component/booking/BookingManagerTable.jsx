import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAllBookingsByEventId} from '../../features/BookingSlice.js';
import {useParams} from 'react-router-dom';

const BookingManagerTable = () => {
    const dispatch = useDispatch();
    const bookings = useSelector((state) => state.booking.bookings);
    const eventId = useParams().eventId;

    useEffect(() => {
        dispatch(getAllBookingsByEventId(eventId));
    }, [dispatch, eventId]);

    return (
        <div className="p-4">
            <table className="w-full mt-4">
                <thead>
                <tr className="border-x-0">
                    <th className="px-4 py-2 text-left border-b border-black">
                        <input type="checkbox" className="bg-white"/>
                    </th>
                    <th className="px-4 py-2 text-left">ĐƠN HÀNG</th>
                    <th className="px-4 py-2 text-left">VÉ</th>
                    <th className="px-4 py-2 text-left">TỔNG CỘNG</th>
                </tr>
                </thead>
                <tbody>
                {bookings.map((booking, index) => (
                    <tr key={index} className="border-x-0">
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
                            {booking.bookingDetails}
                            <br/>
                        </td>
                        <td className="px-4 py-2 border-x-0">
                            {booking.totalAmount}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookingManagerTable;