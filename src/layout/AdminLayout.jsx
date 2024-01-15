import AdminSidebar from "../component/sidebar/AdminSidebar.jsx";
import AdminHeader from "../component/header/AdminHeader.jsx";


const AdminLayout = ({children}) => {
    return (
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
    )
}
export default AdminLayout;
