import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editProfile, selectEditProfileError, selectEditProfileSuccess} from "../../features/CustomerSlice.js";
import {Bounce, toast} from "react-toastify";
import {selectUserEdit} from "../../features/UserSlice.js";
import {useNavigate} from "react-router-dom";

function EditCustomerProfile({customer,}) {
    const navigate = useNavigate();
    const [editCustomer, setEditCustomer] = useState({customer});
    const [gender, setGender] = useState(customer?.gender);
    const [isEditMode, setIsEditMode] = useState(false);
    const [idCardEntered, setIdCardEntered] = useState(false);
    const editCustomerSuccess = useSelector(selectEditProfileSuccess);
    const editCustomerError = useSelector(selectEditProfileError);
    const userEdit = useSelector(selectUserEdit);
    const dispatch = useDispatch();

    const toastOptions =
        {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        }
    const toggleEditMode = () => {
        setIsEditMode(prev => !prev);
    }
    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }
    const handleChange = (e) => {

        setEditCustomer({
            ...editCustomer,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editProfile(editCustomer));
        setIsEditMode(false)
        if (editCustomerSuccess) {
            toast.success("🦄 Cập nhật thông tin thành công", toastOptions);
        }
    }

    useEffect(() => {
        if (editCustomerError) {
            toast.error("🦄 Cập nhật thông tin thất bại", toastOptions)
        }
    }, []);

    return (
        <div className="flex">
            <form className=" " method="POST"
                  onSubmit={handleSubmit}>
                <div className="flex">
                    <div className=" w-1/4 ">
                        <div className="parent flex justify-center h-screen">
                            <div className="image flex flex-col items-center">
                                <div className=" my-8 flex justify-center gap-x-3">
                                    <svg className="mx-auto h-60 w-60 text-gray-300" viewBox="0 0 24 24"
                                         fill="curentColor"
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
                        </div>
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
                                            placeholder={customer?.fullName || "Vui lòng nhập họ và tên"}
                                            onChange={handleChange}
                                            required
                                            disabled={!isEditMode}
                                            className=" block w-full rounded-md border-0 p-2 mt-2 text-gray-900 shadow-md ring-1
                                            ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-0 focus:ring-inset
                                            focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl font-serif
                                            sm:text-1xl sm:leading-6"
                                        />
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
                                            placeholder={customer?.phoneNumber || "Vui lòng nhập số điện thoại"}
                                            onChange={handleChange}
                                            required
                                            disabled={!isEditMode}
                                            className="block w-full rounded-md border-0 p-2 mt-2 text-gray-900 shadow-md ring-1
                                            ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-0 focus:ring-inset
                                            focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl font-serif
                                            sm:text-1xl sm:leading-6"/>

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
                                            placeholder={customer?.idCard || "Vui lòng nhập số CMND/CCCD/Hộ chiếu"}
                                            onChange={handleChange}
                                            required
                                            disabled={customer?.idCard}
                                            className="block w-full rounded-md border-0 p-2 mt-2 text-gray-900 shadow-md ring-1

                                            ring-inset ring-gray-300 placeholder:text-gray-900  focus:ring-0 focus:ring-inset
                                            focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl font-serif
                                            sm:text-1xl sm:leading-6"/>
                                    </div>
                                    <p className=" mt-2 text-green-700">* Thông tin này chỉ được nhập 1 lần và không thể
                                        chỉnh sửa sau khi xác nhận.</p>
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
                                            placeholder={userEdit?.email || "besttick@example.com"}
                                            onChange={handleChange}
                                            disabled={!isEditMode}
                                            className="block w-full rounded-md border-0 p-2 mt-2 text-gray-900 shadow-md ring-1

                                            ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-0 focus:ring-inset
                                            focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl font-serif
                                            sm:text-1xl sm:leading-6"/>
                                    </div>
                                    <p><a className="mt-2 text-green-700" href="#">* Click để gửi lại mail xác thực.</a>
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
                                            value={customer?.dateOfBirth}
                                            onChange={handleChange}
                                            disabled={!isEditMode}
                                            className="block w-full rounded-md border-0 p-2 mt-2 text-gray-900 shadow-md ring-1
                                            ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-0 focus:ring-inset
                                            focus:ring-indigo-600
                                            sm:text-1xl sm:leading-6"/>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="gender"
                                           className="block text-1xl font-serif text-gray-700">
                                        Giới tính</label>
                                    <div className="mt-2">
                                        <div className="flex items-center gap-x-3">
                                            <input id="gender" name="gender" type="radio"
                                                   value="Male" onChange={handleGenderChange}
                                                   checked={gender === "Male"}
                                                   disabled={!isEditMode}
                                                   className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label htmlFor="gender"
                                                   className="block text-sm font-medium leading-6 text-gray-900">Nam</label>
                                            <input id="gender" name="gender" type="radio"
                                                   value="Female" onChange={handleGenderChange}
                                                   checked={gender === "Female"}
                                                   disabled={!isEditMode}
                                                   className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                            <label htmlFor="gender"
                                                   className="block text-sm font-medium leading-6 text-gray-900">Nữ</label>
                                            <input id="gender" name="gender" type="radio"
                                                   value="Other" onChange={handleGenderChange}
                                                   checked={gender === "Other"}
                                                   disabled={!isEditMode}
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
                            <button onClick={toggleEditMode} type="submit" className="rounded-md bg-[#10b981] px-3 py-2 text-sm font-semibold
                            text-whiteshadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2
                            focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                {isEditMode ? "Hoàn thành" : "Chỉnh sửa"}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditCustomerProfile;
