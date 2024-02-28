import BookingManagerSidebar from "../component/sidebar/BookingManagerSidebar.jsx";
import {useEffect} from "react";
import {reLoginWithToken, selectUserLogin} from "../features/user/UserSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {getExistsUsers, selectExistsList} from "../features/user/ExistsSlice.js";

function OrganizerBookingManagerLayout({children}) {
    const dispatch = useDispatch();
    const existsList = useSelector(selectExistsList);
    useEffect(() => {
        if (localStorage.getItem("token") !== null) {
            dispatch(reLoginWithToken())
        }
    }, []);

    useEffect(() => {
        dispatch(getExistsUsers());
    }, []);
    console.log(existsList)
    
    return (
        <div className="flex">
            <div className="w-2/6 text-white">
                <BookingManagerSidebar/>
            </div>
            <div className="bg-white">
                {
                    children
                }
            </div>
        </div>
    )
}

export default OrganizerBookingManagerLayout;
