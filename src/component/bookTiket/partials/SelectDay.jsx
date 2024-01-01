import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EventFilter = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [showOptions, setShowOptions] = useState(false);
    const [selectOption, setSelectOption] = useState("Tất cả các ngày");

    const handleChangeStart = (date) => {
        setStartDate(date);
    };

    const handleChangeEnd = (date) => {
        setEndDate(date);
    };

    const handleApplyFilters = () => {
        if (startDate && endDate) {
            const formattedStartDate = startDate.toLocaleDateString('en-GB');
            const formattedEndDate = endDate.toLocaleDateString('en-GB');
            setSelectOption(`${formattedStartDate}-${formattedEndDate}`);
        }
        setShowOptions(false);
    };

    const options = ['Tất cả các ngày', 'Hôm nay', 'Tuần tới', 'Tháng tới'];

    return (
        <div className="relative z-10">
            <div onClick={() => setShowOptions(!showOptions)} className="border-2 border-gray-300 rounded-lg gap-2 cursor-pointer p-2">
                {selectOption}
            </div>
            {showOptions && (
                <div className="absolute top-2 right-0">
                    {options.map((option, index) => (
                        <div key={index} onClick={() => setSelectOption(option)}>
                            {option}
                        </div>
                    ))}
                    <div>
                        <div>
                            <p>Bắt đầu từ:</p>
                            <DatePicker
                                selected={startDate}
                                onChange={handleChangeStart}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Chọn ngày"
                            />
                        </div>
                        <div>
                            <p>Kết thúc tại:</p>
                            <DatePicker
                                selected={endDate}
                                onChange={handleChangeEnd}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Chọn ngày"
                            />
                        </div>
                        <button onClick={handleApplyFilters}>Áp dụng</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventFilter;
