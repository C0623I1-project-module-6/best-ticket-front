import {useDispatch, useSelector} from "react-redux";
import {fetchGetUser, selectUserEdit, selectUserLogin} from "../../features/user/UserSlice.js";
import {useEffect} from "react";
import EditOrganizerProfile from "./edit/EditOrganizerProfile.jsx";
import RegisterOrganizerProfile from "./add/RegisterOrganizerProfile.jsx";

export default function OrganizerProfile() {
    const dispatch = useDispatch();
    const user = useSelector(selectUserLogin);
    const userEdit = useSelector(selectUserEdit);

    useEffect(() => {
        dispatch(fetchGetUser(user.id));

    }, []);
    return (
        <>
            {
                userEdit?.organizer ? (
                    <EditOrganizerProfile organizer={userEdit?.organizer}/>
                ) : (
                    <RegisterOrganizerProfile/>
                )
            }
        </>
    );
}