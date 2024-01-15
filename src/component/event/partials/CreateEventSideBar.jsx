import logo from '../../../assets/img/logo/logo-auth-header-light.svg'
import {useNavigate} from "react-router-dom";
import {Avatar} from "@material-tailwind/react";
import avatar from "../../../assets/img/User.png";
import {useSelector} from "react-redux";

export default function CreateEventSideBar(){
    const user = useSelector((state) => state.user.value);
    const navigate = useNavigate();
    const steps = ["Thông tin sự kiện","Thời gian & loại vé","Cài đặt","Thông tin thanh toán"]
    return(
        <div className="w-[25vw] bg-blue-gray-800  text-white text-xl ">
            <div className="flex gap-5 items-center p-5  justify-between  bg-blue-gray-900">
                <img src={logo} alt="" className="h-[60px] w-[60px] m-0 cursor-pointer border-black rounded-lg bg-green-400 "
                     onClick={() => navigate("/")}/>
                <div>
                    <span>{user ? user.name : "User" }</span>
                    <Avatar
                        size="md"
                        alt={avatar}
                        src={user ? user.avatar : <img src={avatar} alt="" />}
                        className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
                    />

                </div>
            </div>
            {steps.map((step,index)=>(
                <div key={index} className="flex gap-5 items-center hover:bg-white hover:text-black p-5 ">
                    <span className="rounded-full bg-green-400 h-10 w-10 flex items-center justify-center" >{index+1}</span>
                    <p>{step}</p>
                </div>
            ))}

        </div>
    )
}