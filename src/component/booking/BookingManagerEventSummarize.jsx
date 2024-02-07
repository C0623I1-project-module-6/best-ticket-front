import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useRef} from 'react';
import {getEventById, selectEventById} from "../../features/EventSlice.js";
import UserFooter from "../footer/UserFooter.jsx"
import {selectUserLogin} from "../../features/user/UserSlice.js";
import {SlLocationPin} from "react-icons/sl";
import logo from "../../assets/img/logo/logo-auth-header-light.svg";
import {useFormatCurrency} from "../../ultility/customHook/useFormatCurrency.js";
import Chart from 'chart.js/auto';
import {FaCheck} from "react-icons/fa";
import {HiMiniXMark} from "react-icons/hi2";
import {FaRegQuestionCircle} from "react-icons/fa";

const BookingManagerEventSummarize = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const event = useSelector(selectEventById);
    const eventId = useParams().eventId;
    const {formatCurrency} = useFormatCurrency();

    useEffect(() => {
        dispatch(getEventById(eventId))
    }, [dispatch, eventId, navigate]);

    const user = useSelector(selectUserLogin);

    const chartContainerRef = useRef(null);

    useEffect(() => {
        if (event) {
            const chartData = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                    {
                        label: 'Revenue',
                        data: [1000, 2000, 1500, 3000, 2500, 4000],
                        borderColor: 'green',
                        fill: false,
                    },
                ],
            };

            const chartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        display: true,
                    },
                    y: {
                        display: true,
                        beginAtZero: true,
                        suggestedMax: 5000,
                    },
                },
            };

            const chartConfig = {
                type: 'line',
                data: chartData,
                options: chartOptions,
            };

            const lineChart = new Chart(chartContainerRef.current, chartConfig);

            return () => {
                lineChart.destroy();
            };
        }
    }, [event]);

    return (
        <>
            {user ? (<>
                <div className="mt-16 mb-10 mx-[10%] border border-gray-300 rounded-xl text-black">
                    <div className="flex">
                        <div className="w-1/6 m-10 pl-5">
                            <div className="flex items-center gap-3 font-semibold dark:text-white">
                                <img src={logo} alt="" className="h-[75px] w-[100px] m-0 cursor-pointer  "
                                     onClick={() => navigate("/")}/>
                            </div>
                        </div>
                        <div className="w-3/6 my-14">
                            <div className="text-xl pb-2">{event !== null ? event.name : <div>Loading...</div>}</div>
                            <div>{event !== null ? (
                                    <div className="flex">
                                        <div className="pr-1"><SlLocationPin/></div>
                                        <div>{event.location.address}, {event.location.district}, {event.location.province} </div>
                                    </div>
                                ) :
                                <div>Loading...</div>}</div>
                        </div>
                        <div className="m-14 pl-24">
                            <button className="border bg-gray-200 shadow shadow-xl" onClick={() => {
                                navigate(`/checkin-app`)
                            }}>
                                <div className="m-2">Check-in</div>
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#F1F1F1] mb-5 mx-16 flex">
                        <div className="p-2">Hiển thị</div>
                        <div className="py-2">
                            <select className="bg-white">
                                <option>01/2024</option>
                                <option>02/2024</option>
                            </select>
                        </div>
                        <div className="px-2 py-2">
                            <select className="bg-white">
                                <option>01/2024</option>
                                <option>02/2024</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mb-10 mx-[10%] bg-[#F1F1F1] border rounded-lg text-black">
                    <div className="flex">
                        <div className="p-5 text-xl w-1/2">Tổng thu nhập</div>
                        <div className="p-5 text-xl text-green-400 w-1/2">{formatCurrency(0)}</div>
                    </div>
                    <div className="flex">
                        <div className="py-5 pl-12 text-xl w-1/2">Vé đã thanh toán</div>
                        <div className="p-5 text-xl w-1/2">{formatCurrency(0)}</div>
                    </div>
                    <div className="flex">
                        <div className="py-5 pl-12 text-xl w-1/2">Mức phí</div>
                        <div className="p-5 text-xl w-1/2">N/A</div>
                    </div>
                    <div className="flex">
                        <div className="py-5 pl-12 text-xl w-1/2">Phí dịch vụ</div>
                        <div className="p-5 text-xl w-1/2">{formatCurrency(0)}</div>
                    </div>
                </div>
                <div className="bg-[#F1F1F1] mb-10 mx-[10%] flex text-black border rounded-lg">
                    <div className="my-3 p-2 font-bold">Từ</div>
                    <div className="my-3 py-2">
                        <select className="bg-white">
                            <option>01/2024</option>
                            <option>02/2024</option>
                        </select>
                    </div>
                    <div className="my-3 py-2 pl-2 font-bold">Đến</div>
                    <div className="my-3 px-2 py-2">
                        <select className="bg-white">
                            <option>01/2024</option>
                            <option>02/2024</option>
                        </select>
                    </div>
                    <button className="bg-[#ADD260] border m-3 shadow-lg shadow-[#829E48] rounded-lg">
                        <div className="px-5 text-white">Chọn</div>
                    </button>
                </div>
                <div className="justify-center flex text-white font-bold mb-10">
                    <div className="border rounded-lg bg-[#A1DA79] flex">
                        <div className="my-4 pl-5 text-3xl"><FaCheck/></div>
                        <div>
                            <div className="mx-3 mt-2">0</div>
                            <div className="mx-3 mb-2">Đã thanh toán</div>
                        </div>
                    </div>
                    <div className="mx-5 border rounded-lg bg-[#FD6161] flex">
                        <div className="my-2 pl-3 text-5xl"><HiMiniXMark/></div>
                        <div>
                            <div className="mx-3 mt-2">0</div>
                            <div className="mx-3 mb-2">Đã hủy</div>
                        </div>
                    </div>
                    <div className="border rounded-lg bg-[#F7B31F] flex">
                        <div className="my-2 pl-3 text-5xl"><HiMiniXMark/></div>
                        <div>
                            <div className="mx-3 mt-2">0</div>
                            <div className="mx-3 mb-2">Hết hạn</div>
                        </div>
                    </div>
                </div>
                <div className="mx-[10%]">
                    <div className="font-bold text-black">Thống kê vé</div>
                    <table className="w-full">
                        <thead className="text-white">
                        <tr>
                            <th className="bg-[#78C47F] border border-white">
                                <input
                                    type="checkbox"
                                    name="toggleAll"
                                    className="bg-white"
                                />
                            </th>
                            <th className="bg-[#78C47F] border border-white"><div className="m-5">Loại vé</div></th>
                            <th className="bg-[#78C47F] border border-white">Giá bán VND</th>
                            <th className="bg-[#78C47F] border border-white">
                                <div className="flex justify-center">
                                    <div>Vé đã thanh toán</div>
                                    <div className="p-1"><FaRegQuestionCircle/></div>
                                </div>
                            </th>
                            <th className="bg-[#78C47F] border border-white">
                                <div className="flex justify-center">
                                    <div>Vé đã xử lý</div>
                                    <div className="p-1"><FaRegQuestionCircle/></div>
                                </div>
                            </th>
                            <th className="bg-[#78C47F] border border-white">Tổng số vé</th>
                        </tr>
                        </thead>
                        <tbody className="text-right text-black">
                            <tr>
                                <td className="border border-[#DFDFDF] text-center">
                                    <input
                                        type="checkbox"
                                        className="bg-white"
                                    />
                                </td>
                                <td className="border border-[#DFDFDF] text-[#8AB447]">Vip</td>
                                <td className="border border-[#DFDFDF]">1,000</td>
                                <td className="border border-[#DFDFDF]">0</td>
                                <td className="border border-[#DFDFDF]">0</td>
                                <td className="border border-[#DFDFDF]">0</td>
                            </tr>
                            <tr>
                                <td className="border border-[#DFDFDF] text-center">
                                    <input
                                        type="checkbox"
                                        className="bg-white"
                                    />
                                </td>
                                <td className="border border-[#DFDFDF] text-[#8AB447]">Nhà nghèo</td>
                                <td className="border border-[#DFDFDF]">0</td>
                                <td className="border border-[#DFDFDF]">0</td>
                                <td className="border border-[#DFDFDF]">0</td>
                                <td className="border border-[#DFDFDF]">0</td>
                            </tr>
                            <tr>
                                <td colSpan="3" className="bg-[#F2F2F2] border border-[#DFDFDF] text-left font-bold">Tổng cộng</td>
                                <td className="bg-[#F2F2F2] border border-[#DFDFDF] font-bold">0</td>
                                <td className="bg-[#F2F2F2] border border-[#DFDFDF] font-bold">0</td>
                                <td className="bg-[#F2F2F2] border border-[#DFDFDF] font-bold">0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="my-10 mx-[18%]">
                    <div className="font-bold text-sm text-black">Ticket Sale By Date (Paid only)</div>
                    <div>
                        <canvas ref={chartContainerRef}/>
                    </div>
                </div>
                <div className=""><UserFooter/></div>
            </>) : (navigate('/'))}
        </>
    );
};


export default BookingManagerEventSummarize;