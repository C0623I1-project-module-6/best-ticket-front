import React, {useState} from 'react';
import {Steps} from 'antd';
import UserFooter from "../footer/UserFooter.jsx";
import {TicketBookingStep1} from "./TicketBookingStep1.jsx";
import {TicketBookingStep2} from "./TicketBookingStep2.jsx";
import {TicketBookingStep3} from "./TicketBookingStep3.jsx";


function TicketBooking() {
    const {Step} = Steps;

    const [current, setCurrent] = useState(0);
    const callBackFunction = (data) => {
        setCurrent(data)
    }

    return (
        <div className="w-full bg-[#F1F1F1] overflow-y-auto">
            <div className=" bg-gradient-to-r from-blue-gray-400 via-brown-300 to-blue-400 text-white">
                <div className="mx-40 py-6">
                    <div className="w-3/4 ">
                        <a href="#">
                            <span className="font-bold text-3xl	">
                                [Nhà Hát Kịch IDECAF] Chuyện Thần Tiên 5: CUỘC PHIÊU LƯU CỦA CẬU BÉ BÚP BÊ
                            </span>
                        </a>
                        <p>Nhà Văn hoá Thanh niên Thành phố Hồ Chí Minh - 4 Phạm Ngọc Thạch, Bến Nghé, Quận 1, Thành Phố
                            Hồ Chí Minh
                            Saturday, 13 January 2024, 3:00 PM+0700</p>
                    </div>
                </div>
            </div>
            <div className="my-5" style={{marginLeft: "40px", marginRight: "40px"}}>
                <Steps current={current}>
                    <Step title="Chọn vé"/>
                    <Step title="Thanh toán"/>
                    <Step title="Hoàn tất"/>
                </Steps>
                {current === 0 && <TicketBookingStep1 callbackData={callBackFunction}/>}
                {current === 1 && <TicketBookingStep2 callbackData={callBackFunction}/>}
                {current === 2 && <TicketBookingStep3/>}
            </div>
            <UserFooter/>
        </div>);
}

export default TicketBooking;
