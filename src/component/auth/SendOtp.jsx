import {FastField, Form, Formik} from "formik";
import AuthHeader from "../header/AuthHeader.jsx";
import {FormGroup} from "reactstrap";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import InputRegister from "../../ultility/customField/InputRegister.jsx";
import {sendOtpWithEmail} from "../../features/user/UserSlice.js";
import {Bounce, toast} from "react-toastify";
import * as Yup from "yup";

const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
};
export default function SendOtp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialValues = {
        email: "",
    }
    const validationSendOtpSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email! Please add @.")
            .required("This field is required.")
    })

    const handleSubmit = (values) => {
        dispatch(sendOtpWithEmail(values))
        toast.success("🦄 Vui lòng kiểm tra mail để nhận mã otp", toastOptions);
        navigate("/forgot-password")
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSendOtpSchema}
            onSubmit={handleSubmit}>
            {formikProps => {
                const {values, errors, touched} = formikProps
                return (
                    <FormGroup className="flex bg-white rounded-lg  items-center  flex-1 flex-col justify-center lg:px-8
                             dark:bg-black dark:text-white">
                        <AuthHeader name={"Login"}/>
                        <FormGroup className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
                            <Form className="space-y-6"
                                  method="POST"
                                  onSubmit={formikProps.handleSubmit}>
                                <FormGroup>
                                    <FastField
                                        type="email"
                                        name="email"
                                        component={InputRegister}
                                        label="Email nhận OTP"
                                        onChange={formikProps.handleChange}/>
                                </FormGroup>
                                <FormGroup className="flex justify-center gap-3">
                                    <FormGroup className="w-full ">
                                        <FormGroup className="w-full">
                                            <button type="submit"
                                                    className="w-full btn btn-outline btn-primary dark:btn-info">
                                                Gửi
                                            </button>
                                        </FormGroup>
                                        <FormGroup className="w-full">
                                            <button type="button" onClick={() => {
                                                navigate("/login")
                                            }}
                                                    className="w-full btn btn-outline btn-primary dark:btn-info">
                                                Quay lại
                                            </button>
                                        </FormGroup>
                                    </FormGroup>
                                </FormGroup>
                            </Form>
                        </FormGroup>
                    </FormGroup>
                );
            }}
        </Formik>
    );
}