import UserHeader from "../component/header/UserHeader.jsx";
import {CustomSpeedDial} from "../component/CustomSpeedDial.jsx";

const UserLayout = ({children}) => {
    return (
        <>
            <div className="flex-col relative item-center overflow-hidden">
                <UserHeader/>
                <div className="relative md:flex h-screen overflow-hidden ">
                    {children}
                </div>
            </div>
        </>

    )
}
export default UserLayout;
