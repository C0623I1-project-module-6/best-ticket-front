import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTicketsByStatusFinished, getTicketsByStatusUpcoming, selectShowTicket} from "../../features/TicketSlice.js";
import JsBarcode from "jsbarcode";
import {useParams} from "react-router-dom";


function TicketDetails(props) {
    const [keyword, setKeyword] = useState(props.value);
    const customerId = useParams().customerId;
    const dispatch = useDispatch();
    const tickets = useSelector(selectShowTicket)
    const [activeButton1, setActiveButton1] = useState("");


    const arg = {
        customerId: customerId,
        status: props.value
    }


    useEffect(() => {
        tickets.data?.forEach(ticket => {
            JsBarcode(`#barcode-${ticket.ticketCode}`, ticket.ticketCode);
        })
    }, [tickets.data])
    return (
        <>

            <div className="w-full h-full bg-blue-gray-900">
                <div className="flex items-center justify-center gap-5">
                    <button type="button" className={`btn btn-xs btn-outline rounded-full ${
                        activeButton1 === 'upcoming' ? 'bg-[#2DC275] text-black' : 'bg-[#5D616A] text-black'
                    }`}
                            onClick={() => {
                                setActiveButton1('upcoming');
                                dispatch(getTicketsByStatusUpcoming(arg));
                            }}
                    >Upcoming
                    </button>
                    <button type="button" className={`btn btn-xs btn-outline rounded-full ${
                        activeButton1 === 'finished' ? 'bg-[#2DC275] text-black' : 'bg-[#5D616A] text-black'
                    }`}
                            onClick={() => {
                                setActiveButton1('finished');
                                dispatch(getTicketsByStatusFinished(arg));
                            }}
                    >
                        Finished
                    < /button>
                </div>
                {tickets.data?.map((ticket, index) => (

                    <div style={{border: "1px solid black"}} className="flex py-3 px-5 h-full"
                         key={ticket.id}>
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
                        </div>
                        <div className="right w-2/12 border-l flex">
                            <svg className="h-full w-full ml-2" key={ticket.id}
                                 id={`barcode-${ticket.ticketCode}`}>{ticket.ticketCode}</svg>
                        </div>
                        <hr/>
                    </div>

                ))}
            </div>
        </>
    );
}

export default TicketDetails;
