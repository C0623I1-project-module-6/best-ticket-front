import logo from "../../assets/img/logo/best-ticket-logo-v1.svg"
import {FaCogs, FaFileContract, FaHome, FaSignOutAlt} from "react-icons/fa";
import {FaUsers} from "react-icons/fa6";
import {MdEventAvailable} from "react-icons/md";
import {ImTicket} from "react-icons/im";
import {useNavigate, useParams} from "react-router-dom";
import {Avatar, Typography} from "@material-tailwind/react";

function AdminSidebar() {
    const navigate = useNavigate();
    const param = useParams();
    console.log(param)
    const itemDashboard = [
        {icon: <FaHome size={25}/>, label: "Dashboard", path: "/admin"},
        {icon: <FaUsers size={25}/>, label: " Users", path: "/admin/user"},
        {icon: <FaFileContract size={25}/>, label: " Bookings", path: "/admin/user"},
        {icon: <MdEventAvailable size={25}/>, label: " Events", path: "/admin/user"},
        {icon: <ImTicket size={25}/>, label: " Tickets", path: "/admin/user"},
    ]
    const itemFooter = [
        {icon: <FaCogs size={25}/>, label: "Setting", path: "/admin"},
        {icon: <FaSignOutAlt size={25}/>, label: "Log out", path: "/admin"},
    ]
    return (
        <>
            <div className="w-full h-screen max-h-full flex-col overflow-y-auto bg-deep-purple-700
            justify-end
            ">
                <div className="flex w-[250px] gap-2 h-[100px]
                items-center justify-center
                cursor-pointer text-2xl font-bold text-white font-serif
                ">
                    <Avatar
                        size="lg"
                        alt="avatar"
                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                        className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
                    />
                    <span>
                        Admin
                    </span>
                </div>
                <hr/>
                {
                    itemDashboard.map(({icon, label, path}, index) => (
                        <div key={index} className="flex gap-5 items-center p-2 justify-items-start
                        cursor-pointer text-sm
                        text-white
                        transition-transform transform-gpu
                        hover:bg-white hover:text-black hover
                        " onClick={() => navigate(path)}>
                            <div>
                                {icon}
                            </div>
                            <div>{label}</div>
                        </div>
                    ))
                }
                <hr/>
                {
                    itemFooter.map(({icon, label, path}, index) => (
                        <div key={index} className="flex gap-5 items-center p-2 justify-items-start
                        cursor-pointer
                        text-white text-sm
                        transition-transform transform-gpu
                        hover:bg-white hover:text-black hover
                        ">
                            <div>
                                {icon}
                            </div>
                            <div>{label}</div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default AdminSidebar;
