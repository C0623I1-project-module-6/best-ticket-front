import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Bounce, toast} from "react-toastify";
import {registerCustomerProfile, selectRegisterCustomerSuccess} from "../../../features/user/CustomerSlice.js";
import Avatar from "../Avatar.jsx";
import {FastField, Form, Formik} from "formik";
import {button, input} from "@material-tailwind/react";
import InputField from "../../../ultility/customField/InputField.jsx";
import * as Yup from "yup";
import {selectExistsUsers} from "../../../features/user/ExistsUserSlice.js";
import {useEffect} from "react";

function RegisterCustomerProfile(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const success = useSelector(selectRegisterCustomerSuccess);
    const userExistsList = useSelector(selectExistsUsers);
    console.log(userExistsList);
    const phoneRegex = /^0\d{9}$/;
    const phoneNumbers = userExistsList
        .filter(customer => customer.customerPhoneNumber)
        .map(customer => customer.customerPhoneNumber);
    console.log(phoneNumbers)
    const idCards = userExistsList
        .filter(customer => customer.customerIdCard)
        .map(customer => customer.customerIdCard);
    console.log(idCards)
    const receiptEmails = userExistsList
        .filter(customer => customer.customerReceiptEmail)
        .map(customer => customer.customerReceiptEmail);
    console.log(receiptEmails)
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
    useEffect(() => {
        if (success){
            toast.success("🦄 Đăng ký thông tin thành công!",toastOptions);
            navigate("/profile");
        }
    }, [success]);


    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required("This field is required."),

        phoneNumber: Yup.string()
            .test("unique", "Phone number already exists.", value => {
                return !phoneNumbers.includes(value);
            })
            .matches(phoneRegex,"Invalid phone number! Start from 0 and has 10 numbers.")
            .required("This field is required."),

        idCard: Yup.string()
            .test("unique", "Id card already exists.", value => {
                return !idCards.includes(value);
            })
            .required("This field is required."),

        receiptEmail: Yup.string()
            .test("unique", "Email already exists.", value => {
                return !receiptEmails.includes(value);
            })
            .email("Invalid email! Please add @.")
            .required("This field is required."),

        dateOfBirth: Yup.date().required("This field is required."),

        gender: Yup.string().required("This field is required."),

    })

    const initialValues = {
        fullName: "",
        phoneNumber: "",
        idCard: "",
        receiptEmail: "",
        dateOfBirth: "",
        gender: "",

    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => {
                dispatch(registerCustomerProfile(values))
            }}
        >
            {formikProps => {
                const {values, errors, touched} = formikProps;
                console.log({values, errors, touched});
                return (
                    <div className="flex">
                        <Form className="w-screen" method="POST"
                              onSubmit={formikProps.handleSubmit}>
                            <div className="flex">
                                <Avatar/>
                                <div className="w-3/4 p-10">
                                    <div className="border border-solid shadow-lg rounded-md py-5 px-5 bg-white">
                                        <h2 className=" flex justify-center text-2xl font-serif leading-7 text-gray-900">
                                            Thông tin cá nhân</h2>
                                        <div className="grid grid-cols-2 gap-4 mt-4">
                                            <div>
                                                <FastField
                                                    name="fullName"
                                                    component={InputField}
                                                    onChange={formikProps.handleChange}
                                                    label="Họ và tên"
                                                    placeholder="Vui lòng nhập họ và tên"
                                                />
                                            </div>
                                            <div>
                                                <FastField
                                                    name="phoneNumber"
                                                    component={InputField}
                                                    onChange={formikProps.handleChange}
                                                    label="Số điện thoại"
                                                    placeholder="Vui lòng nhập số điện thoại"
                                                />
                                            </div>
                                            <div>
                                                <FastField
                                                    name="idCard"
                                                    component={InputField}
                                                    onChange={formikProps.handleChange}
                                                    label="CMND/CCCD/Hộ chiếu"
                                                    placeholder="Vui lòng nhập CMND/CCCD/Hộ chiếu"
                                                />
                                            </div>
                                            <div>
                                                <FastField
                                                    type="email"
                                                    name="receiptEmail"
                                                    component={InputField}
                                                    onChange={formikProps.handleChange}
                                                    label="Email nhận vé"
                                                    placeholder="bestticket@gmail.com"
                                                />
                                                <p className="mt-2"><a className="text-green-700" href="#">
                                                    * Click để gửi lại mail xác thực.</a>
                                                </p>
                                            </div>
                                            <div>
                                                <FastField
                                                    type="date"
                                                    name="dateOfBirth"
                                                    component={InputField}
                                                    onChange={formikProps.handleChange}
                                                    label="Ngày sinh"
                                                    className="block w-full rounded-md border-0 p-2 mt-2 text-gray-900 shadow-md ring-1
                                                    ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-0 focus:ring-inset
                                                    focus:ring-indigo-60 sm:text-1xl sm:font-serif sm:leading-6"/>
                                            </div>
                                            <div>
                                                <label htmlFor="gender"
                                                       className="block text-1xl font-serif text-gray-700">
                                                    Giới tính</label>
                                                <div className="mt-2">
                                                    <div className="flex items-center gap-x-3">
                                                        <input name="gender" type="radio"
                                                               value="Male" onChange={formikProps.handleChange}
                                                               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                                        <label htmlFor="gender"
                                                               className="block text-sm font-medium leading-6 text-gray-900">Nam</label>
                                                        <input name="gender" type="radio"
                                                               value="Female" onChange={formikProps.handleChange}
                                                               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                                        <label htmlFor="gender"
                                                               className="block text-sm font-medium leading-6 text-gray-900">Nữ</label>
                                                        <input name="gender" type="radio"
                                                               value="Other" onChange={formikProps.handleChange}
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
                        </Form>
                    </div>
                );
            }}
        </Formik>
    );
}

export default RegisterCustomerProfile;