 import AdminSidebar from "../component/sidebar/AdminSidebar.jsx";
import AdminHeader from "../component/header/AdminHeader.jsx";
import {Navigate} from "react-router-dom";
import {useAuthor} from "../ultility/customHook/useAuthor.js";


const AdminLayout = ({children}) => {
    const isAdmin = useAuthor();
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
