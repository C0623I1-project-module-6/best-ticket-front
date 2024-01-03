import React, {useEffect, useState} from 'react';
import { IoListOutline } from "react-icons/io5";
import { FcCheckmark } from "react-icons/fc";
import SelectDay from "./partials/SelectDay.jsx";
import Event from "./partials/Event.jsx";
import { CiLocationOn } from "react-icons/ci";
import {findAllEventType} from "../../redux/api/EventTypeApi.js";
import {useDispatch, useSelector} from "react-redux";
import {getAllEvent, getEventsByName} from "../../redux/features/EventSlice.js";


export default function Search() {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const [showOptions, setShowOptions] = useState(false);

    const [eventTypes, setEventTypes] = useState([]);

    const dispatch = useDispatch();

    const events = useSelector((state) => state.event.events);

    useEffect(() => {
        dispatch(getEventsByName());
    }, []);
    const getAllEventType = async () => {
        try {
            let result = await findAllEventType();
            if (result !== null) {
                setEventTypes(result);
            }
        } catch (error) {
            console.error("Error EventTypeAPI", error);
        }
    };
    useEffect(() => {
        getAllEventType();
    }, []);
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
            <div className="flex  gap-3">
                <div className=" flex border-2 border-gray-300 rounded-lg cursor-pointer p-2">
                    <CiLocationOn size={23}/>
                    <select >
                        <option>Tất cả địa điểm</option>
                        <option>THCM</option>
                        <option>HN</option>
                        <option>DN</option>
                        <option>QN</option>
                    </select>
                </div>
                <div className="flex-row items-center gap-1 w-[500px] ">
                    <div className="flex border-2 border-gray-300 rounded-lg gap-2 cursor-pointer p-2 "
                         onClick={toggleOptions}>
                        <IoListOutline size={23} />
                        <div  >
                            {selectedOptions.length === 0
                                ? 'Tất cả sự kiện'
                                : selectedOptions.join(',')}
                        </div>
                    </div>
                    <div className="relative z-10 w-full">
                        {showOptions && (
                            <div className="absolute top-2 right-0 bg-white w-full rounded-lg ">
                                <div onClick={() => setSelectedOptions([])} className="cursor-pointer hover:bg-green-200 p-2 rounded-lg">
                                    Tất cả sự kiện
                                </div>
                                {options.map((option, index) => (
                                    <div
                                        key={index}
                                        onClick={() => toggleOption(option)}
                                        className="cursor-pointer p-2 hover:bg-green-200 rounded-lg"
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
            <div className="grid grid-cols-3 mt-10">
                {events.map((event) => (
                    <Event key={event.id} event={event} />
                ))}
            </div>
        </div>
    );
}
