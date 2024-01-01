import Content from "../../../component/content/Content.jsx";
import Footer from "../../../component/Footer.jsx";
import SideBar from "../../../component/sidebar/UserSideBar.jsx";

const UserHomePage = () => {
    return (
        <>
            <SideBar/>
            <div className="relative md:flex h-screen overflow-hidden">
                <div className="flex-wrap overflow-y-auto">
                    <Content/>
                    <Footer/>
                </div>
            </div>
        </>

    )
}
export default UserHomePage;
