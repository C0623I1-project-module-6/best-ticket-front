import AuthHeader from "../header/AuthHeader.jsx";
import {FormGroup} from "reactstrap";
import {useNavigate} from "react-router-dom";

export default function UserRecovery() {
    const navigate = useNavigate()
    return (
        <FormGroup className="flex bg-white rounded-lg  items-center  flex-1 flex-col justify-center lg:px-8
                             dark:bg-black dark:text-white">
            <AuthHeader name={"Recover account"}/>
            <FormGroup className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
                <FormGroup>
                    <span className="text-xl">Bạn muốn khôi phục tài khoản bị khóa?</span>
                </FormGroup>
                <FormGroup>
                    <span className="text-1xl">Vui lòng chọn tiếp tục.</span>
                </FormGroup>
                <FormGroup className="flex justify-center gap-3">
                    <FormGroup className="w-full ">
                        <FormGroup className="w-full">
                            <button type="button" onClick={() => {
                                navigate("/send-otp-unlock")
                            }}
                                    className="w-full btn btn-outline btn-primary dark:btn-info">
                                Tiếp tục
                            </button>
                        </FormGroup>
                        <FormGroup className="w-full">
                            <button type="button"
                                    onClick={() => {
                                navigate("/login")
                            }}
                                    className="w-full btn btn-outline btn-primary dark:btn-info">
                                Quay lại
                            </button>
                        </FormGroup>
                    </FormGroup>
                </FormGroup>
            </FormGroup>
        </FormGroup>
    )
}