import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {editOrganizerProfile} from "../../../features/user/OrganizerSlice.js";
import * as Yup from "yup";
import {FastField, Form, Formik} from "formik";
import {FormGroup, Label} from "reactstrap";
import InputProfile from "../../../ultility/customField/InputProfile.jsx";
import {Button} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import {
    selectCompanyBusinessCodes,
    selectCompanyEmails,
    selectCompanyNames,
    selectCompanyPhones
} from "../../../features/user/ExistsSlice.js";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function FormEditCompany({
                                            toastOptions,
                                            phoneRegex,
                                            organizer,
                                            success,
                                            error,
                                            organizerEdited
                                        }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isEditMode, setIsEditMode] = useState(false);
    const companyNames = useSelector(selectCompanyNames);
    const companyEmails = useSelector(selectCompanyEmails);
    const companyPhones = useSelector(selectCompanyPhones);
    const businessCodes = useSelector(selectCompanyBusinessCodes);
    const {
        businessCode: currentBusinessCode,
        companyName: currentCompanyName,
        companyEmail: currentCompanyEmail,
        companyPhone: currentCompanyPhone,
        dateRange: currentDateRange,
        issuedBy: currentCompanyIssuedBy,
    } = organizer;
    const initialValues = {
        businessCode: currentBusinessCode,
        companyName: currentCompanyName,
        companyEmail: currentCompanyEmail,
        companyPhone: currentCompanyPhone,
        dateRange: currentDateRange,
        issuedBy: currentCompanyIssuedBy,
    };

    const validationCompanySchema = Yup.object().shape({
        companyEmail: Yup.string()
            .test("unique", "Email already exists.", value => {
                return !companyEmails.includes(value) || value === currentCompanyEmail;
            })
            .email("Invalid email! Please add @.")
            .nullable(),
        companyName: Yup.string()
            .test("unique", "Company name already exists.", value => {
                return !companyNames.includes(value) || value === currentCompanyName;
            })
            .nullable(),
        companyPhone: Yup.string()
            .test("unique", "Company phone number already exists.", value => {
                return !companyPhones.includes(value) || value === currentCompanyPhone;
            })
            .matches(phoneRegex, "Invalid phone number! Start from 0 and has 10 numbers.")
            .nullable(),
        businessCode: Yup.string()
            .test("unique", "Business code already exists.", value => {
                return !businessCodes.includes(value) || value === currentBusinessCode;
            })
            .nullable(),
        dateRange: Yup.date().nullable(),
        issuedBy: Yup.string().nullable(),
    });
    const toggleEditMode = () => {
        setIsEditMode(prev => !prev);
    };

    useEffect(() => {
        if (success && organizerEdited) {
            setIsEditMode(false);
            toast.success("🦄 Cập nhật thông tin thành công!", toastOptions);
            navigate("/my-event/legal");
        }
    }, [success, organizerEdited]);
    useEffect(() => {
        if (error) {
            toast.error("🦄 Cập nhật thông tin thất bại!", toastOptions);
        }
    }, [error]);
    return (
        <Formik initialValues={initialValues}
                validationSchema={validationCompanySchema}
                onSubmit={values => {
                    dispatch(editOrganizerProfile(values));
                }}>
            {formikProps => {
                const {values, errors, touched} = formikProps;
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
                                        component={InputProfile}
                                        onChange={formikProps.handleChange}
                                        label="Tên doanh nghiệp"
                                        placeholder="Vui lòng nhập tên doanh nghiệp"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <FastField
                                        type="text"
                                        name="businessCode"
                                        component={InputProfile}
                                        onChange={formikProps.handleChange}
                                        label="Mã số đăng ký kinh doanh"
                                        placeholder="Vui lòng nhập mã số đăng ký kinh doanh"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="dateRange" className="block text-1xl font-serif text-gray-700">
                                        Ngày cấp
                                    </Label>
                                    <FastField
                                        type="date"
                                        name="dateRange"
                                        onChange={formikProps.handleChange}
                                        disabled={!isEditMode}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <FastField
                                        type="text"
                                        name="issuedBy"
                                        component={InputProfile}
                                        onChange={formikProps.handleChange}
                                        label="Nơi Cấp"
                                        placeholder="Vui lòng nhập nơi cấp"
                                    />
                                </FormGroup>
                            </FormGroup>
                        </FormGroup>
                        <h4 className="font-serif text-2xl p-5">Thông tin liên hệ</h4>
                        <FormGroup className="border border-solid shadow-2xl rounded-md py-5 px-5 bg-white">
                            <FormGroup className="grid grid-cols-2 gap-4">
                                <FormGroup>
                                    <FastField
                                        type="tel"
                                        name="companyPhone"
                                        component={InputProfile}
                                        onChange={formikProps.handleChange}
                                        label="Số điện thoại"
                                        placeholder="Vui lòng nhập số điện thoại"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <FastField
                                        type="email"
                                        name="companyEmail"
                                        component={InputProfile}
                                        onChange={formikProps.handleChange}
                                        label="Nơi Cấp"
                                        placeholder="bestticket@example.com"
                                    />
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