import {BsTicket} from "react-icons/bs";
import SearchBar from "./partials/SearchBar.jsx";
import logo from "../../assets/img/logo/best-ticket-logo-v3.svg";

const Header = () => {
    return (
        <div className="h-[100px] bg-[#2dc275] text-white">
            <div className="px-6  flex  justify-center gap-20 items-center text-sm border-b-2 border-gray-400">
                <div className="flex items-start gap-20 ">
                    <img src={logo} alt="" className="h-[96px] w-[100px] m-0"/>
                    <SearchBar/>
                </div>
                <div className="flex items-center gap-3 font-semibold">
                <span className="cursor-pointer border-green-600 border-[1px]
                hover:bg-light-white hover:text-black
                rounded-3xl font-bold px-6 py-2">
                    Tạo sự kiện
                </span>
                    <div className="cursor-pointer flex items-center gap-3">
                        <BsTicket size={30}/>
                        <span>Đăng nhập|Đăng ký</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;
