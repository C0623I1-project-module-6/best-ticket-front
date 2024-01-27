import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {Bounce, toast} from "react-toastify";
import * as Yup from "yup";
import {FastField, Form, Formik} from "formik";
import {FormGroup, Label} from "reactstrap";
import InputField from "../../../ultility/customField/InputField.jsx";
import {Button} from "@material-tailwind/react";
import {editOrganizerProfile} from "../../../features/user/OrganizerSlice.js";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function FormEditPersonal({organizer, userExistsList, phoneRegex}) {
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
        }
    const initialValues = {
        name: null,
        email: null,
        phoneNumber: null,
        idCard: null,
        taxCode: null,
        dateRangeTaxCode: null,
        issuedByTaxCode: null,
    }
    const personPhones = userExistsList
        .filter(organizer => organizer.personPhoneNumber)
        .map(organizer => organizer.personPhoneNumber);
    const personEmails = userExistsList
        .filter(organizer => organizer.personEmail)
        .map(organizer => organizer.personEmail);
    const personIdCards = userExistsList
        .filter(organizer => organizer.personIdCard)
        .map(organizer => organizer.personIdCard);
    const personTaxCodes = userExistsList
        .filter(organizer => organizer.personTaxCode)
        .map(organizer => organizer.personTaxCode);
    const validationPersonalSchema = Yup.object().shape({
        name: Yup.string().nullable(),
        email: Yup.string()
            .test("unique", "Email already exists.", value => {
                return !personEmails.includes(value)
            })
            .email("Invalid email! Please add @.")
            .nullable(),

        phoneNumber: Yup.string()
            .test("unique", "Phone number already exists.", value => {
                return !personPhones.includes(value);
            })
            .matches(phoneRegex, "Invalid phone number! Start from 0 and has 10 numbers.")
            .nullable(),

        idCard: Yup.string()
            .test("unique", "Id card already exists.", value => {
                return !personIdCards.includes(value);
            })
            .nullable(),
        taxCode: Yup.string()
            .test("unique", "Tax code already exists.", value => {
                return !personTaxCodes.includes(value);
            })
            .nullable(),
        dateRangeTaxCode: Yup.date().nullable(),
        issuedByTaxCode: Yup.string().nullable(),
    })
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
        <Formik
            initialValues={initialValues}
            validationSchema={validationPersonalSchema}
            onSubmit={handleSubmit}>
            {formikProps => {
                const {values, errors, touched} = formikProps;
                return (
                    <Form method="POST"
                          onSubmit={formikProps.handleSubmit}>
                        <h4 className="font-serif text-2xl p-5">Thông tin cơ bản</h4>
                        <FormGroup className="border border-solid shadow-2xl rounded-md py-5 px-5 bg-white">
                            <FormGroup className="grid grid-cols-2 gap-4">
                                <FormGroup>
                                    <FastField
                                        type="text"
                                        name="name"
                                        component={InputField}
                                        onChange={formikProps.handleChange}
                                        label="Họ và tên"
                                        placeholder={organizer.name || "Vui lòng nhập họ và tên"}
                                        disabled={!isEditMode}
                                        className="block w-full rounded-md shadow-md p-2 mt-2 text-gray-900
                            ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset
                            focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl
                            placeholder:text-gray-800 font-serif sm:text-1xl sm:leading-6"/>
                                </FormGroup>
                                <FormGroup>
                                    <FastField
                                        type="text"
                                        name="taxCode"
                                        component={InputField}
                                        onChange={formikProps.handleChange}
                                        label="Mã số thuế cá nhân"
                                        placeholder={organizer.taxCode || "Vui lòng nhập mã số thuế cá nhân"}
                                        disabled={!isEditMode}
                                        className="block w-full rounded-md shadow-md p-2 mt-2 text-gray-900
                            ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset
                            focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl
                            placeholder:text-gray-800 font-serif sm:text-1xl sm:leading-6"/>
                                </FormGroup>
                                <FormGroup>
                                    <FastField
                                        type="text"
                                        name="idCard"
                                        component={InputField}
                                        onChange={formikProps.handleChange}
                                        label="CMNN/CCCD/Hộ chiếu"
                                        placeholder={organizer.idCard || "Vui lòng nhập CMNN/CCCD/Hộ chiếu"}
                                        disabled={!isEditMode}
                                        className="block w-full rounded-md shadow-md p-2 mt-2 text-gray-900
                            ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset
                            focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl
                            placeholder:text-gray-800 font-serif sm:text-1xl sm:leading-6"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="dateRangeTaxCode"
                                           className="block text-1xl font-serif text-gray-700">
                                        Ngày cấp
                                    </Label>
                                    <FastField
                                        type="date"
                                        name="dateRangeTaxCode"
                                        onChange={formikProps.handleChange}
                                        value={organizer.dateRangeTaxCode}
                                        disabled={!isEditMode}
                                        className="block w-full rounded-md shadow-md border-0 p-2 mt-2
                            text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-1
                            focus:ring-inset focus:ring-indigo-600 sm:text-1xl sm:font-serif
                            sm:leading-6 placeholder:font-serif placeholder:text-1xl"/>
                                </FormGroup>
                                <FormGroup>
                                    <FastField
                                        type="text"
                                        name="issuedByTaxCode"
                                        component={InputField}
                                        onChange={formikProps.handleChange}
                                        label="Nơi cấp"
                                        placeholder={organizer.issuedByTaxCode || "Vui lòng nhập nơi cấp"}
                                        disabled={!isEditMode}
                                        className="block w-full rounded-md shadow-md p-2 mt-2 text-gray-900
                            ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset
                            focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl
                            placeholder:text-gray-800 font-serif sm:text-1xl sm:leading-6"/>
                                </FormGroup>
                            </FormGroup>
                        </FormGroup>
                        <h4 className="font-serif text-2xl p-5">Thông tin liên hệ</h4>
                        <FormGroup className="border border-solid shadow-2xl rounded-md py-5 px-5 bg-white">
                            <FormGroup className="grid grid-cols-2 gap-4">
                                <FormGroup>
                                    <FastField
                                        type="text"
                                        name="phoneNumber"
                                        component={InputField}
                                        onChange={formikProps.handleChange}
                                        label="Số điện thoại"
                                        placeholder={organizer.phoneNumber || "Vui lòng nhập số điện thoại"}
                                        disabled={!isEditMode}
                                        className="block w-full rounded-md shadow-md p-2 mt-2 text-gray-900
                            ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset
                            focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl
                            placeholder:text-gray-800 font-serif sm:text-1xl sm:leading-6"/>
                                </FormGroup>
                                <FormGroup>
                                    <FastField
                                        type="email"
                                        name="email"
                                        component={InputField}
                                        onChange={formikProps.handleChange}
                                        label="Email"
                                        placeholder={organizer.email || "bestticket@example.com"}
                                        disabled={!isEditMode}
                                        className="block w-full rounded-md shadow-md p-2 mt-2 text-gray-900
                            ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset
                            focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl
                            placeholder:text-gray-800 font-serif sm:text-1xl sm:leading-6"/>
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
                            {isEditMode ? "Hoàn thành" : "Chỉnh sửa"}
                        </Button>
                        <Button type="button" onClick={toggleEditMode}
                                className={classNames(
                                    isEditMode ? "hidden" : "mt-4 block w-60 rounded-full shadow-sm text-center text-white text-1xl"
                                        + " px-3 py-2 bg-[#10b981] border-0 hover:bg-gray-600 focus-visible:outline"
                                        + "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                )}>
                            {isEditMode ? "Hoàn thành" : "Chỉnh sửa"}
                        </Button>
                    </Form>
                );
            }}
        </Formik>
    );
}