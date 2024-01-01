import {FaSearch, FaSignInAlt} from "react-icons/fa";
import {FaEnvelope, FaRegBell} from "react-icons/fa6";
import {ImUserPlus} from "react-icons/im";
import {useNavigate} from "react-router-dom";

function AdminHeader() {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-between h-[70px] shadow-lg ps-[25px] pe-3">
            <div className="flex items-center rounded-[5px]">
                <input type="text"
                       className="bg-gray-100 h-[40px] outline-none pl-[13px]
                            w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal"
                       placeholder="Search"/>
                <div
                    className="bg-blue-600 h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]">
                    <FaSearch color="white"/>
                </div>
            </div>
            <div className="flex items-center gap-[15px] relative">
                <div className="flex items-center gap-[25px] border-r-[1px] pr-[25px]">
                    <FaRegBell className="cursor-pointer w-[24px]"/>
                    <FaEnvelope className="cursor-pointer w-[24px]"/>
                </div>
                <div className="flex items-center gap-[15px] relative">
                    <ImUserPlus className="cursor-pointer w-[24px]" />
                    <FaSignInAlt className="cursor-pointer w-[24px]"/>
                </div>
            </div>
        </div>

    )
}

export default AdminHeader;
