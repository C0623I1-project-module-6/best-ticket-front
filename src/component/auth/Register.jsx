import {useNavigate} from "react-router-dom";
import AuthHeader from "./AuthHeader.jsx";

function Register() {
    const navigate = useNavigate();

    return (
        <div className="flex bg-white rounded-lg items-center  flex-1 flex-col justify-center lg:px-8
        dark:bg-black dark:text-white
        ">
            <AuthHeader name={"Registration"}/>
            <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="email"
                                   className="block text-sm font-medium leading-6 text-gray-900
                                       hover:text-gray-500 cursor-pointer
                                       dark:text-white
                                       ">
                                Email
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                required
                                type="text"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm
                                 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                                 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                                 dark:bg-gray-400 dark:text-black"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between m-0">
                            <label htmlFor="password"
                                   className="block text-sm font-medium leading-6 text-gray-900
                                       hover:text-gray-500 cursor-pointer
                                       dark:text-white
                                       ">
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
                                    focus:ring-indigo-600 sm:text-sm sm:leading-6
                                    dark:bg-gray-400 dark:text-black"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between m-0">
                            <label htmlFor="confirmPassword"
                                   className="block text-sm font-medium leading-6 text-gray-900
                                       hover:text-gray-500 cursor-pointer
                                       dark:text-white
                                       ">
                                Confirm Password
                            </label>
                        </div>
                        <div className="">
                            <input
                                id="confirmPassword"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
                                    ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                    focus:ring-indigo-600 sm:text-sm sm:leading-6
                                    dark:bg-gray-400 dark:text-black
                                    "
                            />
                        </div>
                    </div>
                    <div className="flex justify-center gap-3">
                        <div className="w-full ">
                            <div className="w-full btn btn-outline btn-primary dark:btn-info">
                                Register
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-between text-sm">
                        <div className="flex">
                                <span className="mx-2 font-bold">
                                     Have account ?
                                </span>
                            <span className="cursor-pointer hover:text-gray-500 font-bold text-blue-500"
                                  onClick={() => navigate("/login")}>Login</span>
                        </div>
                    </div>
                </form>


            </div>
        </div>
    );
}

export default Register;
