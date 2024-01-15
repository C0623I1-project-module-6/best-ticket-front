import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTicketsByStatusFinished, getTicketsByStatusUpcoming, selectShowTicket} from "../../features/TicketSlice.js";
import JsBarcode from "jsbarcode";


function TicketDetails(props) {
    const [keyword, setKeyword] = useState(props.value);
    const [time, setTime] = useState(props.time);
    const dispatch = useDispatch();
    const tickets = useSelector(selectShowTicket)
    console.log(tickets)
    const showTicket = async () => {
        if (time === 'finished') {
            dispatch(getTicketsByStatusFinished(keyword));
        } else if (time === 'upcoming') {
            dispatch(getTicketsByStatusUpcoming(keyword));
        }

    };

    useEffect(() => {
        setKeyword(props.value);
        setTime(props.time)
        showTicket();
    }, [keyword, props.value, time, props.time]);

    useEffect(() => {
        tickets.data?.forEach(ticket => {
            JsBarcode(`#barcode-${ticket.ticketCode}`, ticket.ticketCode);
        })
    }, [tickets.data])
    return (
        <div className="w-full h-full bg-blue-gray-900">
            {tickets.data?.map((ticket, index) => (
                <div style={{border: "1px solid black"}} className="flex py-3 px-5 h-full" key={ticket.id}>
                    <div className="left w-2/12 border-r ">
                        {index}
                    </div>
                    <div className="center w-8/12 pl-3">
                        <div className="center-top">
                            <p>Mã vé: {ticket.ticketCode}</p>
                            <p>Ghế: {ticket.seat}</p>
                            <h2>Vào lúc: {ticket.time}</h2>
                            <p>Trạng thái: {ticket.status}</p>
                            <p>Địa điểm</p>
                        </div>
                        <div className="center-bottom ">Hình ảnh gì đó</div>
                    </div>
                    <div className="right w-2/12 border-l flex">
                        <svg className="h-full w-full ml-2" key={ticket.id}
                             id={`barcode-${ticket.ticketCode}`}>{ticket.ticketCode}</svg>
                    </div>
                    <hr/>
                </div>

            ))}

        </div>);
}

export default TicketDetails;
