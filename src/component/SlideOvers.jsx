import {Fragment, useEffect, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {FaLightbulb, FaRegMoon, FaSun, FaX} from "react-icons/fa6";
import {Button, Rating, Slider, Switch, Typography} from "@material-tailwind/react";
import {PiSun} from "react-icons/pi";
import {HiOutlineComputerDesktop} from "react-icons/hi2";

export default function SlideOvers(props) {
    const [rated, setRated] = useState(4);
    const [open, setOpen] = useState(props.data)
    useEffect(() => {
        setOpen(props.data)
    }, [props]);
    const sendData = (data) => {
        props.parentCallback(data);
    };
    useEffect(() => {
        sendData(open)
    }, [open]);

    function RatedIcon() {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
            >
                <path
                    d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
            </svg>
        );
    }

    function UnratedIcon() {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
            </svg>
        );
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-500"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-500"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">

                                        </div>
                                    </Transition.Child>
                                    <div className="flex h-full flex-col overflow-y-scroll bg-[#f1f5f9] py-6 shadow-xl">
                                        <div className="px-4 sm:px-6">
                                            <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                                <button
                                                    type="button"
                                                    className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <FaX/>
                                                </button>
                                            </Dialog.Title>
                                        </div>
                                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                            <div className="flex-col space-y-20">
                                                <div className="flex-col space-y-7">
                                                    <div>
                                                        <span className="font-bold text-2xl">Theme</span>
                                                    </div>
                                                    <div className="flex gap-1 justify-between">
                                                        <PiSun color="#facc15" size={50} className="cursor-pointer"/>
                                                        <FaRegMoon size={50} className="cursor-pointer"/>
                                                        <HiOutlineComputerDesktop size={50} className="cursor-pointer"/>
                                                    </div>
                                                </div>
                                                <div className="flex space-y-7 mt-10">
                                                    <div>
                                                        <span className="font-bold text-2xl">
                                                            Font Size
                                                        </span>
                                                        <div className="flex gap-3 mt-3 w-full">
                                                            {rated * 7}
                                                            <Rating
                                                                value={4}
                                                                onChange={(value) => setRated(value)}
                                                                ratedColor="blue"
                                                                ratedIcon={<RatedIcon/>}
                                                                unratedIcon={<UnratedIcon/>}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex space-y-7 mt-10">
                                                    <div>
                                                        <span className="font-bold text-2xl">
                                                            Input Style
                                                        </span>
                                                        <div className="flex gap-3 mt-3 w-full">
                                                            <div className="flex gap-3">
                                                                <span>Outlined</span>
                                                                <Switch size={50}/>
                                                                <span>Filled</span>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
