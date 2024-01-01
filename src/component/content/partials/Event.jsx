import React, { useEffect, useRef } from 'react';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import {FaPlay} from "react-icons/fa"; // Import CSS for tippy.js

export default function Event() {
    const img =
        'https://images.tkbcdn.com/1/780/300/Upload/eventcover/2023/11/30/9DAAA1.jpg';

    const tooltipRef = useRef(null);

    useEffect(() => {
        tippy(tooltipRef.current, {
            content:
                '[LULULOLA SHOWfdsfdadddddddddddddddd]',
        });
    }, []);

    return (
        <div className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-amber-100 cursor-pointer hover:scale-105 hover:bg-amber-50 transition p-3">
            <div className="relative aspect-w-16 aspect-h-9 w-full h-full rounded-md overflow-hidden">
                <img src={img} alt="" className="object-cover " />
            </div>
            <div className="flex flex-col items-start w-full pt-4 gap-y-1">
                <p className="font-bold truncate w-full" ref={tooltipRef}>
                    [LULULOLA SHOWfdsfdadddddddddddddddddddddsđddđddddddddddddddddddđ]
                </p>
                <p>20/2/2014</p>
                <p className="text-neutral-400 text-sm pb-4 w-full">
                    Văn Mai Hương
                </p>
            </div>
        </div>
    );
}
