import React from "react";


export default function TicketPayment() {

  return (
    <>
        <div className="w-full mx-56 ">
            <p className="mt-6 mb-3">Thông tin người nhận vé</p>
            <div className="flex gap-10 items-center justify-center bg-neutral-800">
            <div className="w-3/5">
                <div className="flex">
                <div className=" w-1/2 border border-1">
                    <label className="block text-black">Họ</label>
                    <input className=" w-full" type="text" />
                </div>
                <div className=" w-1/2 border border-1">
                    <label className="block text-black">Tên</label>
                    <input className=" w-full" type="text" />
                </div>
                </div>
                <div className="flex">
                    <div className=" w-1/2 border border-1">
                        <label className="block text-black">Email</label>
                        <input className=" w-full" type="text" />
                    </div>
                    <div className=" w-1/2 border border-1">
                        <label className="block text-black">Nhập lại email:</label>
                        <input className=" w-full" type="text" />
                    </div>
                </div>
                <div className="flex">
                    <div className=" w-1/2 border border-1">
                        <label className="block text-black">Số điện thoại</label>
                        <input className=" w-full" type="text" />
                    </div>
                </div>
            </div>

            <div className="w-2/5">
                div
            </div>
        </div>
        </div>
    </>
  );
}
