import AdminSidebar from "../component/sidebar/AdminSidebar.jsx";
import AdminHeader from "../component/header/AdminHeader.jsx";
import {Navigate} from "react-router-dom";
import {useAuthor} from "../ultility/customHook/useAuthor.js";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {reLoginWithToken} from "../features/UserSlice.js";


const AdminLayout = ({children}) => {
    const isAdmin = useAuthor();
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem("token") !== null) {
            dispatch(reLoginWithToken())
            console.log("Hello")
        }
    }, []);
    return isAdmin ? (
            <>
                <div className="flex max-h-full h-screen overflow-hidden">
                    <div className="h-screen">
                        <AdminSidebar/>
                    </div>
                    <div className="flex-col justify-center w-full  overflow-hidden">
                        <div className="flex-col  max-h-full overflow-hidden">
                            <AdminHeader/>
                            <div className="h-fit">
                                {
                                    children
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ) :
        <Navigate to={"/403"}/>
}
export default AdminLayout;
