import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Bounce, toast} from "react-toastify";
import {editOrganizerProfile} from "../../../features/user/OrganizerSlice.js";
import * as Yup from "yup";
import {FastField, Form, Formik} from "formik";
import {FormGroup, Label} from "reactstrap";
import InputField from "../../../ultility/customField/InputField.jsx";
import {Button} from "@material-tailwind/react";
import {useState} from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function FormEditCompany({userExistsList, phoneRegex, organizer}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isEditMode, setIsEditMode] = useState(false)
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
        };
    const initialValues = {
        businessCode: null,
        companyName: null,
        companyEmail: null,
        companyPhone: null,
        dateRange: null,
        issuedBy: null,
    };

    const companyNames = userExistsList
        .filter(organizer => organizer.companyName)
        .map(organizer => organizer.companyName);
    console.log(companyNames)
    const companyEmails = userExistsList
        .filter(organizer => organizer.companyEmail)
        .map(organizer => organizer.companyEmail);
    console.log(companyEmails)
    const companyPhones = userExistsList
        .filter(organizer => organizer.companyPhone)
        .map(organizer => organizer.companyPhone);
    console.log(companyPhones)
    const businessCodes = userExistsList
        .filter(organizer => organizer.companyBusinessCode)
        .map(organizer => organizer.companyBusinessCode);
    console.log(businessCodes)
    const validationCompanySchema = Yup.object().shape({
        companyEmail: Yup.string()
            .test("unique", "Email already exists.", value => {
                return !companyEmails.includes(value);
            })
            .email("Invalid email! Please add @.")
            .nullable(),
        companyName: Yup.string()
            .test("unique", "Company name already exists.", value => {
                return !companyNames.includes(value);
            })
            .nullable(),
        companyPhone: Yup.string()
            .test("unique", "Company phone number already exists.", value => {
                return !companyPhones.includes(value);
            })
            .matches(phoneRegex, "Invalid phone number! Start from 0 and has 10 numbers.")
            .nullable(),
        businessCode: Yup.string()
            .test("unique", "Business code already exists.", value => {
                return !businessCodes.includes(value);
            })
            .nullable(),


        dateRange: Yup.date().nullable(),
        issuedBy: Yup.string().nullable(),
    });
    const toggleEditMode = () => {
        setIsEditMode(prev => !prev);
    };
    const handleSubmit = (values) => {
        dispatch(editOrganizerProfile(values));
        setIsEditMode(false);
        toast.success("🦄 Cập nhật thông tin thành công!", toastOptions);
        navigate("/my-event/legal");
    };

    return (
        <Formik initialValues={initialValues}
                validationSchema={validationCompanySchema}
                onSubmit={handleSubmit}>
            {formikProps => {
                const {values, errors, touched} = formikProps;
                console.log({values, errors, touched});
                return (
                    <Form method="PUT"
                          onSubmit={formikProps.handleSubmit}>
                        <h4 className="font-serif text-2xl p-5">Thông tin cơ bản</h4>
                        <FormGroup className="border border-solid shadow-2xl rounded-md py-5 px-5 bg-white">
                            <FormGroup className="grid grid-cols-2 gap-4">
                                <FormGroup>
                                    <FastField
                                        type="text"
                                        name="companyName"
                                        component={InputField}
                                        onChange={formikProps.handleChange}
                                        label="Tên doanh nghiệp"
                                        disabled={isEditMode}
                                        placeholder={organizer.companyName || "Vui lòng nhập tên doanh nghiệp"}
                                        className="block w-full rounded-md shadow-md p-2 mt-2 text-gray-900
                            ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset
                            focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl
                            placeholder:text-gray-500 font-serif sm:text-1xl sm:leading-6"/>
                                </FormGroup>
                                <FormGroup>
                                    <FastField
                                        type="text"
                                        name="businessCode"
                                        component={InputField}
                                        onChange={formikProps.handleChange}
                                        label="Mã số đăng ký kinh doanh"
                                        placeholder={organizer.businessCode || "Vui lòng nhập mã số đăng ký kinh doanh"}
                                        className="block w-full rounded-md shadow-md p-2 mt-2 text-gray-900
                            ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset
                            focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl
                            placeholder:text-gray-500 font-serif sm:text-1xl sm:leading-6"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="dateRange" className="block text-1xl font-serif text-gray-700">
                                        Ngày cấp
                                    </Label>
                                    <FastField
                                        type="date"
                                        name="dateRange"
                                        onChange={formikProps.handleChange}
                                        value={organizer.dateRange}
                                        className="block w-full rounded-md shadow-md border-0 p-2 mt-2
                            text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-1
                            focus:ring-inset focus:ring-indigo-600 sm:text-1xl sm:font-serif
                            sm:leading-6 placeholder:font-serif placeholder:text-1xl"/>
                                </FormGroup>
                                <FormGroup>
                                    <FastField
                                        type="text"
                                        name="issuedBy"
                                        component={InputField}
                                        onChange={formikProps.handleChange}
                                        label="Nơi Cấp"
                                        placeholder={organizer.issuedBy || "Vui lòng nhập nơi cấp"}
                                        className="block w-full rounded-md shadow-md p-2 mt-2 text-gray-900
                            ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset
                            focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl
                            placeholder:text-gray-500 font-serif sm:text-1xl sm:leading-6"/>
                                </FormGroup>
                            </FormGroup>
                        </FormGroup>
                        <h4 className="font-serif text-2xl p-5">Thông tin liên hệ</h4>
                        <FormGroup className="border border-solid shadow-2xl rounded-md py-5 px-5 bg-white">
                            <FormGroup className="grid grid-cols-2 gap-4">
                                <FormGroup>
                                    <FastField
                                        type="text"
                                        name="companyPhone"
                                        component={InputField}
                                        onChange={formikProps.handleChange}
                                        label="Số điện thoại"
                                        placeholder={organizer.companyPhone || "Vui lòng nhập số điện thoại"}
                                        className="block w-full rounded-md shadow-md p-2 mt-2 text-gray-900
                            ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset
                            focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl
                            placeholder:text-gray-500 font-serif sm:text-1xl sm:leading-6"/>
                                </FormGroup>
                                <FormGroup>
                                    <FastField
                                        type="email"
                                        name="companyEmail"
                                        component={InputField}
                                        onChange={formikProps.handleChange}
                                        label="Nơi Cấp"
                                        placeholder={organizer.companyEmail || "bestticket@example.com"}
                                        className="block w-full rounded-md shadow-md p-2 mt-2 text-gray-900
                            ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset
                            focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl
                            placeholder:text-gray-500 font-serif sm:text-1xl sm:leading-6"/>
                                </FormGroup>
                            </FormGroup>
                        </FormGroup>
                        <Button type="submit"
                                className={classNames(
                                    isEditMode ? "mt-4 block w-60 rounded-full shadow-sm text-center text-white text-1xl"
                                        + " px-3 py-2 bg-[#10b981] border-0 hover:bg-gray-600 focus-visible:outline"
                                        + "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        : "hidden"
                                )}>
                            {isEditMode ? "Lưu thông tin" : "Chỉnh sửa"}
                        </Button>
                        <Button type="button" onClick={toggleEditMode}
                                className={classNames(
                                    isEditMode ? "hidden" : "mt-4 block w-60 rounded-full shadow-sm text-center text-white text-1xl"
                                        + " px-3 py-2 bg-[#10b981] border-0 hover:bg-gray-600 focus-visible:outline"
                                        + "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                )}>
                            {isEditMode ? "Lưu thông tin" : "Chỉnh sửa"}
                        </Button>
                    </Form>
                );
            }}
        </Formik>

    );
}