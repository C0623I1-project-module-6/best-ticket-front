import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addProfile, selectAddProfileSuccess, selectProfileAdded} from "../../features/CustomerSlice.js";
import {Bounce, toast} from "react-toastify";

function EditCustomerProfile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [customer, setCustomer] = useState({});
    const profileAdded = useSelector(selectProfileAdded);
    const addSuccess = useSelector(selectAddProfileSuccess);
    const showToastMessage = (content) => {
        toast("🦄", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProfile(customer));
        setCustomer(profileAdded);
        showToastMessage("Register successfully!");
        navigate("/");
    }
    const handleChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="w-full size-full bg-white overflow-auto">
            <form className=" p-20 rounded-lg shadow-md space-y-6 " method="POST"
                  onSubmit={handleSubmit}>
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className=" flex justify-center text-base font-semibold leading-7 text-gray-900">My Profile</h2>
                    <div className="flex justify-center mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-full">
                            <label className="flex justify-center text-sm font-semibold leading-6 text-gray-900">Ảnh của
                                bạn</label>
                            <div className=" my-8 flex  justify-center gap-x-3">
                                <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="curentColor"
                                     aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25
                                      6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0
                                      006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224
                                      8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75
                                      3.75 0 017.5 0z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>
                            <div className="flex justify-center">
                                <button type="button"
                                        className="rounded-md bg-[#10b981] px-3 py-2 text-sm font-semibold
                            text-whiteshadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2
                            focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >Thêm ảnh
                                </button>
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="fullName" className="block text-sm font-semibold leading-6 text-gray-900">
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
                                    className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1
                                    ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset
                                    focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Vui lòng nhập họ và tên"/>
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="phoneNumber"
                                   className="block text-sm font-semibold leading-6 text-gray-900">
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
                                    className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1
                                    ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset
                                    focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Vui lòng nhập số điện thoại"/>
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="idCard" className="block text-sm font-semibold leading-6 text-gray-900">
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
                                    className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1
                                    ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset
                                    focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Vui lòng nhập số CMND/CCCD/Hộ chiếu"/>
                            </div>
                            <p className=" mt-2 text-green-700">* Thông tin này chỉ được nhập 1 lần và không thể
                                chỉnh sửa sau khi xác nhận.</p>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
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
                                    className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1
                                    ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset
                                    focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="besttick@example.com"/>
                            </div>
                            <p><a className="mt-2 text-green-700" href="#">* Click để gửi lại mail xác thực.</a></p>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="dateOfBirth"
                                   className="block text-sm font-semibold leading-6 text-gray-900">
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
                                    className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1
                                    ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset
                                    focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="dateOfBirth"
                                   className="block text-sm font-semibold leading-6 text-gray-900">
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
            </form>
        </div>
    );
}

export default EditCustomerProfile;
