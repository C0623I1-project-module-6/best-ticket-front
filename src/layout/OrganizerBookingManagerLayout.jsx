import BookingManagerSidebar from "../component/sidebar/BookingManagerSidebar.jsx";
import {useEffect} from "react";
import {reLoginWithToken} from "../features/user/UserSlice.js";
import {useDispatch} from "react-redux";

function OrganizerBookingManagerLayout({children}) {
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("token") !== null) {
            dispatch(reLoginWithToken())
        }
    }, [dispatch]);

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
