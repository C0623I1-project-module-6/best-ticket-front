import CreateEventSideBar from "./partials/CreateEventSideBar.jsx";
import {Button, Input} from "@material-tailwind/react";
import React, {useEffect, useState} from "react";
import { ProvincesApi } from "../../api/ProvincesApi.js";
import { Select, Option } from "@material-tailwind/react";
import {findAllEventType} from "../../api/EventTypeApi.js";
import banner from "../../assets/img/cover-event.jpg"
import {FcCheckmark} from "react-icons/fc";
import {IoListOutline} from "react-icons/io5";
export default function CreateEvent(){
    const [email, setEmail] = useState("");
    const onChange = ({ target }) => setEmail(target.value);
    const [selectedEventTypes, setSelectedEventTypes] = useState([]);
    const [eventTypes, setEventTypes] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [selectedProvince,setSelectedProvince] = useState("");
    const [selectedDistrict,setSelectedDistrict] = useState("")

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [showOptions, setShowOptions] = useState(false);


    const fetchApiEventTypes = async () => {
        try {
            const result = await findAllEventType();
            setEventTypes(result.data.eventTypeList);
        } catch (error) {
            console.error('Error EventTypeAPI', error);
        }
    };
    useEffect(() => {
        fetchApiEventTypes();
    }, []);
    useEffect(() => {
        const fetchProvinceData = async()=>{
            const ProvincesData= await ProvincesApi();
            setProvinces(ProvincesData);
        }
        fetchProvinceData();
    }, []);

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
    return(
        <div className="flex h-screen  ">
            <CreateEventSideBar/>
            <div className="w-[70vw] overflow-y-auto ">
                <div className=" mx-auto">
                    {/*<img src={banner} alt="" className="w-full object-cover bg-gradient-to-b from-blue-500" />*/}
                    <div className="relative overflow-hidden">
                        <img src={banner}  className="w-full  object-cover"  alt=""/>
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500 opacity-50"></div>
                        <div className="absolute inset-0 p-5 flex flex-col items-center justify-center text-white">
                            <h1 className="text-4xl font-bold mb-4">Tải ảnh bìa lên</h1>
                            <p className="text-lg">giới hạn kích thước là 1MB</p>
                        </div>
                    </div>
                    <h1 className="text-center mt-5 text-2xl font-bold">Thông tin sự kiện</h1>
                    <div className="w-[80%] p-5 mx-auto">
                        <Input label="Event Name" />
                    </div>
                    <div className="w-[80%] flex flex-col md:flex-row gap-5 p-5 mx-auto">
                        <Select
                            label="Tỉnh thành"
                            onChange={(value) => {
                                setSelectedProvince(value);
                            }}
                        >
                            {provinces.map((province) => (
                                <Option key={province.code} value={province.name}>
                                    {province.name}
                                </Option>
                            ))}
                        </Select>
                        {provinces.map((province) => {
                            return province.name === selectedProvince ? (
                                <Select
                                    key={province.code}
                                    label="Quận huyện"
                                    onChange={(value) => {
                                        setSelectedDistrict(value);
                                    }}
                                >
                                    {province.districts.map((district) => (
                                        <Option key={district.code} value={district.code}>
                                            {district.name}
                                        </Option>
                                    ))}
                                </Select>
                            ) : null;
                        })}
                    </div>
                    <div className="w-[80%] p-5 mx-auto">
                        <Input label="Địa chỉ chi tiết" />
                    </div>
                    <div className="w-[80%] flex gap-5 p-5 mx-auto">
                        <Select
                            label=" Thể loại sự kiện "
                        >
                            {eventTypes.map((eventType, index) => (
                                <Option key={index} value={eventType.name}>
                                    {eventType.name}
                                </Option>
                            ))}
                        </Select>
                    </div>
                    <div className="w-[80%] flex gap-5 mx-auto">
                        <div className="p-4 w-full">
                            <label htmlFor="EventDetail" className="block text-sm font-medium text-gray-700">
                                Thông tin sự kiện
                            </label>
                            <textarea
                                id="EventDetail"
                                name="EventDetail"
                                rows="4"
                                className="mt-1 p-2 border rounded-md w-full"
                                placeholder="Chi tiết về sự kiện..."
                            />
                        </div>
                    </div>
                    <div className="flex-row items-center gap-1 w-[70%] mx-auto">
                        <div
                            className="flex border-2 border-gray-300 rounded-lg gap-2 cursor-pointer p-2"
                            onClick={toggleOptions}
                        >
                            <IoListOutline size={23} />
                            <div>
                                {selectedOptions.length === 0
                                    ? 'Tất cả sự kiện'
                                    : selectedOptions.join(',')}
                            </div>
                        </div>
                        <div className="relative z-10 w-full">
                            {showOptions && (
                                <div className="absolute top-2 right-0 bg-white w-full rounded-lg">
                                    <div
                                        onClick={() => setSelectedOptions([])}
                                        className="cursor-pointer hover:bg-green-200 p-2 rounded-lg"
                                    >
                                        Tất cả sự kiện
                                    </div>
                                    {eventTypes.map((eventType, index) => (
                                        <div
                                            key={index}
                                            onClick={() => toggleOption(eventType.name)}
                                            className="cursor-pointer p-2 hover:bg-green-200 rounded-lg border-gray-600"
                                        >
                                            <div className="flex items-center gap-2">
                                                {eventType.name}
                                                <FcCheckmark
                                                    className={
                                                        selectedOptions.includes(eventType.name)
                                                            ? ''
                                                            : 'hidden'
                                                    }
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}