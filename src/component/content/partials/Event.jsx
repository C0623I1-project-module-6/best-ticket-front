import React, { useEffect, useRef } from 'react';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import { CiLocationOn } from "react-icons/ci";
import {GiDuration} from "react-icons/gi";

export default function Event({ event }) {

    const tooltipRef = useRef(null);

    useEffect(() => {
        tippy(tooltipRef.current, {
            content: event.name,
        });
    }, []);

    return (
        <div className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-amber-100 cursor-pointer hover:scale-105 hover:bg-amber-50 transition p-3">
            <div className="relative aspect-w-16 aspect-h-9 w-full h-full rounded-md overflow-hidden">
                <img src={event.image} alt="" className="object-cover w-full h-[160px] " />
            </div>
            <div className="flex flex-col items-start w-full pt-4 gap-y-1">
                <p className="font-bold truncate w-full" ref={tooltipRef}>
                    {event.name}
                </p>
                <p>20/2/2024</p>
                <div className="flex mt-2 gap-1 items-center">
                    <CiLocationOn/>
                    <p className="text-neutral-400 text-sm  w-full">
                        {event.address}
                    </p>
                </div>
                <div className="flex mt-2 gap-1 items-center">
                    <GiDuration />
                    <p className="text-neutral-400 text-sm w-full">
                        {event.duration}
                    </p>
                </div>

            </div>
        </div>
    );
}
