import {CiBank, CiCreditCard1} from "react-icons/ci";
import {FaPencil, FaUser} from "react-icons/fa6";
import {MdEmail} from "react-icons/md";
import {FaPhone} from "react-icons/fa";
import {useSelector} from "react-redux";
import {selectUserLogin} from "../../features/UserSlice.js";
import {selectShowTicketByTimeId} from "../../features/TicketSlice.js";


export const TicketBookingStep2 = () => {
    const user = useSelector(selectUserLogin);
    const seatTickets = useSelector(state => state.seat)
    const tickets = useSelector(selectShowTicketByTimeId);
    const countVIP = seatTickets.ticketTypes.filter(seat => seat === 'VIP').length;
    const countTHUONG = seatTickets.ticketTypes.filter(seat => seat === 'THƯỜNG').length;
    const countLAU = seatTickets.ticketTypes.filter(seat => seat === 'LẦU').length;

    console.log(tickets)
    console.log(seatTickets.ticketTypes.length);
    return (
        <>
            <div className="mx-40 text-black py-5">
                <div className="flex gap-10 items-center justify-center bg-neutral-400 py-5">
                    <div className="w-3/5 flex-col">
                        <p className="m-7">THÔNG TIN NGƯỜI NHẬN VÉ</p>
                        <div className="flex mx-2">
                            <div className="w-full mx-5">
                                <label htmlFor="">Họ</label>
                                <input type="text" className="w-full input bg-white"/>
                            </div>
                            <div className="w-full mx-5">
                                <label htmlFor="">Tên</label>
                                <input type="text" className="w-full input bg-white"/>
                            </div>
                        </div>
                        <div className="flex mx-2">
                            <div className="w-full mx-5">
                                <label htmlFor="">Email</label>
                                <input type="text" className="w-full input bg-white"/>
                            </div>
                            <div className="w-full mx-5">
                                <label htmlFor="">Nhập lại email</label>
                                <input type="text" className="w-full input bg-white"/>
                            </div>
                        </div>
                        <div className="flex ml-4">
                            <div className="w-full mx-3">
                                <label htmlFor="">Số điện thoại</label>
                                <input type="text" className="w-full input bg-white"/>
                            </div>
                            <div className="w-full mx-7">
                                <input type="hidden" className="w-full input bg-white"/>
                            </div>
                        </div>
                        <br/>
                        <hr/>
                        <div>
                            <p className="py-4 m-4">HÌNH THỨC THANH TOÁN</p>
                            <div className="flex gap-2 mx-2">
                                <div className="w-full flex pb-4">
                                    <input className="mx-2 bg-white" type="radio"/>
                                    <div className="flex bg-white p-2 w-full">
                                        <div className="my-auto text-xl mr-2"><CiCreditCard1/></div>
                                        <div>Thẻ tín dụng</div>
                                    </div>
                                </div>
                                <div className="w-full flex pb-4">
                                    <input className="mx-2 bg-white" type="radio"/>
                                    <div className="flex bg-white p-2 w-full">
                                        <div className="my-auto text-xl mr-2"><CiBank/></div>
                                        <div>Sử dụng Internet Banking</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/5 mx-5">
                        <div className="bg-white px-5">
                            <h4 className="text-black pt-3 pb-1 font-bold text-x">THÔNG TIN NGƯỜI NHẬN VÉ</h4>
                            <hr className="border-2 border-solid"/>

                            <div className="flex py-1 ">
                                <div className="w-1/2 flex items-center">
                                    <span className="mr-3"><FaUser/></span>
                                    <span>Họ Tên: </span>
                                </div>
                                <div className="w-1/2 text-right">{user !== null ? user.fullName : <div></div>}</div>
                            </div>
                            <hr className="border-2 border-dashed"/>

                            <div className="flex py-1 ">
                                <div className="w-1/2 flex items-center">
                                    <span className="mr-3"><MdEmail/></span>
                                    <span>Email: </span>
                                </div>
                                <div className="w-1/2 text-right">{user !== null ? user.email : <div></div>}</div>
                            </div>
                            <hr className="border-2 border-dashed"/>

                            <div className="flex py-1 ">
                                <div className="w-1/2 flex items-center">
                                    <span className="mr-3"><FaPhone/></span>
                                    <span>Điện thoại : </span>
                                </div>
                                <div className="w-1/2 text-right"></div>
                            </div>

                            <div className="font-bold">HÌNH THỨC THANH TOÁN</div>
                            <hr className="border-2 border-solid"/>
                            <div>Chờ</div>

                            <div className="flex justify-between">
                                <div className="font-bold">THÔNG TIN ĐẶT VÉ</div>
                                <div className="flex ">
                                    <span><FaPencil/></span>
                                    <span>Sửa</span>
                                </div>
                            </div>
                            <hr className="border-2 border-solid"/>

                            <div className="flex justify-between py-3">
                                <span>Loại vé</span>
                                <span>Số lượng</span>
                            </div>
                            <hr className="border border-dashed"/>
                            {seatTickets.ticketTypes.map((ticketType, index) => (
                                <div className="flex justify-between py-2" key={index}>
                                    {ticketType === "VIP" && (
                                        <>
                                            <div className="w-2/3" key={index}>
                                                <p>Vé {ticketType}</p>
                                                <p>{/* Dữ liệu của loại vé VIP */}</p>
                                                <p>{" " + seatTickets.seats[index]}</p>
                                            </div>
                                            <div className="w-1/3 text-right">
                                                <p>{countVIP}</p>
                                                <p>{seatTickets.price[index]} VNĐ</p>
                                            </div>
                                        </>

                                    )}
                                    {ticketType === "THƯỜNG" && (
                                        <>
                                            <div className="w-2/3">
                                                <p>Vé {ticketType}</p>
                                                <p>{/* Dữ liệu của loại vé Standard */}</p>
                                                <p>{" " + seatTickets.seats[index]}</p>
                                            </div>
                                            <div className="w-1/3 text-right">
                                                <p>{countTHUONG}</p>
                                                <p>{seatTickets.price[index]} VNĐ</p>
                                            </div>
                                        </>
                                    )}
                                    {ticketType === "LẦU" && (
                                        <>
                                            <div className="w-2/3">
                                                <p>Vé {ticketType}</p>
                                                <p>{/* Dữ liệu của loại vé Standard */}</p>
                                                <p>{" " + seatTickets.seats[index]}</p>
                                            </div>
                                            <div className="w-1/3 text-right">
                                                <p>{countLAU}</p>
                                                <p>{seatTickets.price[index]} VNĐ</p>
                                            </div>
                                        </>
                                    )}

                                </div>
                            ))}

                        </div>

                        <div className="pl-5 bg-[#666666] py-4 flex text-white">
                            <span className="w-4/6 ">Tổng cộng: </span>
                            <span>{seatTickets.totalPrice} VND</span>
                        </div>
                        <p className="text-xs text-center italic py-4">Vui lòng kiểm tra kỹ đơn hàng trước khi hoàn
                            tất</p>
                        <button className="bg-[#7CA629] py-3 px-2 w-full text-white " type="button">Tiếp tục
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
