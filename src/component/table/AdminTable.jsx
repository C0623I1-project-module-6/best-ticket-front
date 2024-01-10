import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPageBookings, getPageUsers, selectBookings, selectUsers} from "../../features/AdminSlice.js";
import Pagination from "../Pagination.jsx";
import {FaCheckCircle} from "react-icons/fa";
import {GiCancel} from "react-icons/gi";
import {TABLE_HEAD_BOOKING, TABLE_HEAD_USER} from "../../ultility/AppConstant.js";
import {HiChevronLeft, HiChevronRight} from "react-icons/hi2";


export default function AdminTable() {
    const param = useParams();
    const dispatch = useDispatch();
    const bookings = useSelector(selectBookings);
    const users = useSelector(selectUsers);
    const [data, setData] = useState([0]);
    const [dataHeader, setDataHeader] = useState([]);
    const [theme, setTheme] = useState(localStorage.getItem("theme"))
    console.log(param.param)
    useEffect(() => {
        localStorage.setItem("theme", theme);
        if (
            localStorage.theme === 'dark'
            || (!('theme' in localStorage)
                && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme]);
    useEffect(() => {
        if (param.param === "bookings") {
            setDataHeader(TABLE_HEAD_BOOKING)
            console.log(bookings)
            if (bookings === null) {
                dispatch(getPageBookings())
            } else {
                setData(bookings)
            }
            console.log(data)
        }
    }, [param,bookings]);
    useEffect(() => {
        if (param.param === "users") {
            setDataHeader(TABLE_HEAD_USER)
            console.log(users)
            if (users === null) {
                dispatch(getPageUsers())
            } else {
                setData(users)
            }
            console.log(data)
        }
    }, [param,users]);
    return (
        <>
            <div className="flex-col items-center justify-center justify-items-center">
                <div className="flex justify-center gap-4 items-center bg-amber-500">
                    <div>Right</div>
                    <div>Header</div>
                    <div>Left</div>
                </div>
                <div className="flex justify-center mt-3 ">
                    <div className="uppercase font-bold text-3xl">{param.param}</div>
                </div>
                <div className="flex  items-center justify-center mt-3">
                    <input id="search" type="text" placeholder="Search"
                           className="input input-sm input-bordered input-primary w-full max-w-xs"/>
                </div>
                <div className="flex justify-center mt-3 ">
                    <table className="table-lg table-zebra-zebra rounded-full border-2">
                        <thead className="bg-amber-500
                        dark:text-white dark:bg-black">
                        <tr>
                            {
                                dataHeader.map((data, index) => (
                                    <th scope="col" key={index}
                                        className="px-6 py-3 text-start text-xs font-bold font-sans uppercase">
                                        {data}
                                    </th>
                                ))
                            }
                            <th scope="col"
                                className="px-6 py-3 text-start text-xs font-bold font-sans uppercase">

                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-start text-xs font-bold font-sans uppercase">

                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-blue-gray-400">
                        {
                            data.map((user, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">{index + 1}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">{user.username}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">{user.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">{user.customerName === null ? "N/A" : user.customerName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">
                                        {
                                            user.customerName === null ? <GiCancel className="mx-auto" color={"red"}/> :
                                                <FaCheckCircle className="mx-auto" color={"blue"}/>
                                        }
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                        {
                                            user.organizerName === null ?
                                                <GiCancel className="mx-auto" color={"red"}/> :
                                                <FaCheckCircle className="mx-auto" color={"blue"}/>
                                        }
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                        {
                                            user.isActivated ? <button type="button"
                                                                       className="btn btn-outline btn-sm btn-active btn-info">Active
                                            </button> : <button type="button"
                                                                className="btn btn-outline btn-sm btn-disabled btn-info dark:btn-accent">Inactive
                                            </button>
                                        }
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                        <button type="button" className="btn btn-outline btn-sm btn-warning">Edit
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                        <button type="button" className="btn btn-outline btn-sm btn-error">Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                    <div className="flex flex-1 justify-between sm:hidden">
                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Previous
                        </a>
                        <a
                            href="#"
                            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Next
                        </a>
                    </div>
                    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm text-gray-700">
                                Showing <span className="font-medium">1</span> to <span
                                className="font-medium">10</span> of{' '}
                                <span className="font-medium">97</span> results
                            </p>
                        </div>
                        <div>
                            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                                 aria-label="Pagination">
                                <a
                                    href="#"
                                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                >
                                    <span className="sr-only">Previous</span>
                                    <HiChevronLeft className="h-5 w-5" aria-hidden="true"/>
                                </a>
                                {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                                <a
                                    href="#"
                                    aria-current="page"
                                    className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    1
                                </a>
                                <a
                                    href="#"
                                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                >
                                    2
                                </a>
                                <a
                                    href="#"
                                    className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                                >
                                    3
                                </a>
                                <span
                                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
                                <a
                                    href="#"
                                    className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                                >
                                    8
                                </a>
                                <a
                                    href="#"
                                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                >
                                    9
                                </a>
                                <a
                                    href="#"
                                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                >
                                    10
                                </a>
                                <a
                                    href="#"
                                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                >
                                    <span className="sr-only">Next</span>
                                    <HiChevronRight className="h-5 w-5" aria-hidden="true"/>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
