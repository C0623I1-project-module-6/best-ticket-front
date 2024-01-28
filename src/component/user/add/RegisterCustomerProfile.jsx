import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Bounce, toast} from "react-toastify";
import {registerCustomerProfile, selectRegisterCustomerSuccess} from "../../../features/user/CustomerSlice.js";
import Avatar from "../Avatar.jsx";
import {FastField, Form, Formik} from "formik";
import {Button, input} from "@material-tailwind/react";
import InputField from "../../../ultility/customField/InputField.jsx";
import * as Yup from "yup";
import {selectExistsUsers} from "../../../features/user/ExistsUserSlice.js";
import {useEffect} from "react";
import {FormGroup, Label} from "reactstrap";

function RegisterCustomerProfile(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const success = useSelector(selectRegisterCustomerSuccess);
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
    useEffect(() => {
        if (success) {
            toast.success("🦄 Đăng ký thông tin thành công!", toastOptions);
            navigate("/profile");
        }
    }, [success]);


    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required("This field is required."),

        phoneNumber: Yup.string()
            .test("unique", "Phone number already exists.", value => {
                return !phoneNumbers.includes(value);
            })
            .matches(phoneRegex, "Invalid phone number! Start from 0 and has 10 numbers.")
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
                return (
                    <FormGroup className="flex">
                        <Form className="w-screen" method="POST"
                              onSubmit={formikProps.handleSubmit}>
                            <FormGroup className="flex">
                                <Avatar/>
                                <FormGroup className="w-3/4 p-10">
                                    <FormGroup className="border border-solid shadow-2xl rounded-md py-5 px-5 bg-white">
                                        <h2 className=" flex justify-center text-3xl font-serif leading-7 text-gray-900">
                                            Thông tin cá nhân</h2>
                                        <FormGroup className="grid grid-cols-2 gap-4 mt-4">
                                            <FormGroup>
                                                <FastField
                                                    name="fullName"
                                                    component={InputField}
                                                    onChange={formikProps.handleChange}
                                                    label="Họ và tên"
                                                    placeholder="Vui lòng nhập họ và tên"
                                                    className="block w-full rounded-md shadow-md p-2 mt-2 text-gray-900
                                                    ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset
                                                    focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl
                                                    placeholder:text-gray-500 font-serif sm:text-1xl sm:leading-6"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <FastField
                                                    name="phoneNumber"
                                                    component={InputField}
                                                    onChange={formikProps.handleChange}
                                                    label="Số điện thoại"
                                                    placeholder="Vui lòng nhập số điện thoại"
                                                    className="block w-full rounded-md shadow-md p-2 mt-2 text-gray-900
                                                    ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset
                                                    focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl
                                                    placeholder:text-gray-500 font-serif sm:text-1xl sm:leading-6"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <FastField
                                                    name="idCard"
                                                    component={InputField}
                                                    onChange={formikProps.handleChange}
                                                    label="CMND/CCCD/Hộ chiếu"
                                                    placeholder="Vui lòng nhập CMND/CCCD/Hộ chiếu"
                                                    className="block w-full rounded-md shadow-md p-2 mt-2 text-gray-900
                                                    ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset
                                                    focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl
                                                    placeholder:text-gray-500 font-serif sm:text-1xl sm:leading-6"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <FastField
                                                    type="email"
                                                    name="receiptEmail"
                                                    component={InputField}
                                                    onChange={formikProps.handleChange}
                                                    label="Email nhận vé"
                                                    placeholder="bestticket@gmail.com"
                                                    className="block w-full rounded-md shadow-md p-2 mt-2 text-gray-900
                                                    ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset
                                                    focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl
                                                    placeholder:text-gray-500 font-serif sm:text-1xl sm:leading-6"/>
                                                <p className="mt-2"><a className="text-green-700" href="#">
                                                    * Click để gửi lại mail xác thực.</a>
                                                </p>
                                            </FormGroup>
                                            <FormGroup>
                                                <FastField
                                                    type="date"
                                                    name="dateOfBirth"
                                                    component={InputField}
                                                    onChange={formikProps.handleChange}
                                                    label="Ngày sinh"
                                                    className="block w-full rounded-md shadow-md border-0 p-2 mt-2
                                                        text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-1
                                                        focus:ring-inset focus:ring-indigo-600 sm:text-1xl sm:font-serif
                                                        sm:leading-6 placeholder:font-serif placeholder:text-1xl"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label htmlFor="gender"
                                                       className="block text-1xl font-serif text-gray-700">
                                                    Giới tính</Label>
                                                <FormGroup className="mt-2">
                                                    <FormGroup className="flex items-center gap-x-3">
                                                        <input name="gender" type="radio"
                                                               value="Male" onChange={formikProps.handleChange}
                                                               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                                        <Label htmlFor="gender"
                                                               className="block text-sm font-medium leading-6 text-gray-900">Nam</Label>
                                                        <input name="gender" type="radio"
                                                               value="Female" onChange={formikProps.handleChange}
                                                               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                                        <Label htmlFor="gender"
                                                               className="block text-sm font-medium leading-6 text-gray-900">Nữ</Label>
                                                        <input name="gender" type="radio"
                                                               value="Other" onChange={formikProps.handleChange}
                                                               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                                        <Label htmlFor="gender"
                                                               className="block text-sm font-medium leading-6 text-gray-900">Khác</Label>
                                                    </FormGroup>
                                                </FormGroup>
                                            </FormGroup>
                                        </FormGroup>
                                    </FormGroup>

                                    <FormGroup className="mt-6 flex items-center justify-center gap-x-6 mx-auto">
                                        <Button type="button"
                                                onClick={() => navigate("/")}
                                                className="text-1xl px-3 py-2 text-white
                                                hover:bg-gray-600 focus-visible:outline
                                                focus-visible:outline-2 focus-visible:outline-offset-2
                                                focus-visible:outline-indigo-600">
                                            Thoát
                                        </Button>
                                        <Button type="submit" className="rounded-md bg-[#10b981] px-3 py-2 text-1xl
                                         text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2
                                         focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                            Hoàn thành
                                        </Button>
                                    </FormGroup>
                                </FormGroup>
                            </FormGroup>
                        </Form>
                    </FormGroup>
                );
            }}
        </Formik>
    );
}

export default RegisterCustomerProfile;