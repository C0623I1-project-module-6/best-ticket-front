import { useNavigate } from "react-router-dom";
import AuthHeader from "../header/AuthHeader.jsx";
import { useEffect } from "react";
import { loginUser, selectLoginSuccess, selectUserLogin } from "../../features/UserSlice.js";
import { useDispatch, useSelector } from "react-redux";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(selectUserLogin)
    const loginSuccess = useSelector(selectLoginSuccess)
    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            username: e.target[0].value,
            email: e.target[0].value,
            phoneNumber: e.target[0].value,
            password: e.target[1].value
        }
        dispatch(loginUser(user))
    }
    useEffect(() => {
        console.log(user)
        if (loginSuccess && user && user.token) {
            localStorage.setItem('token', user.token);
            navigate("/");
        }
    }, [loginSuccess, navigate, user]);
    return (
        <div className="flex bg-white rounded-lg  items-center  flex-1 flex-col justify-center lg:px-8
        dark:bg-black dark:text-white
        ">
            <AuthHeader name={"Login"} />
            <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900
                                       hover:text-gray-500 cursor-pointer
                                       dark:text-white
                                       ">
                                Username/Email/Phone
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                required
                                type="text"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5
                                text-gray-900 ring-1 ring-inset placeholder:text-gray-400
                                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                                dark:bg-gray-400 dark:text-black
                                "
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
                                    dark:bg-gray-400 dark:text-black
                                    "
                            />
                        </div>
                    </div>
                    <div className="flex justify-center gap-3">
                        <div className="w-full ">
                            <button type="submit" className="w-full btn btn-outline btn-primary dark:btn-info">
                                Sign in
                            </button>
                        </div>
                    </div>
                    <div className="w-full flex justify-between text-sm">
                        <span
                            className="cursor-pointer text-blue-500 hover:text-gray-500 font-bold">Forgot password ?</span>
                        <div className="flex">
                            <span className="mx-2 font-bold">
                                Don't have account ?
                            </span>
                            <span className="cursor-pointer hover:text-gray-500 font-bold text-blue-500"
                                onClick={() => navigate("/register")}>Register</span>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Login;
