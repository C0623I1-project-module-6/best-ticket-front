import AdminSidebar from "../component/sidebar/AdminSidebar.jsx";
import AdminSidebarV1 from "../component/sidebar/AdminSidebarV1.jsx";

const AdminLayout = ({children}) => {
    return (
        <>
            <div className="flex">
                <div className="">
                    <AdminSidebar/>
                </div>
                <div className="flex-col justify-center w-full h-full ">
                    <div className="flex h-fit">
                        {
                            children
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminLayout;
