import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {editCustomerProfile} from "../../../features/user/CustomerSlice.js";
import {Bounce, toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import Avatar from "../Avatar.jsx";
import {FastField, Form, Formik} from "formik";
import * as Yup from "yup";
import {selectExistsUsers} from "../../../features/user/ExistsUserSlice.js";
import {Button} from "@material-tailwind/react";
import InputField from "../../../ultility/customField/InputField.jsx";
import {FormGroup, Label} from "reactstrap";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function EditCustomerProfile({customer}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
        setIsEditMode(prev=>!prev);

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
                return (
                    <FormGroup className="flex">
                        <Form className="w-screen" method="PUT"
                              onSubmit={formikProps.handleSubmit}>
                            <FormGroup className="flex">
                                <Avatar/>
                                <FormGroup className="w-3/4 p-10">
                                    <FormGroup className="border border-solid shadow-2xl rounded-md py-5 px-5 bg-white">
                                        <h2 className=" flex justify-center text-2xl font-serif leading-7 text-gray-900">
                                            Thông tin cá nhân</h2>
                                        <FormGroup className="grid grid-cols-2 gap-4 mt-4">
                                            <FormGroup>
                                                <FastField
                                                    name="fullName"
                                                    component={InputField}
                                                    onChange={formikProps.handleChange}
                                                    label="Họ và tên"
                                                    placeholder={customer.fullName || "Vui lòng nhập họ và tên"}
                                                    disabled={!isEditMode}
                                                    className="block w-full rounded-md shadow-md p-2 mt-2 text-gray-900
                                                    ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset
                                                    focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl
                                                    placeholder:text-gray-800 font-serif sm:text-1xl sm:leading-6"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <FastField
                                                    name="phoneNumber"
                                                    component={InputField}
                                                    onChange={formikProps.handleChange}
                                                    label="Số điện thoại"
                                                    placeholder={customer.phoneNumber || "Vui lòng nhập số điện thoại"}
                                                    disabled={!isEditMode}
                                                    className="block w-full rounded-md shadow-md p-2 mt-2 text-gray-900
                                                    ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset
                                                    focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl
                                                    placeholder:text-gray-800 font-serif sm:text-1xl sm:leading-6"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <FastField
                                                    name="idCard"
                                                    component={InputField}
                                                    onChange={formikProps.handleChange}
                                                    label="CMND/CCCD/Hộ chiếu"
                                                    placeholder={customer.idCard || "Vui lòng nhập CMND/CCCD/Hộ chiếu"}
                                                    disabled={!isEditMode}
                                                    className="block w-full rounded-md shadow-md p-2 mt-2 text-gray-900
                                                    ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset
                                                    focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl
                                                    placeholder:text-gray-800 font-serif sm:text-1xl sm:leading-6"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <FastField
                                                    type="email"
                                                    name="receiptEmail"
                                                    component={InputField}
                                                    onChange={formikProps.handleChange}
                                                    label="Email nhận vé"
                                                    placeholder={customer.receiptEmail || "bestticket@gmail.com"}
                                                    disabled={!isEditMode}
                                                    className="block w-full rounded-md shadow-md p-2 mt-2 text-gray-900
                                                    ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset
                                                    focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl
                                                    placeholder:text-gray-800 font-serif sm:text-1xl sm:leading-6"/>
                                                <p className="mt-2"><a className="text-green-700" href="#">
                                                    * Click để gửi lại mail xác thực.</a>
                                                </p>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label htmlFor="dateOfBirth"
                                                       className="block text-1xl font-serif text-gray-700">
                                                    Ngày sinh
                                                </Label>
                                                <FormGroup className="mt-2">
                                                    <input
                                                        type="date"
                                                        name="dateOfBirth"
                                                        value={customer.dateOfBirth}
                                                        onChange={formikProps.handleChange}
                                                        disabled={!isEditMode}
                                                        className="block w-full rounded-md shadow-md border-0 p-2 mt-2
                                                        text-gray-800 ring-1 ring-inset ring-gray-300 focus:ring-1
                                                        focus:ring-inset focus:ring-indigo-600 sm:text-1xl sm:font-serif
                                                        sm:leading-6 placeholder:font-serif placeholder:text-1xl"/>
                                                </FormGroup>
                                            </FormGroup>

                                            <FormGroup>
                                                <Label htmlFor="gender"
                                                       className="block text-1xl font-serif text-gray-700">
                                                    Giới tính</Label>
                                                <FormGroup className="mt-2">
                                                    <FormGroup className="flex items-center gap-x-3">
                                                        <input id="gender" name="gender" type="radio"
                                                               value="Male" onChange={handleGenderChange}
                                                               checked={gender === "Male"}
                                                               disabled={!isEditMode}
                                                               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                                        <Label htmlFor="gender"
                                                               className="block text-sm font-medium leading-6 text-gray-900">Nam</Label>
                                                        <input id="gender" name="gender" type="radio"
                                                               value="Female" onChange={handleGenderChange}
                                                               checked={gender === "Female"}
                                                               disabled={!isEditMode}
                                                               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                                        <Label htmlFor="gender"
                                                               className="block text-sm font-medium leading-6 text-gray-900">Nữ</Label>
                                                        <input id="gender" name="gender" type="radio"
                                                               value="Other" onChange={handleGenderChange}
                                                               checked={gender === "Other"}
                                                               disabled={!isEditMode}
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
