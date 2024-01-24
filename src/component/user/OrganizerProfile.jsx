import {useDispatch, useSelector} from "react-redux";
import {fetchGetUser, selectUserEdit, selectUserLogin} from "../../features/user/UserSlice.js";
import {useEffect} from "react";
import EditOrganizerProfile from "./edit/EditOrganizerProfile.jsx";
import RegisterOrganizerProfile from "./add/RegisterOrganizerProfile.jsx";

export default function OrganizerProfile() {
    const dispatch = useDispatch();
    const user = useSelector(selectUserLogin);
    console.log(user);
    const userEdit = useSelector(selectUserEdit);
    console.log(userEdit);
    useEffect(() => {
        dispatch(fetchGetUser(user.id));
        console.log(user.id)
    }, []);
    console.log(userEdit?.organizer)
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