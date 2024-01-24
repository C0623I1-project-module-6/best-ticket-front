import UserHeader from "../component/header/UserHeader.jsx";
import {useEffect} from "react";
import {reLoginWithToken, selectUserLogin} from "../features/user/UserSlice.js";
import {useDispatch, useSelector} from "react-redux";

const UserLayout = ({children}) => {
    const user = useSelector(selectUserLogin);
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem("token") !== null) {
            dispatch(reLoginWithToken())
            console.log("Hello")
        }
    }, []);
    return (
        <>
            <div className=" relative item-center h-screen max-h-full bg-[#ece8f3]
                             dark:bg-[#111827] dark:text-white
                             ">
                <UserHeader/>
                <div className="relative md:flex max-h-full h-screen">
                    {children}
                </div>

            </div>
        </>

    )
}
export default UserLayout;
