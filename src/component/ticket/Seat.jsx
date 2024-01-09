import React from 'react';

function Seat(props) {

    const soLuongChoNgoi = 10; // Số lượng chỗ ngồi

    // Tạo một mảng JSX chứa các chỗ ngồi
    const choNgoi = [];
    for (let i = 1; i <= soLuongChoNgoi; i++) {
        choNgoi.push(<div key={i}>Chỗ ngồi {i}</div>);
    }

    return (
        <>
            <div>
            <h1>Giao diện chỗ ngồi</h1>
            <div>{choNgoi}</div>
            </div>
        </>
    );
}


export default Seat;