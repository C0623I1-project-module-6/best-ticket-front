import UserHeader from "../component/header/UserHeader.jsx";

function OrganizesLayout({children}) {
    return (
        <>
            <div className="bg-[#475569] h-screen">
                {
                    children
                }
            </div>
        </>
    )
}

export default OrganizesLayout;
