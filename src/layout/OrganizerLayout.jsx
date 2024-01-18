import OrganizerSidebar from "../component/sidebar/OrganizerSidebar.jsx";

function OrganizerLayout({children}) {
    return (
        <div className="flex">
            <div  className=" w-1/4 ">
            <OrganizerSidebar/>
            </div>
            <div className="w-3/4 bg-gray-200">
                {
                    children
                }
            </div>
        </div>
    )
}

export default OrganizerLayout;
