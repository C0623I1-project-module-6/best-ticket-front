import UserHeader from "../component/header/UserHeader.jsx";
import {useEffect, useState} from "react";
import {reLoginWithToken} from "../features/user/UserSlice.js";
import {useDispatch} from "react-redux";

const UserLayout = ({children}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("token") !== null) {
            dispatch(reLoginWithToken())
        }
    }, []);

    const time = sessionStorage.getItem("time");
    const [timeLeft, setTimeLeft] = useState(time);
    useEffect(() => {
        if (time) {
            const timer = setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime <= 0) {
                        clearInterval(timer);
                        return prevTime;
                    }
                    return prevTime - 1;
                });
            }, 1000);
            return () => {
                clearInterval(timer);
            };
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
