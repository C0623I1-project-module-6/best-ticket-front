import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {editCustomerProfile, selectEditCustomerProfileSuccess} from "../../../features/user/CustomerSlice.js";
import {Bounce, toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import Avatar from "../Avatar.jsx";
import {ErrorMessage, FastField, Form, Formik} from "formik";
import * as Yup from "yup";
import {selectExistsUsers} from "../../../features/user/ExistsUserSlice.js";
import {Button} from "@material-tailwind/react";
import {FormFeedback} from "reactstrap";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function EditCustomerProfile({customer}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [editCustomer, setEditCustomer] = useState({});
    const success = useSelector(selectEditCustomerProfileSuccess)
    const [gender, setGender] = useState(customer?.gender);
    const [isEditMode, setIsEditMode] = useState(false);
    const userExistsList = useSelector(selectExistsUsers);
    const phoneRegex = /^0\d{9}$/;
    const phoneNumbers = userExistsList
        .filter(customer => customer.customerPhoneNumber)
        .map(customer => customer.customerPhoneNumber);
    const idCards = userExistsList
        .filter(customer => customer.customerIdCard)
        .map(customer => customer.customerIdCard);
    const receiptEmails = userExistsList
        .filter(customer => customer.customerReceiptEmail)
        .map(customer => customer.customerReceiptEmail);
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
    const initialValues = {
        fullName: null,
        phoneNumber: null,
        idCard: null,
        receiptEmail: null,
        dateOfBirth: null,
        gender: null,

    }
    const validationEditSchema = Yup.object().shape({
        phoneNumber: Yup.string()
            .test("unique", "Phone number already exists.", value => {
                return !phoneNumbers.includes(value);
            })
            .matches(phoneRegex, "Invalid phone number! Start from 0 and has 10 numbers.")
            .nullable(),
        idCard: Yup.string()
            .test("unique", "Id card already exists.", value => {
                return !idCards.includes(value);
            })
            .nullable(),
        receiptEmail: Yup.string()
            .test("unique", "Email already exists.", value => {
                return !receiptEmails.includes(value);
            })
            .email("Invalid email! Please add @.")
            .nullable(),
    })
    const handleSubmit = (values) => {
        dispatch(editCustomerProfile(values));
        setIsEditMode(false);
        toast.success("🦄 Cập nhật thông tin thành công!", toastOptions);
        navigate("/profile");

    }

    const toggleEditMode = () => {
        setIsEditMode(prev => !prev);
    }
    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }

    return (
        <Formik initialValues={initialValues}
                validationSchema={validationEditSchema}
                onSubmit={handleSubmit}
        >
            {formikProps => {
                const {values, errors, touched} = formikProps;
                console.log({values, errors, touched});
                const showError = errors[name] && touched[name];
                return (
                    <div className="flex">
                        <Form className="w-screen" method="PUT"
                              onSubmit={formikProps.handleSubmit}>
                            <div className="flex">
                                <Avatar/>
                                <div className="w-3/4 p-10">
                                    <div className="border border-solid shadow-lg rounded-md py-5 px-5 bg-white">
                                        <h2 className=" flex justify-center text-2xl font-serif leading-7 text-gray-900">
                                            Thông tin cá nhân</h2>
                                        <div className="grid grid-cols-2 gap-4 mt-4">
                                            <div>
                                                <label htmlFor="fullName"
                                                       className="block text-1xl font-serif text-gray-700">
                                                    Họ và tên
                                                    {showError &&
                                                        <span className="m-2 text-red-500 text-1xl">*</span>}
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="fullName"
                                                        placeholder={customer.fullName || "Vui lòng nhập họ và tên"}
                                                        onChange={formikProps.handleChange}
                                                        disabled={!isEditMode}
                                                        className="block w-full rounded-md border-0 p-2 mt-2 text-gray-900 shadow-md ring-1
                                                        ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-0 focus:ring-inset
                                                        focus:ring-indigo-600 sm:text-1xl sm:leading-6 placeholder:font-serif placeholder:text-1xl
                                                        font-serif"/>
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="phoneNumber"
                                                       className="block text-1xl font-serif text-gray-700">
                                                    Số điện thoại
                                                    {showError &&
                                                        <span className="m-2 text-red-500 text-1xl">*</span>}
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="phoneNumber"
                                                        placeholder={customer.phoneNumber || "Vui lòng nhập số điện thoại"}
                                                        onChange={formikProps.handleChange}
                                                        error={formikProps.errors.phoneNumber}
                                                        touched={formikProps.touched.phoneNumber}
                                                        disabled={!isEditMode}
                                                        className="block w-full rounded-md border-0 p-2 mt-2 text-gray-900 shadow-md ring-1
                                            ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-0 focus:ring-inset
                                            focus:ring-indigo-600 sm:text-1xl sm:leading-6 placeholder:font-serif placeholder:text-1xl
                                            font-serif"/>

                                                </div>
                                                <ErrorMessage name="phoneNumber"
                                                              component={FormFeedback}
                                                              className="text-sm font-serif text-red-500"/>
                                            </div>
                                            <div>
                                                <label htmlFor="idCard"
                                                       className="block text-1xl font-serif text-gray-700">
                                                    Số CMND/CCCD/Hộ chiếu
                                                    {showError &&
                                                        <span className="m-2 text-red-500 text-1xl">*</span>}
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="idCard"
                                                        placeholder={customer.idCard || "Vui lòng nhập số CMND/CCCD/Hộ chiếu"}
                                                        onChange={formikProps.handleChange}
                                                        disabled={!isEditMode}
                                                        className="block w-full rounded-md border-0 p-2 mt-2 text-gray-900 shadow-md ring-1
                                            ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-0 focus:ring-inset
                                            focus:ring-indigo-600 sm:text-1xl sm:leading-6 placeholder:font-serif placeholder:text-1xl
                                            font-serif"/>
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="email"
                                                       className="block text-1xl font-serif text-gray-700">
                                                    Email nhận vé
                                                    {showError &&
                                                        <span className="m-2 text-red-500 text-1xl">*</span>}
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="email"
                                                        name="receiptEmail"
                                                        placeholder={customer.receiptEmail || "besttick@example.com"}
                                                        onChange={formikProps.handleChange}
                                                        disabled={!isEditMode}
                                                        className="block w-full rounded-md border-0 p-2 mt-2 text-gray-900 shadow-md ring-1
                                            ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-0 focus:ring-inset
                                            focus:ring-indigo-600 sm:text-1xl sm:leading-6 placeholder:font-serif placeholder:text-1xl
                                            font-serif"/>
                                                </div>
                                                <p className="mt-2"><a className="text-green-700" href="#">
                                                    * Click để gửi lại email xác thực.</a>
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
                                                        value={customer?.dateOfBirth}
                                                        onChange={formikProps.handleChange}
                                                        disabled={!isEditMode}
                                                        className="block w-full rounded-md border-0 p-2 mt-2 text-gray-900 shadow-md
                                            ring-1 ring-inset ring-gray-300 focus:ring-0 focus:ring-inset focus:ring-indigo-600
                                            sm:text-1xl sm:font-serif sm:leading-6 placeholder:font-serif placeholder:text-1xl"/>
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
                                        <Button type="button"
                                                onClick={() => navigate("/")}
                                                className="text-1xl px-3 py-2 text-white
                                                hover:bg-gray-600 focus-visible:outline
                                                focus-visible:outline-2 focus-visible:outline-offset-2
                                                focus-visible:outline-indigo-600">
                                            Thoát
                                        </Button>
                                        <Button type="submit"
                                                className={classNames(
                                                    isEditMode ? "bg-[#10b981] text-1xl px-3 py-2"
                                                        + "text-white hover:bg-gray-600 focus-visible:outline"
                                                        + "focus-visible:outline-2 focus-visible:outline-offset-2"
                                                        + "focus-visible:outline-indigo-600" : "hidden"
                                                )}>
                                            {isEditMode ? "Hoàn thành" : "Chỉnh sửa"}
                                        </Button>
                                        <Button onClick={toggleEditMode} type="button"
                                                className={classNames(
                                                    isEditMode ? "hidden" : "bg-[#10b981] px-3 py-2 text-1xl "
                                                        + "text-white hover:bg-gray-600 focus-visible:outline "
                                                        + "focus-visible:outline-2"
                                                        + "focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                )}>
                                            {isEditMode ? "Hoàn thành" : "Chỉnh sửa"}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                );
            }}
        </Formik>
    );

}
