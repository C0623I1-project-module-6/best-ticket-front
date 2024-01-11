import React, { useState } from "react";
import { Divider, Steps } from "antd";
import TicketBookingStep2 from "../../../component/ticket/TicketBookingStep2.jsx";
// import UserFooter from "../../../component/footer/UserFooter";

function TicketBooking() {
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  return (
    <div className="w-full">
      <div className="mx-56 text-white">
        <div className="  bg-gradient-to-r from-blue-gray-400 via-brown-300 to-blue-400 w-full">
          <div className="w-3/4 ">
            <a href="#">
              <span className="font-bold text-3xl	">
                [Nhà Hát Kịch IDECAF] Chuyện Thần Tiên 5: CUỘC PHIÊU LƯU CỦA CẬU
                BÉ BÚP BÊ
              </span>
            </a>
            <p>
              Nhà Văn hoá Thanh niên Thành phố Hồ Chí Minh - 4 Phạm Ngọc Thạch,
              Bến Nghé, Quận 1, Thành Phố Hồ Chí Minh Saturday, 13 January 2024,
              3:00 PM+0700
            </p>
          </div>
        </div>
      </div>
      <div className="my-5 w-full mx-0">
        <Steps
          current={current}
          onChange={onChange}
          items={[
            {
              title: "Chọn vé",
            },
            {
              title: "Thanh toán",
            },
            {
              title: "Hoàn tất",
            },
          ]}
        />
        <Divider />
      </div>
          <TicketBookingStep2 />
      {/* <UserFooter /> */}
    </div>
  );
}

export default TicketBooking;
