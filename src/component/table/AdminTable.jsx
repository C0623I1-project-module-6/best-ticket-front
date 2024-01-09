import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPageBookings, selectBookings} from "../../features/AdminSlice.js";
import Pagination from "../Pagination.jsx";
import {FaCheckCircle} from "react-icons/fa";
import {GiCancel} from "react-icons/gi";

const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Monitored",
        value: "monitored",
    },
    {
        label: "Unmonitored",
        value: "unmonitored",
    },
];

const TABLE_HEAD = ["Member", "Function", "Status", "Employed", ""];

const TABLE_ROWS = [
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        name: "John Michael",
        email: "john@creative-tim .com",
        job: "Manager",
        org: "Organization",
        online: true,
        date: "23/04/18",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
        name: "Alexa Liras",
        email: "alexa@creative-tim.com",
        job: "Programator",
        org: "Developer",
        online: false,
        date: "23/04/18",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
        name: "Laurent Perrier",
        email: "laurent@creative-tim.com",
        job: "Executive",
        org: "Projects",
        online: false,
        date: "19/09/17",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
        name: "Michael Levi",
        email: "michael@creative-tim.com",
        job: "Programator",
        org: "Developer",
        online: true,
        date: "24/12/08",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        email: "richard@creative-tim.com",
        job: "Manager",
        org: "Executive",
        online: false,
        date: "04/10/21",
    },
];

export default function AdminTable() {
    const param = useParams();
    const dispatch = useDispatch();
    const bookings = useSelector(selectBookings);
    const [data, setData] = useState([]);
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
            if (bookings === null) {
                dispatch(getPageBookings())
            } else {
                setData(bookings)
                setDataHeader([])
            }
            for (let key in data[0]) {
                dataHeader.push(key)
            }
            console.log(data)
        }
    }, [bookings]);
    console.log(data)
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
                <div className="flex justify-center mt-3 ">
                    <table className="table-lg table-zebra-zebra rounded-full border-2">
                        <thead className="bg-amber-500
                        dark:text-white dark:bg-black">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-start text-xs font-bold font-sans uppercase">
                                STT
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-start text-xs font-bold font-sans uppercase">
                                Username
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-start text-xs font-bold font-sans uppercase">
                                Email
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-start text-xs font-bold font-sans uppercase">
                                Name
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-start text-xs font-bold font-sans uppercase">
                                Customer
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-start text-xs font-bold font-sans uppercase">
                                Organizer
                            </th>
                            <th scope="col"
                                className="px-6 py-3 text-start text-xs font-bold font-sans uppercase">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-start text-xs font-bold font-sans uppercase"></th>
                            <th scope="col" className="px-6 py-3 text-start text-xs font-bold font-sans uppercase"></th>
                        </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-blue-gray-400">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">1</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">thinhlord</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">thinhlord@gmail.com</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">Thinh</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-white">
                                <FaCheckCircle className="mx-auto" color={"blue"}/></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                {/*<FaCheckCircle className="mx-auto" color={"blue"}/>*/}
                                <GiCancel className="mx-auto" color={"red"}/>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                {/*<button type="button" className="btn btn-outline btn-sm btn-active btn-info">Active*/}
                                {/*</button>*/}
                                <button type="button"
                                        className="btn btn-outline btn-sm btn-disabled btn-info dark:btn-accent">Inactive
                                </button>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                <button type="button" className="btn btn-outline btn-sm btn-warning">Edit</button>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                <button type="button" className="btn btn-outline btn-sm btn-error">Delete</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <Pagination/>
            </div>

        </>
    );
}
