import {FastField, Form, Formik} from "formik";
import InputField from "../../../ultility/customField/InputField.jsx";
import {FormGroup} from "reactstrap";
import {Button} from "@material-tailwind/react";
import * as Yup from "yup";
import {registerOrganizerProfile} from "../../../features/user/OrganizerSlice.js";
import {Bounce, toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export default function FormCompany({userExistsList,phoneRegex}) {
    const dispatch=useDispatch();
    const navigate=useNavigate();
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
    const initialValues={
        businessCode: null,
        companyName: null,
        companyEmail: null,
        companyPhone: null,
        dateRange: null,
        issuedBy: null,
    }
    const companyNames = userExistsList
        .filter(organizer => organizer.companyName)
        .map(organizer => organizer.companyName);
    const companyEmails = userExistsList
        .filter(organizer => organizer.companyEmail)
        .map(organizer => organizer.companyEmail);
    const companyPhones = userExistsList
        .filter(organizer => organizer.companyPhone)
        .map(organizer => organizer.companyPhone);
    const businessCodes = userExistsList
        .filter(organizer => organizer.companyBusinessCode)
        .map(organizer => organizer.companyBusinessCode);
    const validationCompanySchema= Yup.object().shape({
        companyEmail: Yup.string()
            .test("unique", "Email already exists.", value => {
                return !companyEmails.includes(value);
            })
            .email("Invalid email! Please add @.")
            .required("This field is required."),
        companyName: Yup.string()
            .test("unique", "Company name already exists.", value => {
                return !companyNames.includes(value);
            })
            .required("This field is required."),
        companyPhone: Yup.string()
            .test("unique", "Company phone number already exists.", value => {
                return !companyPhones.includes(value);
            })
            .matches(phoneRegex, "Invalid phone number! Start from 0 and has 10 numbers.")
            .required("This field is required."),
        businessCode: Yup.string()
            .test("unique", "Business code already exists.", value => {
                return !businessCodes.includes(value);
            })
            .required("This field is required."),

        dateRange: Yup.date().required("This field is required."),
        issuedBy: Yup.string().required("This field is required."),
    })
    const handleSubmit = (values) => {
        dispatch(registerOrganizerProfile(values));
        toast.success("🦄 Đăng ký thông tin thành công!", toastOptions)
        navigate("/my-event/legal")

    }
    return (
        <Formik validationSchema={validationCompanySchema}
                initialValues={initialValues}
                onSubmit={handleSubmit}>
            {formikProps => {
                const {values, errors, touched} = formikProps;
                return(
                    <Form method="POST"
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
                                        placeholder="Vui lòng nhập tên doanh ngiệp"
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
                                        placeholder="Vui lòng nhập mã số đăng ký kinh doanh"
                                        className="block w-full rounded-md shadow-md p-2 mt-2 text-gray-900
                            ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset
                            focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl
                            placeholder:text-gray-500 font-serif sm:text-1xl sm:leading-6"/>
                                </FormGroup>
                                <FormGroup>
                                    <FastField
                                        type="date"
                                        name="dateRange"
                                        component={InputField}
                                        onChange={formikProps.handleChange}
                                        label="Ngày cấp"
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
                                        placeholder="Vui lòng nhập nơi cấp"
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
                                        placeholder="Vui lòng nhập số điện thoại"
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
                                        placeholder="bestticket@example.com"
                                        className="block w-full rounded-md shadow-md p-2 mt-2 text-gray-900
                            ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset
                            focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl
                            placeholder:text-gray-500 font-serif sm:text-1xl sm:leading-6"/>
                                </FormGroup>
                            </FormGroup>
                        </FormGroup>
                        <Button type="submit"
                                className=" mt-4 block w-60 rounded-full  shadow-sm text-center text-white text-1xl
                                    px-3 py-2 bg-[#10b981] border-0 hover:bg-gray-600 focus-visible:outline
                                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Hoàn thành
                        </Button>
                    </Form>
                    );
            }}
        </Formik>
    );
}