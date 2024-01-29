import {FormGroup, Label} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {
    lockUser,
    logoutUser,
    removeUser,
    selectLockUser,
    selectRemoveUser,
    selectUserLogin,
    selectUserLogout
} from "../../features/user/UserSlice.js";
import {Button} from "@material-tailwind/react";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import LockModal from "../auth/LockModal.jsx";
import RemoveModal from "../auth/RemoveModal.jsx";

export default function UserProfile() {
    const user = useSelector(selectUserLogin);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showLock, setShowLock] = useState(false);
    const [showRemove, setShowRemove] = useState(false);
    const userLogout = useSelector(selectUserLogout);
    const userLock = useSelector(selectLockUser);
    const userRemove = useSelector(selectRemoveUser)
    const handleLock = () => {
        dispatch(lockUser(userLock));
        navigate("/");
        dispatch(logoutUser(userLogout))
    }
    const handleRemove = () => {
        dispatch(removeUser(userRemove));
        navigate("/")
        dispatch(logoutUser(userLogout));
    }
    return (
        <FormGroup className="flex w-screen justify-center">
            <FormGroup className="flex">
                <FormGroup className="w-1/4">
                    <FormGroup className="parent flex justify-center h-screen">
                        <FormGroup className="image flex flex-col items-center">
                            <FormGroup className=" my-8 flex justify-center gap-x-3">
                                <svg className="mx-auto h-60 w-60 text-gray-300" viewBox="0 0 24 24"
                                     fill="curentColor"
                                     aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25
                                      6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0
                                      006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224
                                      8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75
                                      3.75 0 017.5 0z"
                                          clipRule="evenodd"/>
                                </svg>
                            </FormGroup>
                        </FormGroup>
                    </FormGroup>
                </FormGroup>
                <FormGroup className="w-3/4 p-10 ">
                    <FormGroup className="border border-solid shadow-2xl rounded-md py-5 px-5 bg-white">
                        <h2 className=" flex justify-center text-2xl font-serif leading-7 text-gray-900">
                            Thông tin tài khoản</h2>
                        <FormGroup className="grid grid-cols-2 gap-4 mt-4">
                            <FormGroup>
                                <Label htmlFor="username"
                                       className="block text-1xl font-serif text-gray-700">
                                    Username
                                </Label>
                                <FormGroup className="mt-2">
                                    <input
                                        name="username"
                                        value={user.username}
                                        disabled
                                        className="block w-full rounded-md shadow-md p-2 mt-2 text-gray-900
                                                    ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset
                                                    focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl
                                                    placeholder:text-gray-800 font-serif sm:text-1xl sm:leading-6"/>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email"
                                       className="block text-1xl font-serif text-gray-700">
                                    Email
                                </Label>
                                <FormGroup className="mt-2">
                                    <input
                                        name="email"
                                        value={user.email}
                                        disabled
                                        className="block w-full rounded-md shadow-md p-2 mt-2 text-gray-900
                                                    ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset
                                                    focus:ring-indigo-600 placeholder:font-serif placeholder:text-1xl
                                                    placeholder:text-gray-800 font-serif sm:text-1xl sm:leading-6"/>
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
                        <Button type="button"
                                onClick={() => setShowLock(true)}
                                className="rounded-md bg-[#10b981] px-3 py-2 text-1xl
                                         text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2
                                         focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Khóa tài khoản
                        </Button>
                        {showLock && (
                            <LockModal
                                visible={showLock}
                                onOk={handleLock}
                                onCancel={() => setShowLock(false)}/>
                        )}
                        <Button type="button"
                                onClick={() => setShowRemove(true)}
                                className="rounded-md bg-[#10b981] px-3 py-2 text-1xl
                                         text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2
                                         focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Xóa tài khoản
                        </Button>
                        {showRemove && (
                            <RemoveModal
                                visible={showRemove}
                                onOk={handleRemove}
                                onCancel={() => setShowRemove(false)}
                            />
                        )}
                    </FormGroup>
                </FormGroup>
            </FormGroup>
        </FormGroup>
    );
}