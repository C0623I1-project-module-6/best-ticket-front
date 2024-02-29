import Seat from "./Seat.jsx";
import {useDispatch} from "react-redux";
import {getTicketTypes} from "../../features/TicketTypeSlice.js";
import {updateStatusSuccess} from "../../api/TicketApi.js";
import {setPrice, setSeats, setTicketCode, setTicketType, setTotalPrice} from "../../features/SeatSlice.js";
import React, {useEffect, useState} from "react";


export const TicketBookingStep1 = (props) => {
    const [dataTotalPrice, setDataTotalPrice] = useState(0);
    const [dataPriceOneTicket, setDataPriceOneTicket] = useState([]);
    const [dataSeat, setDataSeat] = useState([]);
    const [dataTicketCode, setDataTicketCode] = useState([]);
    const [dataNameTicketType, setDataNameTicketType] = useState([]);
    const dispatch = useDispatch();
    const showTicketType = () => {
        dispatch(getTicketTypes())
    }
    useEffect(() => {
        showTicketType();
    }, [])
    const handleDataFromSeat = (totalPrice, seat, nameTicketType, priceOneTicket, ticketCodeSeats) => {
        setDataTotalPrice(totalPrice);
        setDataSeat(seat);
        setDataNameTicketType(nameTicketType);
        setDataPriceOneTicket(priceOneTicket);
        setDataTicketCode(ticketCodeSeats)
    }
    const handleDataFormButton = async () => {
        if (dataTotalPrice !== 0 && dataSeat !== null) {
            try {
                dispatch(setSeats(dataSeat));
                dispatch(setTotalPrice(dataTotalPrice));
                dispatch(setTicketType(dataNameTicketType));
                dispatch(setPrice(dataPriceOneTicket));
                dispatch(setTicketCode(dataTicketCode));
                props.callbackData(1);
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }
    return (
        <>
            <div className="mx-40 my-5 flex justify-between	">
                <span>Vui lòng chọn ghế bên dưới</span>
                <span><span className="mr-2 inline-block w-4 h-4 rounded-full bg-white"></span>Ghế trống</span>
                <span> <span
                    className="mr-2 inline-block w-4 h-4 rounded-full bg-green-800"></span>Ghế đang chọn</span>
                <span><span
                    className="mr-2 inline-block w-4 h-4 rounded-full bg-red-800"></span>Ghế đã có người chọn</span>
                <span><span
                    className="mr-2 inline-block w-4 h-4 rounded-full bg-gray-700"></span>Ghế không được chọn</span>
            </div>

            <div className="flex mx-40">
                <div className="w-4/6  mr-3">
                    <div className="bg-[#E3E3E3]">

                        <div className="flex p-3">

                            <div className="w-1/2">
                                <div className="flex ">
                                    <div className="w-8 h-8 bg-[#FFD5CF] mr-4 my-auto"></div>
                                    <div className="w-full">
                                        <p className="text-[#66666E] font-bold">Vé Vip</p>
                                        <p className="text-[#66666E]">270.000VND</p>

                                    </div>
                                    <div
                                        className="h-5 w-5 rounded-full bg-gray-400 text-center text-white my-auto">
                                        i
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="flex ml-2">
                                    <div className="w-8 h-8 bg-[#C4F1F2] mr-4 my-auto"></div>
                                    <div className="w-full">
                                        <p className="text-[#66666E] font-bold">Vé Thường</p>
                                        <p className="text-[#66666E]">220.000VND</p>

                                    </div>
                                    <div
                                        className="h-5 w-5 rounded-full bg-gray-400 text-center text-white my-auto">
                                        i
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-dashed"></div>
                        <div className="flex p-3">
                            <div className="w-1/2">
                                <div className="flex">
                                    <div className="w-8 h-8 bg-[#FDE098] mr-4 my-auto"></div>
                                    <div className="w-full">
                                        <p className="text-[#66666E] font-bold">Vé Lầu</p>
                                        <p className="text-[#66666E]">170.000VND</p>
                                    </div>
                                    <div
                                        className="h-5 w-5 rounded-full bg-gray-400 text-center text-white my-auto">
                                        <span>i</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <Seat dataFormSeat={handleDataFromSeat}/>
                    </div>

                </div>

                <div className="w-2/6">
                    <div className="bg-white px-5">
                        <h4 className="text-black pt-3 pb-1">THÔNG TIN ĐẶT VÉ</h4>
                        <hr className="border-2 border-solid"/>
                        <div className="pt-3 pb-12">{dataSeat ? dataSeat + " " : "Vui lòng chọn vé"}</div>
                    </div>

                    <div className="pl-5 bg-[#666666] py-4 flex text-white">
                        <span className="w-3/5 ">Tổng cộng:  </span>
                        <span>{dataTotalPrice} VND</span>
                    </div>
                    <button className="bg-[#7CA629] py-3 px-2 w-full text-white mt-10"
                            onClick={handleDataFormButton}
                            type="button">Tiếp tục
                    </button>
                </div>
            </div>
        </>
    )
}
