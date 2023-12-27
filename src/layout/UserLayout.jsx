import Header from "../component/header/Header.jsx";
import SideBar from "../component/sidebar/SideBar.jsx";
import Content from "../component/content/Content.jsx";

const UserLayout = ({children}) => {
    return (
        <>
            <div>
                <Header/>
                <div className="flex  ">
                    <SideBar/>
                    {children}
                </div>
            </div>
        </>
    )
}
export default UserLayout;