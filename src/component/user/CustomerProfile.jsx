import {useSelector} from "react-redux";

import {selectLockUser, selectRemoveUser, selectUserEdit, selectUserLogout} from "../../features/user/UserSlice.js";
import {useEffect, useState} from "react";
import EditCustomerProfile from "./edit/EditCustomerProfile.jsx";
import RegisterCustomerProfile from "./add/RegisterCustomerProfile.jsx";
import {
    selectCustomerIdCards,
    selectCustomerPhoneNumbers,
    selectCustomerReceiptEmails
} from "../../features/user/ExistsSlice.js";
import {Bounce} from "react-toastify";
import {selectUrlAvatar} from "../../features/FileSlice.js";


export default function CustomerProfile() {
    const userEdit = useSelector(selectUserEdit);
    const phoneNumbers = useSelector(selectCustomerPhoneNumbers);
    const idCards = useSelector(selectCustomerIdCards);
    const receiptEmails = useSelector(selectCustomerReceiptEmails);
    const [showLock, setShowLock] = useState(false);
    const [showRemove, setShowRemove] = useState(false);
    const userLogout = useSelector(selectUserLogout);
    const userLock = useSelector(selectLockUser);
    const userRemove = useSelector(selectRemoveUser);
    const phoneRegex = /^0\d{9}$/;
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
    return (
        <>
            {
                userEdit?.customer ? (
                    <EditCustomerProfile
                        customer={userEdit?.customer}
                        userEdit={userEdit}
                        phoneNumbers={phoneNumbers}
                        idCards={idCards}
                        receiptEmails={receiptEmails}
                        showLock={showLock}
                        setShowLock={setShowLock}
                        showRemove={showRemove}
                        setShowRemove={setShowRemove}
                        userLogout={userLogout}
                        userLock={userLock}
                        userRemove={userRemove}
                        phoneRegex={phoneRegex}
                        toastOptions={toastOptions}
                    />
                ) : (
                    <RegisterCustomerProfile
                        userEdit={userEdit}
                        phoneNumbers={phoneNumbers}
                        idCards={idCards}
                        receiptEmails={receiptEmails}
                        showLock={showLock}
                        setShowLock={setShowLock}
                        showRemove={showRemove}
                        setShowRemove={setShowRemove}
                        userLogout={userLogout}
                        userLock={userLock}
                        userRemove={userRemove}
                        phoneRegex={phoneRegex}
                        toastOptions={toastOptions}
                    />
                )
            }
        </>
    );
}