import React, {useState} from 'react';
import {Divider, Steps} from 'antd';
import UserFooter from "../footer/UserFooter.jsx";
import Seat from "./Seat.jsx";


function TicketBooking() {
    const [current, setCurrent] = useState(0);
    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    };
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
                <Steps
                    current={current}
                    onChange={onChange}
                    items={[
                        {
                            title: 'Chọn vé'
                        },
                        {
                            title: 'Thanh toán'
                        },
                        {
                            title: 'Hoàn tất'
                        },
                    ]}
                />
                <Divider/>
            </div>
            <div className="mx-40 my-5 flex justify-between	">
                <span>Vui lòng chọn ghế bên dưới</span>
                <span><span className="mr-2 inline-block w-4 h-4 rounded-full bg-white"></span>Ghế trống</span>
                <span> <span className="mr-2 inline-block w-4 h-4 rounded-full bg-green-800"></span>Ghế đang chọn</span>
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
                                <div className="h-5 w-5 rounded-full bg-gray-400 text-center text-white my-auto">
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
                                <div className="h-5 w-5 rounded-full bg-gray-400 text-center text-white my-auto">
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
                                <div className="h-5 w-5 rounded-full bg-gray-400 text-center text-white my-auto">
                                    <span>i</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    </div>
                    <div>
                        <Seat />
                    </div>

                </div>

                <div className="w-2/6">
                    <div className="bg-white px-5">
                        <h4 className="text-black pt-3 pb-1">THÔNG TIN ĐẶT VÉ</h4>
                        <hr className="border-2 border-solid"/>
                        <div className="pt-3 pb-12">Vui lòng chọn vé</div>
                    </div>

                    <div className="pl-5 bg-[#666666] py-4 flex text-white">
                        <span className="w-4/5 ">Tổng cộng: </span>
                        <span>0 VND</span>
                    </div>
                    <button className="bg-[#7CA629] py-3 px-2 w-full text-white mt-10" type="button">Tiếp tục</button>
                </div>
            </div>

            <UserFooter/>
        </div>);
}

export default TicketBooking;
