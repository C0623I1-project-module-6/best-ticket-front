import {useNavigate} from "react-router-dom";
import logo from "../assets/img/logo/best-ticket-bg-v3.png"
import background from "../assets/img/logo/best-ticket-bg-v4.png"
import {FaFacebook, FaGithub, FaGoogle} from "react-icons/fa6";

function Login() {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center text-center gap-3 bg-white">
            <div className="flex bg-white rounded-lg items-center  h-screen flex-1 flex-col justify-center lg:px-8">
                <img src={background} className="w-screen h-screen" alt=""/>
            </div>
            <div className="flex bg-white rounded-lg items-center  flex-1 flex-col justify-center lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm m-0">
                    <img
                        className="mx-auto h-[150px] w-[200px] cursor-pointer"
                        src={logo}
                        alt="Your Company"
                        onClick={()=>navigate("/")}
                    />
                    <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in
                    </h2>
                </div>
                <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="email"
                                       className="block text-sm font-medium leading-6 text-gray-900
                                       hover:text-gray-500 cursor-pointer">
                                    Username
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    required
                                    type="text"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between m-0">
                                <label htmlFor="password"
                                       className="block text-sm font-medium leading-6 text-gray-900
                                       hover:text-gray-500 cursor-pointer">
                                    Password
                                </label>
                            </div>
                            <div className="">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
                                    ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                    focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center gap-3">
                            <div className="w-full ">
                                <div className="w-full btn btn-outline btn-primary">
                                    Sign in
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-between text-sm">
                            <span className="cursor-pointer text-blue-500 hover:text-gray-500 font-bold">Forgot password ?</span>
                            <div className="flex">
                                <span className="mx-2 font-bold">
                                    Don't have account ?
                                </span>
                                <span className="cursor-pointer hover:text-gray-500 font-bold text-blue-500" onClick={()=>navigate("/register")}>Register</span>
                            </div>
                        </div>
                    </form>
                    <div className="mt-3">
                        OR
                    </div>
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
                </div>
            </div>

        </div>
    );
}

export default Login;