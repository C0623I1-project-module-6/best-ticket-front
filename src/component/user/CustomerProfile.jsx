import {useDispatch, useSelector} from "react-redux";

import {fetchGetUser, selectUserEdit, selectUserLogin} from "../../features/user/UserSlice.js";
import {useEffect} from "react";
import EditCustomerProfile from "./edit/EditCustomerProfile.jsx";
import RegisterCustomerProfile from "./add/RegisterCustomerProfile.jsx";


export default function CustomerProfile() {
    const dispatch = useDispatch();
    const user = useSelector(selectUserLogin);
    const userEdit = useSelector(selectUserEdit)

    useEffect(() => {
        dispatch(fetchGetUser(user.id));
    }, []);

    return (
        <>
            {
                userEdit?.customer ? (
                    <EditCustomerProfile customer={userEdit?.customer} user={userEdit}/>
                ) : (
                    <RegisterCustomerProfile/>
                )
            }
        </>
    );
}