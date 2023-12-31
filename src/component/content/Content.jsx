import LeftSVG from '../../assets/img/heading-img-1-left.svg';
import RightSVG from '../../assets/img/heading-img-1-right.svg';
import Event from "./partials/Event.jsx";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
// Import Swiper styles
import 'swiper/css/bundle';
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvent } from "../../features/EventSlice.js";
import { CarouselDefault } from "../CarouselDefault.jsx";

export default function Content() {
    const dispatch = useDispatch();
    const events = useSelector((state) => state.event.events);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        dispatch(getAllEvent(currentPage));
    }, [currentPage]);
    console.log(currentPage)
    return (
        <div className=" w-full bg-white dark:bg-[#121212] mx-auto overflow-x-hidden h-full ">
            <div className=" w-full">
                <div className="w-[1028px] h-[500px] p-5 m-4 mx-auto">
                    <CarouselDefault />
                </div>
            </div>

            <div className="flex justify-center mb-0 space-x-2 ">
                <div className="flex place-items-end justify-center w-[70%] border-b-4 border-gray-800 ">
                    <img src={LeftSVG} alt="" className="" />
                    <span className="pb-2  border-gray-800 text-green-600 font-bold text-3xl">Sự kiện nổi bật</span>
                    <img src={RightSVG} alt="" className="" />
                </div>
            </div>
            <div className="w-full overflow-hidden overflow-y-auto mt-2 mr-2">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 p-4">
                        {events.map((event) => (
                            <Event key={event.id} event={event} />
                        ))}
                    </div>
            </div>
            <div className="flex items-center justify-center h-20">
                <Stack
                    spacing={2}
                >
                    <Pagination
                        count={20}
                        color="primary"
                        page={currentPage}
                        onChange={(event, value) => setCurrentPage(value)}
                    />
                </Stack>
            </div>
            <div className="pt-10 pb-10 text-center">
                <div className="pt-10 pb-10 text-center">
                    <hr className="w-full  border-t-2 border-gray-300" />
                    <span className="cursor-pointer bg-green-500 rounded-3xl text-white font-bold px-10 py-2">Xem thêm</span>
                </div>
            </div>
        </div>
    );
}
