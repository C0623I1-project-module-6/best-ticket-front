import {Link} from "react-router-dom";

export default function OrganizerSidebar() {
    const steps = [
        {
            title: "Hồ sơ ban tổ chức",
            url: "/my-event/legal"
        },
        {
            title: "Sự kiện đã tạo",
            url: ""
        },
        {
            title: "Số dư tài khoản",
            url: ""
        },
        {
            title: "Thông tin tài khoản",
            url: ""
        }
    ]
    return (

        <div className="fixed w-1/4 h-full text-white font-serif bg-gray-800 pt-10 pl-5">
            {steps.map((step, index) => (
                <div key={index} className="flex gap-5 items-center hover:bg-gray-400 hover:text-black
               py-3 px-5 mb-2">
                    <span className="rounded-full bg-green-400 h-10 w-10 flex items-center justify-center">
                        {index + 1}
                    </span>
                    <Link to={step.url}>
                        <p>{step.title}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
