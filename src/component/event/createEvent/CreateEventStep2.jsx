import {FaArrowAltCircleRight, FaCalendarPlus, FaRegSave} from "react-icons/fa";
import {DatePicker, Space} from "antd";
import React from "react";
import {MdDelete} from "react-icons/md";

export const CreateEventStep2 = () => {


    return (<>
        <div className="mx-auto w-[80%] my-7">
            <div className="my-4">Thời gian</div>
            <div className="border-2 border-dashed ">
                <div className=" flex p-4 justify-center text-2xl">
                    <span className="my-auto mr-2"><FaCalendarPlus/></span>
                    <span>Tạo suất diễn/ thời gian</span>
                </div>
            </div>
            <div>
                <div className="flex items-center text-2xl">
                    <div className="my-4 text-white w-3/4 ">Ngày sự kiện</div>
                    <span className=" w-1/4 flex justify-end">
                        <MdDelete/>
                    </span>
                </div>
                <div>
                        <span>
                            <span className="mr-4">Từ</span>
                            <Space direction="vertical">
                                <DatePicker/>
                            </Space>
                        </span>

                    <span>
                            <span className="mx-4">Giờ</span>
                            <Space direction="vertical">
                                <DatePicker/>
                            </Space>
                        </span>

                </div>
                <div>
                        <span>
                            <span className="mr-4">Đến</span>
                            <Space direction="vertical">
                                <DatePicker/>
                            </Space>
                        </span>

                    <span>
                            <span className="mx-4">Giờ</span>
                            <Space direction="vertical">
                                <DatePicker/>
                            </Space>
                        </span>

                </div>
            </div>


            <div className="flex my-8 ">
                <button className="bg-[#9EC74B] text-white w-1/2 py-4 flex items-center mr-4 justify-center"
                        type="button "><FaRegSave className="text-3xl mr-3"/>
                    LƯU LẠI
                </button>
                <button className="bg-[#9EC74B] text-white w-1/2 py-4 flex items-center justify-center"
                        type="button"><FaArrowAltCircleRight className="text-3xl mr-3"/>
                    TIẾP TỤC
                </button>
            </div>
        </div>
    </>)
}
