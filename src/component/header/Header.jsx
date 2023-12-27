import { BsTicket } from "react-icons/bs";
import SearchBar from "./partials/SearchBar.jsx";
import logo from "../../assets/img/logo.png";

const Header = () => {
    return (
        <div className="px-6 bg-white flex text-gray-800 justify-between items-center text-sm border-b-2 border-gray-400">
            <div className="flex items-center gap-7 ">
                <img src={logo} alt="" className="h-[44px] w-[44px]" />
                <SearchBar />
            </div>
            <div className="flex items-center gap-3 font-semibold">
                <span className="cursor-pointer border-green-600 border-[1px] rounded-3xl text-green-600 font-bold px-6 py-2"> Tạo sự kiện</span>
                <div className="cursor-pointer flex items-center gap-3">
                    <BsTicket size={30} />
                    <span>Đăng nhập|Đăng ký</span>
                </div>

            </div>
        </div>
    );
};

export default Header;
