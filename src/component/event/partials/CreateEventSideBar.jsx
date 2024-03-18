import logo from '../../../assets/img/logo/logo-auth-header-light.svg'
import {useLocation, useNavigate} from "react-router-dom";
import {Avatar} from "@material-tailwind/react";
import avatar from "../../../assets/img/User.png";
import {useSelector} from "react-redux";
import {twMerge} from 'tailwind-merge';

export default function CreateEventSideBar() {
    const location = useLocation();
    const pathname = location.pathname;
    const user = useSelector((state) => state.user.value);
    const navigate = useNavigate();
    const steps = [
        {
            label: "Thông tin sự kiện",
            active: pathname === '/event/create',
            href: '/event/create'
        },
        {
            label: "Thời gian & loại vé",
            active: pathname === '/event/create/step2',
            href: '/event/create/step2'
        },
        {
            label: "Thông tin thanh toán",
            active: pathname === '/event/create/step3',
            href: '/event/create/step3'
        }
    ]
    return (
        <div className="w-[25vw] bg-blue-gray-800  text-white text-xl ">
            <div className="flex gap-5 items-center p-5  justify-between  bg-blue-gray-900">
                <img src={logo} alt=""
                     className="h-[60px] w-[60px] m-0 cursor-pointer border-black rounded-lg bg-green-400 "
                     onClick={() => navigate("/")}/>
                <div>
                    <span>{user ? user.name : "User"}</span>
                    <Avatar
                        size="md"
                        alt={avatar}
                        src={user ? user.avatar : <img src={avatar} alt=""/>}
                        className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
                    />

                </div>
            </div>
            <div className="px-3 py-3 flex-row space-y-2">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={twMerge('cursor-pointer flex gap-5 items-center  p-5', step.active && 'bg-blue-200 text-black rounded-lg')}
                        onClick={() => {
                            navigate(step.href)
                        }}>
                        <span
                            className="rounded-full bg-green-400 h-10 w-10 flex items-center justify-center">{index + 1}</span>
                        <p>{step.label}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}
