import CreateEventSideBar from "../partials/CreateEventSideBar.jsx";
import {Input} from "@material-tailwind/react";
import React, {useEffect, useState} from "react";
import { ProvincesApi } from "../../../api/ProvincesApi.js";
import { Select, Option } from "@material-tailwind/react";
import {findAllEventType} from "../../../api/EventTypeApi.js";
import banner from "../../../assets/img/cover-event.jpg"
import SelectEvent from "../partials/SelectEvent.jsx";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import {addEvent} from "../../../features/EventSlice.js";
import {CalculateDuration} from "../../../ultility/CalculateDuration.js";
import { toast } from 'react-toastify';

export default function CreateEvent(){
    const [eventTypes, setEventTypes] = useState([]); // object
    const [provinces, setProvinces] = useState([]);
    const [selectedProvince,setSelectedProvince] = useState("");
    const [selectedDistrict,setSelectedDistrict] = useState("");
    const [address,setAddress] = useState("");
    const [selectedEventTypes,setSelectedEventTypes] = useState([]) //string
    const [startDate, setStartDate] = useState(dayjs());
    const [endDate, setEndDate] = useState(dayjs());
    const [eventName,setEventName] = useState("");
    const [eventDescription,setEventDescription] = useState("")
    const dispatch = useDispatch();

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
    const selectedData = (data) =>{
        setSelectedEventTypes(data);
    }

    const handleCreateEvent = () =>{
        const dateTimeFormat = "YYYY-MM-DDTHH:mm:ss";
        const startDateTime = dayjs(startDate, { dateFormat: dateTimeFormat });
        const endDateTime = dayjs(endDate, { dateFormat: dateTimeFormat });
        const duration = CalculateDuration(startDateTime,endDateTime)

        console.log(duration);

        const eventRequest = {
            name : eventName,
            description: eventDescription,
            status: 'PENDING_APPROVAL',
            duration: duration,
            image : "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/168134/Originals/cach-tao-dang-chup-anh-tet%20(1).jpg",
            province : selectedProvince,
            district : selectedDistrict,
            address  : address,
            startDateTime : startDate.valueOf(),
            eventTypeNames : selectedEventTypes
        };
        dispatch(addEvent(eventRequest))
            .then((response) => {
                console.log(response)
                toast.success('Event created successfully', {
                    position: toast.POSITION.TOP_CENTER,
                });
            })
            .catch((error) => {
                console.error('Error creating event:', error);
                toast.error('Error creating event', {
                    position: toast.POSITION.TOP_CENTER,
                });
            });
    }

    return(
        <div className="flex h-screen  ">
            <CreateEventSideBar/>
            <div className="w-[75vw] overflow-y-auto ">
                <div className=" mx-auto">
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
                        <Input
                            label="Event Name"
                            value={eventName}
                            onChange={(e)=>{setEventName(e.target.value)}} />
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
                                        <Option key={district.code} value={district.name}>
                                            {district.name}
                                        </Option>
                                    ))}
                                </Select>
                            ) : null;
                        })}
                    </div>
                    <div className="w-[80%] p-5 mx-auto">
                        <Input
                            label="Địa chỉ chi tiết"
                            value={address}
                            onChange={(e)=>{setAddress(e.target.value)}}
                        />
                    </div>
                    <SelectEvent eventTypes={eventTypes} callback={selectedData}/>
                    <div className="w-[80%] flex gap-5 mx-auto">
                        <div className="p-4 w-full">
                            <label htmlFor="EventDetail" className="block text-sm font-medium text-gray-700">
                                Thông tin sự kiện
                            </label>
                            <textarea
                                id="EventDetail"
                                name="EventDetail"
                                rows="5"
                                className="mt-1 p-2 border rounded-md w-full border-gray-400"
                                placeholder="Chi tiết về sự kiện..."
                                value={eventDescription}
                                onChange={(e)=>{setEventDescription(e.target.value)}}
                            />
                        </div>
                    </div>
                    <div className="w-[80%] flex  p-5 mx-auto gap-5">
                        <div className="flex-1">
                            <DateTimePicker
                                className="w-full"
                                label="Ngày và giờ bắt đầu sự kiện"
                                disablePast
                                value={startDate}
                                onChange={(date) => {
                                    setStartDate(date);
                                }}
                            />
                        </div>
                        <div className="flex-1">
                            <DateTimePicker
                                className="w-full"
                                label="Ngày và giờ kết thúc sự kiện"
                                minDate={startDate}
                                value={endDate}
                                onChange={(date) => {
                                    setEndDate(date);
                                }}
                            />
                        </div>
                    </div>
                    <div className="w-[80%] flex items-center justify-center p-5 mx-auto ">
                        <button className="border-black rounded-lg bg-green-400 py-2 px-5"
                                onClick={handleCreateEvent}
                        >
                            Tạo Event
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}