import {Breadcrumbs} from "@material-tailwind/react";
import image from "../../../assets/img/User.png"
import {FaCalendar, FaTicket, FaUser} from "react-icons/fa6";
import {Link} from "react-router-dom";
import TicketDetails from "./TicketDetails.jsx";
import {useState} from "react";

function TicketHistory() {
    const [keyword,setKeyword] = useState("");
    const sendKeyword = (data) =>{
        setKeyword(data)
    }

    return (
        <div className="bg-[#27272a] w-full">
            <div className="flex-col mx-80 px-28 gap-10  space-y-10 text-white">
                <div className="space-y-10">
                    <Breadcrumbs className="bg-dark ">
                        <Link to="/" className="opacity-60 text-white">
                            Home page
                        </Link>
                        <Link to="/" className="opacity-60 text-white">
                            My Tickets
                        </Link>
                    </Breadcrumbs>
                </div>
                <div className="flex gap-10 items-center justify-items-center">
                    <div className="flex-col items-center justify-between w-60 space-y-5">
                        <div className="flex gap-1 items-center justify-items-center space-x-3">
                            <div className="items-center justify-items-center">
                                <img src={image} alt="" className="h-[30px] w-[30px]"/>
                            </div>
                            <div className="flex-col space-y-0">
                                <div>Account of</div>
                                <div>Ha Bao An</div>
                            </div>
                        </div>
                        <div className="flex-col items-center space-y-3 justify-items-center justify-center">
                            <div className="flex gap-2 items-center cursor-pointer">
                                <FaUser/>
                                My Account
                            </div>
                            <div className="flex gap-2 items-center cursor-pointer">
                                <FaTicket/>
                                My Tickets
                            </div>
                            <div className="flex gap-2 items-center cursor-pointer">
                                <FaCalendar/>
                                My Created Event
                            </div>
                        </div>

                    </div>
                    <div className="flex-col items-center space-y-3 justify-items-center justify-center font-bold">
                        <div>
                            My Tickets
                        </div>
                        <div>
                            <hr className="text-white"/>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                            <div className="btn rounded-full btn-xs w-[150px] ">All</div>
                            <div className="btn rounded-full btn-xs w-[150px] ">Finished</div>
                            <div className="btn rounded-full btn-xs w-[150px] ">Processing</div>
                            <div className="btn rounded-full btn-xs w-[150px] ">Cancelled</div>
                        </div>
                        <div className="flex items-center justify-center gap-5">
                            <div className="btn btn-xs btn-outline rounded-full text-white" onClick={()=>sendKeyword("upcoming")}>Upcoming</div>
                            <div className="btn btn-xs btn-outline rounded-full text-white" onClick={()=>sendKeyword("past")}>Past</div>
                        </div>
                        <div className="flex items-center justify-between overflow-y-auto overflow-x-hidden">
                           <TicketDetails value={keyword}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketHistory
