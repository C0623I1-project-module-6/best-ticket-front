import Navbar from "../component/Navbar.jsx";

const GuestLayout = ({children}) => {
    return (
        <div className="flex-row">
            <div className="px-4">

                {
                    children
                }
            </div>
        </div>
    )
}
export default GuestLayout;