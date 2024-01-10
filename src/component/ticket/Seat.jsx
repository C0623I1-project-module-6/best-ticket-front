import React from 'react';

function Seat(props) {

    const soLuongChoNgoi = 101; // Số lượng chỗ ngồi

    // Tạo một mảng JSX chứa các chỗ ngồi
    const choNgoi = [];
    for (let i = 1; i <= soLuongChoNgoi; i++) {
        choNgoi.push(<div className="w-7 h-7 mx-1 my-1 inline-block bg-red-800 rounded-full text-center py-auto" key={i}>{i}</div>);
    }

    return (
        <>
        <div className="bg-white mt-3">
            <h1 className="py-3 mx-auto rounded-full w-3/4 text-center font-bold text-3xl bg-[#EDEDED] ">Sân khấu/Stage</h1>
            <div className="mx-1 my-2">{choNgoi}</div>

        </div>
        </>
    );
}


export default Seat;