import {useDispatch, useSelector} from "react-redux";
import {getEventById, selectEventById} from "../../features/EventSlice.js";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {FaClock, FaHeart} from "react-icons/fa";
import {FaFacebook, FaLocationDot} from "react-icons/fa6";
import img from '../../assets/img/image/event.png'
import imgOrganizerLogo from '../../assets/img/image/organizerlogo.jpg'
import {IoIosArrowForward, IoMdMail} from "react-icons/io";
import {IoTicket} from "react-icons/io5";

const EventDetail = () => {
    const dispatch = useDispatch();
    const eventId = useParams().id;

    const event = useSelector(selectEventById);
    console.log(event)
    const showEventById = () => {
        console.log(eventId)
        dispatch(getEventById(eventId));
    }

    useEffect(() => {
        showEventById(eventId);
    }, []);
    return (
        <>
            <div className="w-full overflow-y-auto pb-52">
                <img className="w-full h-96" src={event.image} alt=""/>

                <div className="flex mx-60 gap-20">
                    <div className="w-4/6">
                        <div className=" flex mt-10">
                            <div className="w-4/6 flex">
                                <div className="w-1/6 mr-8">
                                    <div className="text-center border border-solid border-black">
                                        <p className="bg-[#EB1212] text-white">Tháng 1</p>
                                        <p className="text-black">20</p>
                                        <p className="text-black">Thứ 7</p>
                                    </div>
                                </div>
                                <div className="w-5/6">
                                    <div className="text-black text-xl" >[Nhà Hát Kịch IDECAF] Chuyện Thần Tiên 5: CUỘC PHIÊU LƯU CỦA CẬU BÉ BÚP BÊ
                                    </div>
                                    <div className="flex items-center  text-black"><FaClock className="mr-2"/> Thứ 7, 20 Tháng 1
                                        2024
                                        (03:00
                                        PM - 06:00 PM) + 9 ngày khác
                                    </div>
                                    <div className="flex items-center text-black"><FaLocationDot className="mr-2"/> Nhà Văn hoá
                                        Thanh
                                        niên
                                        Thành phố Hồ Chí Minh
                                    </div>
                                    <div>4 Phạm Ngọc Thạch, Bến Nghé, Quận 1, Thành Phố Hồ Chí Minh</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white mt-10">
                            <div className="font-bold text-xl border-dashed border-b border-black py-3">
                                <p className="text-black px-3">Thông tin vé</p>
                            </div>
                            <div className="flex w-full border-dashed border-b border-black py-3 px-4">
                                <div className="w-5/6">Vé Vip</div>
                                <div className="w-1/6 text-right">270.000VNĐ</div>
                            </div>
                            <div className="flex w-full border-dashed border-b border-black py-3 px-4">
                                <div className="w-5/6">Vé Vip</div>
                                <div className="w-1/6 text-right">270.000VNĐ</div>
                            </div>
                            <div className="flex w-full py-3 px-4">
                                <div className="w-5/6">Vé Vip</div>
                                <div className="w-1/6 text-right">270.000VNĐ</div>
                            </div>
                        </div>

                        <div className="bg-white mt-10">
                            <div className="font-bold text-xl border-dashed border-b border-black py-3">
                                <p className="text-black px-3">Lịch sự kiện</p>
                            </div>
                            <div className="flex w-full border-dashed border-b border-black py-3 px-4">
                                <div className="w-5/6">
                                    <p className="text-black">Thứ 7, 20 Tháng 1 2024</p>
                                    <p>03:00 PM - 06:00 PM</p>
                                </div>
                                <div className="w-1/6 flex text-right justify-end items-center">
                                    <div className="py-2 px-10 bg-[#EF4141] text-center text-white text-xs">Mua vé
                                        ngay
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 ">
                            <img className="w-full" src={img} alt="event"/>
                        </div>

                        <div className="bg-white mt-10">
                            <div className="font-bold text-xl border-dashed border-b border-black py-3">
                                <p className="text-black text-xl px-3">Nhà tổ chức</p>
                            </div>
                            <div className="flex w-full px-10 py-4">
                                <div className="w-1/6">
                                    <img src={imgOrganizerLogo} alt="organizerlogo"/>
                                </div>
                                <div className="w-5/6 ">
                                    <p className="text-black text-xl font-bold">NHÀ HÁT KỊCH IDECAF.</p>
                                    <p className="py-5">Sân khấu kịch Idecaf ra đời vào tháng 09.1997 với vở "Khoảng
                                        khắc tình yêu" đã
                                        nhanh chóng gây tiếng vang bởi chất lượng nghệ thuật, nội dung kịch bản sâu sắc,
                                        dàn diễn viên nổi tiếng và quan trọng nhất là thái độ phục vụ, tôn trọng khán
                                        giả của nhân viên phục vụ lẫn diễn viên của vở. Chỉ sau một thời gian ra mắt,
                                        sân khấu Idecaf trở thành một địa chỉ quen thụôc của khán giả mê kịch.</p>

                                    <p>Sau 20 năm hoạt động (tính đến hết tháng 12.2016), Idecaf đã dàn dựng hơn 100 vở
                                        kịch dành cho người lớn, 30 vở kịch rối thiếu nhi, 29 chương trình ca múa nhạc
                                        kịch thiếu nhi "Ngày xửa... ngày xưa" và phối hợp với với Đài truyền hình TP.HCM
                                        dàn dựng chương trình "Chuyện ngày xưa". Hơn 20 năm hoạt động, Idecaf đã đạt
                                        5.000 suất diễn quả là một con số không nhỏ khi tình hình sân khấu nói chung
                                        đang trong tình trạng kén chọn khán giả.</p>
                                    <div className="flex items-center py-3 px-5 border w-2/6 text-[#9DC52F] border-[#9DC52F]">
                                        <span className="mr-2"><IoMdMail/></span>
                                        <span>Liên hệ nhà tổ chức</span>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="w-2/6 mt-10">
                        <div className="text-white text-center text-2xl bg-[#F46767] py-4 px-2 ">Chọn lịch diễn
                        </div>
                        <div className="flex w-full">
                            <div className="text-center w-1/2 py-2 border border-solid border-black flex">
                                    <span className="text-center mx-auto flex items-center"><FaFacebook
                                        className="mr-2"/>Chia sẻ </span>
                            </div>
                            <div className="text-center w-1/2 py-2 border border-solid border-black flex">
                                <span className="text-center mx-auto flex items-center"><FaHeart className="mr-2"/>Quan tâm</span>
                            </div>
                        </div>
                        <div className="text-center mb-8">-- người quan tâm
                        </div>

                        <div className="sticky top-0 w-[80%] bg-white">
                            <p className="p-3 text-black text-xl">[Nhà Hát Kịch IDECAF] Chuyện Thần Tiên 5: CUỘC PHIÊU LƯU CỦA CẬU BÉ BÚP
                                BÊ</p>
                            <hr/>
                            <p className="flex items-center mb-3 p-3">
                                <span className="mr-3"><FaClock/></span>
                                <span>03:00 PM - 06:00 PM</span>
                            </p>
                            <p className="flex p-3 mb-3">
                                <span className="mr-3"><FaLocationDot/></span>
                                <span>
                                    Nhà Văn hoá Thanh niên Thành phố Hồ Chí Minh
                                    <br/>
                                    4 Phạm Ngọc Thạch, Bến Nghé, Quận 1, Thành Phố Hồ Chí Minh
                                </span>
                            </p>
                            <hr/>
                            <p className="flex items-center py-2 px-4">
                                <span className="w-3/4 flex items-center t"><IoTicket className="mr-3"/>Từ <span
                                    className="text-black ml-1">170.000 VND</span> </span>
                                <span className="w-1/4 flex justify-end"><IoIosArrowForward/></span>
                            </p>
                            <div className="bg-red-700 text-center py-2 px-6 text-xl text-white">Chọn lịch diễn</div>
                            <div className="flex border border-solid border-black">
                                <div className="bg-red w-1/2 flex justify-center items-center py-2 border-r border-solid border-black"><FaFacebook  className="mr-1 "/> Chia sẻ</div>
                                <div className="bg-red w-1/2 flex justify-center items-center py-2"><FaHeart  className="mr-1"/> Quan tâm</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
export default EventDetail;