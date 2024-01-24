import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Bounce, toast} from "react-toastify";
import {registerCustomerProfile, selectRegisterCustomerSuccess} from "../../../features/user/CustomerSlice.js";
import Avatar from "../Avatar.jsx";

function AddCustomerProfile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [customer, setCustomer] = useState({});
    const success = useSelector(selectRegisterCustomerSuccess);
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
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerCustomerProfile(customer));
        navigate("/profile");
    }
    useEffect(() => {
        if (success){
            toast.success("🦄 Đăng ký thông tin thành công!");
        }
    }, [success]);
    const handleChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="flex">
            <form className="w-screen" method="POST"
                  onSubmit={handleSubmit}>
                <div className="flex">
                    <div className=" w-1/4 ">
                        <Avatar/>
                    </div>
                    <div className="w-3/4 p-10">
                        <div className="border border-solid shadow-lg rounded-md py-5 px-5 bg-white">
                            <h2 className=" flex justify-center text-2xl font-serif leading-7 text-gray-900">
                                Thông tin cá nhân</h2>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label htmlFor="fullName"
                                           className="block text-1xl font-serif text-gray-700">
                                        Họ và tên
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="fullName"
                                            id="fullName"
                                            autoComplete="fullName"
                                            value={customer.fullName}
                                            onChange={handleChange}
                                            required
                                            className=" block w-full rounded-md border-0 p-2 mt-2 text-gray-900 shadow-md ring-1
                                            ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-0 focus:ring-inset
                                            focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl font-serif
                                            sm:text-1xl sm:leading-6"
                                            placeholder="Vui lòng nhập họ và tên"/>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phoneNumber"
                                           className="block text-1xl font-serif text-gray-700">
                                        Số điện thoại
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="phoneNumber"
                                            id="phoneNumber"
                                            autoComplete="phoneNumber"
                                            value={customer.phoneNumber}
                                            onChange={handleChange}
                                            required
                                            className="block w-full rounded-md border-0 p-2 mt-2 text-gray-900 shadow-md ring-1
                                            ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-0 focus:ring-inset
                                            focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl font-serif
                                            sm:text-1xl sm:leading-6"
                                            placeholder="Vui lòng nhập số điện thoại"/>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="idCard"
                                           className="block text-1xl font-serif text-gray-700">
                                        Số CMND/CCCD/Hộ chiếu
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="idCard"
                                            id="idCard"
                                            autoComplete="idCard"
                                            value={customer.idCard}
                                            onChange={handleChange}
                                            required
                                            className="block w-full rounded-md border-0 p-2 mt-2 text-gray-900 shadow-md ring-1
                                            ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-0 focus:ring-inset
                                            focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl font-serif
                                            sm:text-1xl sm:leading-6"
                                            placeholder="Vui lòng nhập số CMND/CCCD/Hộ chiếu"/>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email"
                                           className="block text-1xl font-serif text-gray-700">
                                        Email nhận vé
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            value={customer.email}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 p-2 mt-2 text-gray-900 shadow-md ring-1
                                            ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-0 focus:ring-inset
                                            focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl font-serif
                                            sm:text-1xl sm:leading-6"
                                            placeholder="besttick@example.com"/>
                                    </div>
                                    <p><a className="mt-2 text-green-700" href="#">* Click để gửi lại mail xác
                                        thực.</a>
                                    </p>
                                </div>
                                <div>
                                    <label htmlFor="dateOfBirth"
                                           className="block text-1xl font-serif text-gray-700">
                                        Ngày sinh
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="date"
                                            name="dateOfBirth"
                                            id="dateOfBirth"
                                            autoComplete="dateOfBirth"
                                            value={customer.dateOfBirth}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 p-2 mt-2 text-gray-900 shadow-md ring-1
                                            ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-0 focus:ring-inset
                                            focus:ring-indigo-60 sm:text-1xl sm:font-serif sm:leading-6"/>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="gender"
                                           className="block text-1xl font-serif text-gray-700">
                                        Giới tính</label>
                                    <div className="mt-2">
                                        <div className="flex items-center gap-x-3">
                                            <input id="gender" name="gender" type="radio"
                                                   value="Male" onChange={handleChange}
                                                   className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label htmlFor="gender"
                                                   className="block text-sm font-medium leading-6 text-gray-900">Nam</label>
                                            <input id="gender" name="gender" type="radio"
                                                   value="Female" onChange={handleChange}
                                                   className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label htmlFor="gender"
                                                   className="block text-sm font-medium leading-6 text-gray-900">Nữ</label>
                                            <input id="gender" name="gender" type="radio"
                                                   value="Other" onChange={handleChange}
                                                   className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label htmlFor="gender"
                                                   className="block text-sm font-medium leading-6 text-gray-900">Khác</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-center gap-x-6 mx-auto">
                            <button type="button"
                                    onClick={() => navigate("/")}
                                    className="text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-500">
                                Thoát
                            </button>
                            <button type="submit" className="rounded-md bg-[#10b981] px-3 py-2 text-sm font-semibold
                            text-whiteshadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2
                            focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Hoàn thành
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddCustomerProfile;