import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getEventById, selectEventById} from "../../features/EventSlice.js";


function Seat() {
    const dispatch = useDispatch();
    const event = useSelector(selectEventById);
    console.log(event)
    const seats = [];
    // let totalSeat = ticket.data.ticketAmount;
    let seatCount = 1;
    const totalRows = Math.ceil(100 / 15); // Tổng số hàng (làm tròn lên)

    for (let i = 1; i <= totalRows; i++) {
        for (let j = 1; j <= 15; j++) {
            const seatNumber = String.fromCharCode(64 + i) + "-" + j.toString().padStart(2, "0");
            let seatClass = "";

            if (i <= 3) {
                seatClass = "bg-[#FFD5CF]";
            } else if (i <= 6) {
                seatClass = "bg-[#C4F1F2]";
            } else {
                seatClass = "bg-[#FDE098]";
            }

            seats.push(<div key={seatNumber} className={`inline-block w-8 h-8 leading-8 text-center text-black text-xs m-2 rounded ${seatClass}`}>{seatNumber}</div>);
            seatCount++;
        }
    }

    const showEventById = async (id) => {
        dispatch(getEventById(id));
    }

    useEffect(() => {
        showEventById('806fa34d-b3c5-11ee-b8e0-8038fbe5e43e');
    }, []);


    return (
        <>

            <div className="bg-white mt-3 pt-3 overflow-y-auto">
                <h1 className="py-3 mx-auto rounded-full w-3/4 text-center font-bold text-3xl bg-[#EDEDED] ">Sân
                    khấu/Stage</h1>
                <div className="my-4 ml-3 ">
                    {seats}
                </div>


            </div>
        </>
    );
}


export default Seat;
