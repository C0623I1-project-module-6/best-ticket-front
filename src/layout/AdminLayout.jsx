import AdminSidebar from "../component/sidebar/AdminSidebar.jsx";

const AdminLayout = ({children}) => {
    return (
        <>
            <div className="flex max-h-full h-screen overflow-hidden">
                <div className="h-screen">
                    <AdminSidebar/>
                </div>
                <div className="flex-col justify-center w-full h-screen overflow-hidden">
                    <div className="flex h-fit overflow-y-auto p-10">
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
