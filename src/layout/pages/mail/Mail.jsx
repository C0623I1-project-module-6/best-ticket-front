import {useState} from "react";
import {useSelector} from "react-redux";
import {selectBookingCreate} from "../../../features/BookingSlice.js";
import {useParams} from "react-router-dom";
import {selectEventById} from "../../../features/EventSlice.js";
import {selectShowTimeByEventId} from "../../../features/TimeSlice.js";

export const Mail = (props) => {
    console.log(props.data);
    const param = useParams().param;
    console.log(param)
    const [bookingCreate, setBookingCreate] = useState(props.data);
    const bookings = useSelector(selectBookingCreate)
    const event = useSelector(selectEventById);
    const times = useSelector(selectShowTimeByEventId)
    console.log(times)
    console.log(event)
    console.log(bookings)
    console.log(bookingCreate)
    return (
        <>
            <div className="mx-40">
                <div>
                    <h1>Thông tin vé</h1>
                    <p>Vé điện tử của bạn được đính kèm trong mail này. Vui lòng chuẩn bị sẵn vé điện tử tại nơi soát
                        vé.</p>
                    <p>Mã đơn hàng: {bookings !== null ? bookings.data.id : <div></div>}</p>
                    <p>(Dùng khi liên hệ Hỗ Trợ Khách Hàng)</p>
                    <p>Sự kiện: {event !== null ? event.name : <div></div>}</p>
                    <p>Lúc: {times !== null ? times.data.content.map((time, index) => {
                        if (time.id === param) {
                            return (
                                <span key={index}>{time.time}</span>
                            )
                        } else {
                            return null;
                        }

                    }) : <div></div>}</p>
                    <p>Địa chỉ chờ lấy từ db</p>
                </div>
                < hr className="border border-dashed border-gray-500"/>
                <div>
                    <p>Từ ban tổ chức</p>
                    <p>Thank you for booking with TicketBox. Have a great event!</p>
                </div>
                < hr className="border border-dashed border-gray-500"/>
                <div>
                    <p>Điều khoản và điều kiện</p>
                    <p>- Không hoàn tiền cho vé đã thanh toán.</p>
                    <p>- Người mua phải trình vé ở cửa để tham gia sự kiện.</p>
                    <p>- Người mua chịu trách nhiệm bảo mật thông tin mã vé.</p>
                    <p>- Khi mua vé, tức là người mua đã đồng ý với các điều khoản và điều kiện trên.</p>
                    <p>Nếu bạn có câu hỏi, xin hãy liên hệ:</p>
                    <p>Email: support@ticketbox.vn</p>
                    <p>Hotline: 1900.6408 (Thứ 2 - Thứ 6, 08:30 - 19:30) </p>
                </div>
                < hr className="border border-dashed border-gray-500"/>
                <div>
                    <p>Thông tin người mua</p>
                    <p>
                        Khách hàng: {bookingCreate !== null ? (
                        bookingCreate.userEdit.customer.fullName !== null ? (
                            <span>{bookingCreate.userEdit.customer.fullName}</span>
                        ) : (
                            <span>{bookingCreate.infoUser.name}</span>
                        )
                    ) : null}
                    </p>
                    <p>Email: {bookingCreate !== null ? (
                        bookingCreate.userEdit.email !== null ? (
                            <span>{bookingCreate.userEdit.email}</span>
                        ) : (
                            <span>{bookingCreate.infoUser.email}</span>
                        )
                    ) : null}</p>
                </div>
                < hr className="border border-dashed border-gray-500"/>
                <div>
                    <p>Chi tiết đơn hàng</p>
                    <p>Phương thức thanh toán: {bookingCreate.infoUser.paymentMethod} </p>
                    <p>Thời gian đặt vé: 10:23, 11/01/2024 </p>
                    <div>
                        <p>Sản phẩm</p>
                        {bookingCreate.seatTickets.map((seat, index) => (
                            <div className="flex" key={index}>
                                <p>{seat.seats[index]}</p>
                                <p>{seat.price[index]}</p>
                            </div>
                        ))}
                        <div className="flex">
                            <p>Tổng giá trị </p>
                            <p>{bookingCreate.seatTickets.totalPrice} VND</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Mail;