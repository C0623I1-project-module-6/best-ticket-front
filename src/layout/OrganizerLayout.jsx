import OrganizerSidebar from "../component/sidebar/OrganizerSidebar.jsx";
import UserHeader from "../component/header/UserHeader.jsx";

function OrganizerLayout({children}) {
    return (
        <div className=" relative item-center h-screen max-h-full bg-[#ece8f3]
                             dark:bg-[#111827] dark:text-white">
            <UserHeader/>
            <div className="relative md:flex max-h-full h-screen">
                <div className=" w-1/4 ">
                    <OrganizerSidebar/>
                </div>
                <div className="w-3/4 max-h-screen overflow-y-hidden">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default OrganizerLayout;
