import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTicketByTimeId, selectShowTicketByTimeId} from "../../features/TicketSlice.js";
import {useParams} from "react-router-dom";

function Seat({dataFormSeat}) {
    const [clickedSeats, setClickedSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [ticketCodeSeats, setTicketCodeSeats] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [priceOneTicket, setPriceOneTicket] = useState([]);
    const [nameTicketType, setNameTicketType] = useState([])
    const dispatch = useDispatch();
    const timeId = useParams().param;

    const tickets = useSelector(selectShowTicketByTimeId);
    useEffect(() => {
        dispatch(getTicketByTimeId(timeId))
    }, [])


    const handleSeatClick = (seatNumber) => {
        const selectedSeat = tickets.data.find((ticket) => ticket.seat === seatNumber);
        const price = selectedSeat.ticketType.price;
        const seat = selectedSeat.seat;
        const ticketTypeName = selectedSeat.ticketType.name;
        const priceTicket = selectedSeat.ticketType.price;
        const ticketCode = selectedSeat.ticketCode;
        if (selectedSeat && !selectedSeats.includes(selectedSeat.seat)) {
            setTotalPrice((prevTotalPrice) => prevTotalPrice + parseInt(price));
            setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, seat]);
            setClickedSeats((prevClickedSeats) => [...prevClickedSeats, seat]);
            setNameTicketType((prevNameTicketType) => [...prevNameTicketType, ticketTypeName]);
            setPriceOneTicket((prevPriceOneTicket) => [...prevPriceOneTicket, priceTicket]);
            setTicketCodeSeats(prevTicketCode=>[...prevTicketCode,ticketCode])
            dataFormSeat((totalPrice), [...selectedSeats, seat], [...nameTicketType], [priceOneTicket],[...ticketCodeSeats]);

            event.target.style.backgroundColor = "#2E7D32";
        } else {

            setTotalPrice((prevTotalPrice) => prevTotalPrice - parseInt(price));
            setSelectedSeats(selectedSeats.filter(item => item !== seat));
            setTicketCodeSeats(ticketCodeSeats.filter(item => item !== ticketCode));
            setPriceOneTicket(priceOneTicket.filter(item => item !== priceTicket))
            setNameTicketType(nameTicketType.filter(item => item !== ticketTypeName));
            if (selectedSeat.ticketType.name === "VIP") {
                event.target.style.backgroundColor = "#FFD5CF";
            } else if (selectedSeat.ticketType.name === "THƯỜNG") {
                event.target.style.backgroundColor = "#C4F1F2";
            } else {
                event.target.style.backgroundColor = "#FDE098";
            }
        }
    };

    useEffect(() => {
        dataFormSeat(totalPrice, selectedSeats, nameTicketType, priceOneTicket,ticketCodeSeats);
    }, [totalPrice, selectedSeats, nameTicketType, priceOneTicket,ticketCodeSeats]);


    // Render danh sách ghế
    const renderSeats = () => {
        return (
            <div>
                {tickets !== null ? (
                    <>
                        {tickets.data.map((ticket, index) => (
                            <button
                                key={index}
                                className={`inline-block w-8 h-8 leading-8 text-center text-black text-xs m-2 rounded`}
                                style={{
                                    backgroundColor: ticket.status === "Success" ? 'red' : ticket.ticketType.name === "VIP" ? '#FFD5CF' : ticket.ticketType.name === "THƯỜNG" ? "#C4F1F2" : "#FDE098"
                                }}
                                onClick={() => handleSeatClick(ticket.seat)}
                                disabled={ticket.status === "Success"}
                            >
                                {ticket.seat}
                            </button>
                        ))}
                    </>
                ) : (
                    <p>Không có dữ liệu</p>
                )}
            </div>
        );
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
