import {CiBank, CiCreditCard1} from "react-icons/ci";


export default function TicketPayment() {

    return (
        <>
            <div className="w-4/5 mx-56 text-black">
                <div className="flex gap-10 items-center justify-center bg-neutral-400">
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
                            <h4 className="text-black pt-3 pb-1">THÔNG TIN ĐẶT VÉ</h4>
                            <hr className="border-2 border-solid"/>
                            <div className="pt-3 pb-12">Vui lòng chọn vé</div>
                        </div>

                        <div className="pl-5 bg-[#666666] py-4 flex text-white">
                            <span className="w-4/5 ">Tổng cộng: </span>
                            <span>0 VND</span>
                        </div>
                        <button className="bg-[#7CA629] py-3 px-2 w-full text-white mt-10" type="button">Tiếp tục
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
