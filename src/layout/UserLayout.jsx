import UserHeader from "../component/header/UserHeader.jsx";

const UserLayout = ({children}) => {
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
