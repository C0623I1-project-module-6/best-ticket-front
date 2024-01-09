import React from "react";

function UserFooter(props) {
    return (
        <>
            <div className=" bg-[#383E4D]">
                <footer className="flex font text-xs py-10 px-4">
                    <div className="ft-left w-1/3  ">
                        <h4 className="font-bold text-[#c9c9c9]">Holine</h4>
                        <p className="leading-6	">
                            {" "}
                            Thứ 2 - Thứ 6 (8:30 - 18:30)
                        </p>
                        <p className="text-green-800 font-black	leading-6">
                            1900.6408
                        </p>
                        <br />

                        <h4 className="font-bold text-[#c9c9c9]">Email</h4>
                        <p className="leading-6	"> support@ticketbox.vn</p>
                        <br />
                        <h4 className="font-bold text-[#c9c9c9]">Văn phòng</h4>
                        <p className="leading-6	">
                            52 Út Tịch, Phường 4, Quận Tân Bình, TP. Hồ Chí Minh
                        </p>
                    </div>
                    <div className="ft-center w-1/3">
                        <h4 className="font-bold text-[#c9c9c9]">
                            Dành cho Ban Tổ chức
                        </h4>
                        <p className="leading-6	">Hợp tác với chúng tôi</p>
                        <br />
                        <h4 className="font-bold text-[#c9c9c9]">
                            Về công ty chúng tôi
                        </h4>
                        <p className="leading-6	">Thông tin về TicketBox</p>
                        <p className="leading-6	">Điều khoản sử dụng</p>
                        <p className="leading-6	">Quy chế hoạt động sàn TMĐT</p>
                        <p className="leading-6	">
                            Cơ chế giải quyết tranh chấp/ khiếu nại
                        </p>
                        <br />
                    </div>
                    <div className="ft-right w-1/3">
                        <h4 className="font-bold text-[#c9c9c9]">
                            Dành cho Khách hàng
                        </h4>
                        <p className="leading-6	">Hướng dẫn mua vé</p>
                        <br />
                        <h4 className="font-bold text-[#c9c9c9]">
                            Trung tâm hỗ trợ
                        </h4>
                        <p className="leading-6	">Câu hỏi thường gặp</p>
                        <br />
                        <h4 className="font-bold text-[#c9c9c9] mb-2">
                            Đăng ký nhận email về các sự kiện hot nhất
                        </h4>
                        <div className="py-2 border-solid border-2 border-[#525d74] w-2/5	">
                            <input
                                className="bg-inherit focus:outline-none border-transparent"
                                type="text"
                                name=""
                                id=""
                                placeholder="Email của bạn"
                            />
                        </div>
                    </div>
                    <br />
                </footer>
                <div
                    style={{
                        width: "100%",
                        height: "1px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        marginBottom: "30px",
                    }}
                ></div>
                <footer className="flex font text-xs py-10 px-4">
                    <div className="ft-left w-1/3 ">
                        <h4 className="font-bold text-[#c9c9c9]">
                            Ứng dụng Ticketbox
                        </h4>
                        <div className="my-3">
                            <img
                                className="h-14 w-40"
                                src="/src/assets/img/footer/google_play.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-14 w-40"
                                src="/src/assets/img/footer/app_store.png"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="ft-center w-1/3 ">
                        <h4 className="font-bold text-[#c9c9c9]">
                            Ứng dụng check-in cho Ban tổ chức
                        </h4>

                        <div className="my-3">
                            <img
                                className="h-14 w-40"
                                src="/src/assets/img/footer/mobile.png"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="ft-right w-1/3 ">
                        <h4 className="font-bold text-[#c9c9c9]">Follow us</h4>

                        <div className="my-3">
                            <img
                                className="inline-block mr-2"
                                src="/src/assets/img/footer/facebook.svg"
                                alt=""
                            />
                            <img
                                className="inline-block"
                                src="/src/assets/img/footer/instagram.svg"
                                alt=""
                            />
                        </div>

                        <h4 className="font-bold text-[#c9c9c9]">Ngôn ngữ</h4>
                        <div className="my-3">
                            <img
                                className="inline-block mr-2 w-10 h-10"
                                src="/src/assets/img/footer/vietnam.svg"
                                alt=""
                            />
                            <img
                                className="inline-block w-11 h-8"
                                src="/src/assets/img/footer/english.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </footer>
            </div>
            <div className="bg-[#1D1D1D] flex">
                <div className="w-2/5 flex">
                    <div className="w-1/5">
                        <img
                            className="w-32 h-32"
                            src="/src/assets/img/logo/best-ticket-logo-v1.svg"
                            alt=""
                        />
                    </div>
                    <p className="w-4/5 m-auto">
                        <p>
                            Hệ thống quản lý và phân phối vé sự kiện hàng đầu
                            Việt Nam
                            <br />
                            TicketBox Co. Ltd. © 2016
                        </p>
                    </p>
                </div>
                <div className="w-3/5">
                    <p></p>

                </div>
            </div>
        </>
    );
}

export default UserFooter;
