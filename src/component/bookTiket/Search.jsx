import React, { useState } from 'react';
import { IoListOutline } from "react-icons/io5";
import { FcCheckmark } from "react-icons/fc";
import SelectDay from "./partials/SelectDay.jsx";
import Event from "./partials/Event.jsx";
import MySelect from "./partials/MySelect.jsx";

export default function Search() {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [showOptions, setShowOptions] = useState(false);

    const options = ['Thể thao', 'Giải trí', 'Nhạc sống', 'nightlight', 'onlineevent','fsfsdfsdf', 'fswdff', 'fffff', 'daybyday', 'onlinfdfdfeevent'];

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const toggleOption = (option) => {
        const isSelected = selectedOptions.includes(option);
        const updatedOptions = isSelected
            ? selectedOptions.filter((selectedOption) => selectedOption !== option)
            : [...selectedOptions, option];

        setSelectedOptions(updatedOptions);
    };

    return (
        <div className="w-full bg-white m-2 rounded-lg p-2 ">
            <div className="flex h-[20vh] gap-3">
                <div>
                    <select className="  border-2 border-gray-300 rounded-lg cursor-pointer p-2">
                        <option>Tất cả địa điểm</option>
                        <option>THCM</option>
                        <option>HN</option>
                        <option>DN</option>
                        <option>QN</option>
                    </select>
                </div>
                <div className="flex-row items-center gap-1 w-[500px] ">
                    <div className="flex border-2 border-gray-300 rounded-lg gap-2 cursor-pointer p-2 ">
                        <IoListOutline />
                        <div onClick={toggleOptions} >
                            {selectedOptions.length === 0
                                ? 'Tất cả sự kiện'
                                : selectedOptions.join(',')}
                        </div>
                    </div>
                    <div className="relative z-10 w-full">
                        {showOptions && (
                            <div className="absolute top-2 right-0 bg-white w-full ">
                                <div onClick={() => setSelectedOptions([])} className="cursor-pointer p-2">
                                    Tất cả sự kiện
                                </div>
                                {options.map((option, index) => (
                                    <div
                                        key={index}
                                        onClick={() => toggleOption(option)}
                                        className="cursor-pointer p-2"
                                    >
                                        <div className="flex items-center gap-2">
                                            {option}
                                            <FcCheckmark className={selectedOptions.includes(option) ? '' : 'hidden'} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div >
                    <SelectDay />
                </div>
            </div>
            <div className="grid grid-cols-3">
                <Event/>                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>

            </div>
        </div>
    );
}
