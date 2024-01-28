import img from "../../assets/img/cover-event.jpg"
import {FaFacebookF} from "react-icons/fa";
import {CiCalendarDate} from "react-icons/ci";
import {useDispatch, useSelector} from "react-redux";
import {selectUserEdit} from "../../features/user/UserSlice.js";
import {selectInfoUser} from "../../features/UserFormInTicketBookingSlice.js";
import {createBookingForTicket, selectBookingCreate} from "../../features/BookingSlice.js";
import {useEffect} from "react";
import {selectEventById} from "../../features/EventSlice.js";
import {selectShowTimeByEventId} from "../../features/TimeSlice.js";
import emailjs from '@emailjs/browser';
import {useParams} from "react-router-dom";

export const TicketBookingStep3 = () => {
    const dispatch = useDispatch();
    const param = useParams()
    console.log(param)
    const seatTickets = useSelector(state => state.seat)
    const userEdit = useSelector(selectUserEdit);
    const infoUser = useSelector(selectInfoUser);
    const event = useSelector(selectEventById);
    const times = useSelector(selectShowTimeByEventId);
    const bookingCreate = useSelector(selectBookingCreate)
    const selectedTime = times.data.content.find((time) => time.id === param.param);
    const seatList = seatTickets.seats.join(", ")
    const seatPriceList = seatTickets.price.join(", ")
    console.log(seatPriceList)
    const bookings = {
        infoUser: infoUser,
        seatTickets: seatTickets,
        userEdit: userEdit
    }
    useEffect(() => {
        dispatch(createBookingForTicket(bookings))
    }, []);
    let dataSendMail = {};
    useEffect(() => {
        if (bookingCreate !== null) {
            dataSendMail = {
                bookingId: bookingCreate.data.id,
                eventName: event.name,
                time: selectedTime.time,
                nameUser: infoUser.name,
                emailUser: infoUser.email,
                timeBooking: bookingCreate.data.createdAt,
                paymentMethod: infoUser.paymentMethod,
                seat: seatList,
                price: seatPriceList,
                totalPrice: seatTickets.totalPrice
            }
            emailjs.send('service_rgh3yss', 'template_tc83two', dataSendMail, 'bC7itDNp2khTY1SsL')
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                }, function (error) {
                    console.log('FAILED...', error);
                });
        }
    }, [bookingCreate])


    return (
        <>
            <div className=" mx-56">
                <h1 className="text-center font-bold text-3xl my-4">Đặt vé thành công</h1>
                <img src={img} alt="cover-event"/>
                <p className="text-center my-4">Cảm ơn bạn đã đặt vé tại TicketBox.vn</p>
                <div className="text-center text-white">
                    <a className="inline-block p-4 bg-[#3D5A99] mr-3" href="#"><FaFacebookF/>
                    </a>
                    <a className="inline-block p-4 bg-[#90BA3E]" href="#"><CiCalendarDate/>

                    </a>
                </div>
            </div>
        </>
    )
}

