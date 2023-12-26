import Sidebar from "../component/Sidebar.jsx";
import {FaSearch, FaSignInAlt} from "react-icons/fa";
import {FaEnvelope, FaRegBell} from "react-icons/fa6";
import {useNavigate} from "react-router-dom";
import {ImUserPlus} from "react-icons/im";
import AdminHeader from "../component/AdminHeader.jsx";

const UserLayout = ({children}) => {

    const user = {
        username: "admin",
        imgUrl: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
    }
    return (
        <div className="flex">
            <div className=" h-full">
                <Sidebar/>
            </div>
            <div className="flex-col gap-2.5 justify-center  w-full h-fit">
                <div className="flex justify-center  w-full h-fit">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default UserLayout;