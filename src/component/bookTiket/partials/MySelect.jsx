import React, { useState } from 'react';

const MySelect = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;

        if (selectedOption === '') {
            // Nếu chọn "Tất cả sự kiện", xóa tất cả sự kiện khác đã chọn
            setSelectedOptions([]);
        } else {
            // Nếu chọn sự kiện khác, thêm vào danh sách
            setSelectedOptions((prevOptions) => [...prevOptions, selectedOption]);
        }
    };

    return (
        <div className="m-4">
            <label htmlFor="eventSelect" className="block text-sm font-medium text-gray-700">
                Chọn sự kiện:
            </label>
            <select
                id="eventSelect"
                value={''}
                onChange={handleSelectChange}
                className="mt-1 block w-full p-2 border rounded-md bg-white focus:outline-none focus:ring focus:border-blue-300"
            >
                <option value="" disabled hidden>
                    Chọn sự kiện
                </option>
                <option value="">Tất cả sự kiện</option>
                <option value="stage">Sân khấu nghệ thuật</option>
                <option value="nightLight">NightLight</option>
                <option value="onlineEvent">Online Event</option>
            </select>

            <div className="mt-2 text-sm text-gray-500">
                {selectedOptions.length > 0 && (
                    <p>
                        Đã chọn: {selectedOptions.join('. ')}
                    </p>
                )}
                {selectedOptions.length === 0 && (
                    <p>Nếu chọn "Tất cả sự kiện", các sự kiện khác sẽ không được chọn.</p>
                )}
            </div>
        </div>
    );
};

export default MySelect;
