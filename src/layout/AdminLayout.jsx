import Sidebar from "../component/Sidebar.jsx";
import AdminHeader from "../component/AdminHeader.jsx";

const AdminLayout = ({children}) => {
    return (
        <>
            <div className="flex">
                <Sidebar/>
                <div className="flex-col justify-center  w-full ">

                    {children}
                </div>
            </div>
        </>
    )
}
export default AdminLayout;