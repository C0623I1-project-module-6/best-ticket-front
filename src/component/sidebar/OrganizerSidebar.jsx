import {useLocation, useNavigate} from "react-router-dom";
import {twMerge} from 'tailwind-merge';

export default function OrganizerSidebar() {
    const location = useLocation();
    const pathName = location.pathname;
    const navigate = useNavigate();
    const steps = [
        {
            title: "Hồ sơ ban tổ chức",
            url: "/my-event/legal",
            active: "/my-event/legal" === pathName
        },
        {
            title: "Sự kiện đã tạo",
            url: "/my-event/legal/createdEvent",
            active: "/my-event/legal/createdEvent" === pathName
        },
        {
            title: "Số dư tài khoản",
            url: "123",
            active: "123" === pathName
        },
        {
            title: "Thông tin tài khoản",
            url: "345",
            active: "345" === pathName
        }
    ]
    console.log(steps[0].active)
    return (

        <div className="fixed w-1/4 h-full text-white font-serif bg-gray-800 pt-10 pl-5">
            {steps.map((step, index) => (
                <div key={index}
                     className={twMerge('flex gap-5 items-center hover:bg-gray-400 hover:text-black py-3 px-5 mb-2',step.active && 'bg-gray-400 text-black ')}
                     onClick={()=> navigate(step.url)}
                >
                    <span className="rounded-full bg-green-400 h-10 w-10 flex items-center justify-center">
                        {index + 1}
                    </span>
                        <p>{step.title}</p>
                </div>
            ))}
        </div>
    );
}
