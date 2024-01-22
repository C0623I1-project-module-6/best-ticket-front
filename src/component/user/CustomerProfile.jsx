import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchGetUser, selectUserEdit, selectUserLogin} from "../../features/UserSlice.js";
import EditCustomerProfile from "./EditCustomerProfile.jsx";
import AddCustomerProfile from "./AddCustomerProfile.jsx";

export default function CustomerProfile() {
    const user = useSelector(selectUserLogin);
    const dispatch = useDispatch();
    const userEdit = useSelector(selectUserEdit);

    useEffect(() => {
        dispatch(fetchGetUser(user.id));
    }, []);

    return (
        <>
            {
                userEdit?.customer ? (
                    <EditCustomerProfile customer={userEdit.customer}/>
                ) : (
                    <AddCustomerProfile/>
                )
            }
        </>
    )
}