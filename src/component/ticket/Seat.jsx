import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTicketByTimeId, selectShowTicketByTimeId, selectTotalElements} from "../../features/TicketSlice.js";
import {useParams} from "react-router-dom";

function Seat({dataFormSeat}) {
    const [seats, setSeats] = useState([]);
    console.log(seats)
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch();
    const timeId = useParams().param;
    const totalElementTicket = useSelector(selectTotalElements)
    console.log(totalElementTicket)
    const totalSeatOneRow = 15;
    const tickets = useSelector(selectShowTicketByTimeId)
    console.log(tickets)

    const showTicketByTimeId = () => {
        dispatch(getTicketByTimeId(timeId))
    }
    useEffect(() => {
        showTicketByTimeId();
    }, [])

    const totalRows = Math.ceil(totalElementTicket / totalSeatOneRow); // Tổng số hàng (làm tròn lên)

    useEffect(() => {
        dataFormSeat(totalPrice);
    }, [totalPrice])
    const handleSeatClick = (seatNumber, seatClass, seatValue) => {
        const updatedSeats = seats.map((seat) => {
            if (seat.seatNumber === seatNumber) {
                if (seat.seatClass === "bg-[#FFD5CF]") {
                    return {...seat, seatValue: 1700000, seatClass: "bg-[#2E7D32]"};
                } else if (seat.seatClass === "bg-[#C4F1F2]") {
                    return {...seat, seatValue: 2200000, seatClass: "bg-[#2E7D32]"};
                } else {
                    return {...seat, seatValue: 2700000, seatClass: "bg-[#2E7D32]"};
                }
            }
            return seat;
        });
        setSeats(updatedSeats);
        // Lưu trữ ghế được chọn
        if (selectedSeats.includes(seatNumber)) {
            setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seatNumber));
        } else {
            setSelectedSeats([...selectedSeats, seatNumber]);
        }
    };

    // Tính tổng giá trị của các ghế được chọn
    useEffect(() => {
        let totalPrice = 0;
        selectedSeats.forEach((seatNumber) => {
            const selectedSeat = seats.find((seat) => seat.seatNumber === seatNumber);
            if (selectedSeat) {
                totalPrice += parseInt(selectedSeat.seatValue);
            }
        });
        setTotalPrice(totalPrice);
    }, [selectedSeats, seats]);

    // Tạo danh sách ghế


    // Render danh sách ghế
    const renderSeats = () => {
        return seats.map((seat) => (
            <button
                key={seat.seatNumber}
                onClick={() => handleSeatClick(seat.seatNumber, seat.seatClass, seat.seatValue)}
                className={`inline-block w-8 h-8 leading-8 text-center text-black text-xs m-2 rounded ${seat.seatClass}`}
            >
                {`${seat.seatNumber}`}
            </button>
        ));
    };

    return (
        <>
            <div className="bg-white mt-3 pt-3 overflow-y-auto">
                <h1 className="py-3 mx-auto rounded-full w-3/4 text-center font-bold text-3xl bg-[#EDEDED] ">Sân
                    khấu/Stage</h1>
                <div className="my-4 ml-3 ">
                    {renderSeats()}
                </div>
            </div>
        </>
    );
}

export default Seat;
