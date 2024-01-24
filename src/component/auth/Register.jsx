import {useNavigate} from "react-router-dom";
import AuthHeader from "../header/AuthHeader.jsx";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    registerUser,
    selectRegisterError,
    selectRegisterSuccess,
    selectUserRegister
} from "../../features/user/UserSlice.js";
import {Bounce, toast} from "react-toastify";

function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userRegister = useSelector(selectUserRegister);
    const registerSuccess = useSelector(selectRegisterSuccess);
    const registerError = useSelector(selectRegisterError);
    const [user, setUser] = useState({confirmPassword: ""});
    const regexPassword = /^(?=.*[A-Za-z])[A-Za-z\d]{6,}$/;
    const regexPhoneNumber = /^\d{10}$/;
    const toastOptions = {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateInput(user);
        if (errors.length > 0) {
            errors.forEach((error) => {
                toast.error(error, toastOptions);
            });
            return;
        }
        dispatch(registerUser(user))
            .then((response) => {
                if (response.data.status === "CONFLICT") {
                    toast.error(response.data.message, toastOptions);
                }
            })
            .catch(() => {
                toast.success("🦄 Đăng ký thành công!", toastOptions);
                navigate("/login");
            });

    }
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }

    const validateInput = (user) => {
        const errors = [];

        if (user.password.length < 6) {
            errors.push("🦄 Mật khẩu từ 6 ký tự trở lên! ");
        } else if (!regexPassword.test(user.password)) {
            errors.push("🦄 Mật khẩu gồm số và chữ cái!");
        } else if (!user.phoneNumber) {
            user.phoneNumber = null;
        } else if (!regexPhoneNumber.test(user.phoneNumber)) {
            errors.push("🦄 Số điện thoại phải đủ 10 số!");
        } else if (user.confirmPassword !== user.password) {
            errors.push("🦄 Mật khẩu xác thục không chính xác!");
        }
        console.log(errors)
        return errors;
    };

    return (
        <div className="flex bg-white rounded-lg items-center  flex-1 flex-col justify-center lg:px-8
        dark:bg-black dark:text-white
        ">
            <AuthHeader name={"Registration"}/>
            <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="username"
                                   className="block text-sm font-medium leading-6 text-gray-900
                                       hover:text-gray-500 cursor-pointer
                                       dark:text-white
                                       ">
                                Username
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="username"
                                name="username"
                                value={user.username}
                                onChange={handleChange}
                                required
                                type="text"
                                autoComplete="username"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm
                                 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                                 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                                 dark:bg-gray-400 dark:text-black"
                            />
                        </div>
                    </div>
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
                                value={user.email}
                                onChange={handleChange}
                                required
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm
                                 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                                 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                                 dark:bg-gray-400 dark:text-black"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="phoneNumber"
                                   className="block text-sm font-medium leading-6 text-gray-900
                                       hover:text-gray-500 cursor-pointer
                                       dark:text-white
                                       ">
                                Phone Number
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="phoneNumber"
                                name="phoneNumber"
                                value={user.phoneNumber}
                                onChange={handleChange}
                                type="text"
                                autoComplete="phoneNumber"
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
                                value={user.password}
                                onChange={handleChange}
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
                                name="confirmPassword"
                                value={user.confirmPassword}
                                onChange={handleChange}
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
                            <div className="w-full">
                                <button type="submit" className="w-full btn btn-outline btn-primary dark:btn-info"
                                >Register
                                </button>
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
