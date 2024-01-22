import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchGetUser, selectUser} from "../../features/UserSlice.js";
import EditCustomerProfile from "./EditCustomerProfile.jsx";
import AddCustomerProfile from "./AddCustomerProfile.jsx";
import {useParams} from "react-router-dom";

export default function CustomerProfile() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const userId=useParams();

    const getUser = () => {
        if (userId != null) {

        }
    }
    useEffect(() => {
        dispatch(fetchGetUser(userId));
    }, [dispatch, userId]);

    return (
        <>
            {
                user?.customer ? (
                    <EditCustomerProfile customer={user.customer}/>
                ) : (
                    <AddCustomerProfile/>
                )
            }
        </>
    )
}