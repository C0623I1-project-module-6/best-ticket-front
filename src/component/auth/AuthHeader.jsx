import {FaFacebook, FaGithub, FaGoogle} from "react-icons/fa6";
import {Tooltip} from "@material-tailwind/react";
import logo from "../../assets/img/logo/best-ticket-bg-v3.png";
import {useNavigate} from "react-router-dom";

function AuthHeader(props) {
    const navigate = useNavigate();

    return (
        <>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm m-0">
                <Tooltip content="Back Home">

                    <img
                        className="mx-auto h-[150px] w-[200px] cursor-pointer"
                        src={logo}
                        alt="Your Company"
                        onClick={() => navigate("/")}
                    />
                </Tooltip>
                <h2 className="mt-3 mb-9 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    {props.name}
                </h2>
                <div className="flex justify-center gap-3 mt-2 h-[32px]">
                    <div className="w-full">
                        <div
                            className="w-full h-full flex gap-3 items-center border cursor-pointer text-dark-purple
                                hover:bg-[#ecf5ff] hover:text-[#409eff]
                                justify-center rounded-full "
                        >
                            <FaFacebook className="text-[#3b5998]"/>
                            Facebook
                        </div>
                    </div>
                    <div className="w-full ">
                        <div
                            className="w-full h-full flex gap-3 items-center border cursor-pointer text-dark-purple
                                hover:bg-[#ecf5ff] hover:text-[#409eff]
                                justify-center rounded-full
                                "
                        >
                            <FaGoogle className="text-[#e94820]"/>
                            Google
                        </div>
                    </div>
                    <div className="w-full">
                        <div
                            className="w-full h-full flex gap-3 items-center border cursor-pointer text-dark-purple
                                hover:bg-[#ecf5ff] hover:text-[#409eff]
                                justify-center rounded-full "
                        >
                            <FaGithub/>
                            Github
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    OR
                </div>
            </div>
        </>
    )
}

export default AuthHeader;
