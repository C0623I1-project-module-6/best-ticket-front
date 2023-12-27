
import Home from "../../component/content/Content.jsx"
import HomeUser from "../../layout/pages/home/HomeUser.jsx";
import UserLayout from "../../layout/UserLayout.jsx";
import AdminLayout from "../../layout/AdminLayout.jsx";
import Login from "../../component/Login.jsx";
import HomeAdmin from "../../layout/pages/home/HomeAdmin.jsx";
import GuestLayout from "../../layout/GuestLayout.jsx";
import Register from "../../component/Register.jsx";

export const ROUT_DATA = [
    {path: "/", element: Home, layout: UserLayout},
    {path: "/login", element: Login, layout: GuestLayout},
    {path: "/register", element: Register, layout: GuestLayout},
    {path: "/home", element: HomeUser, layout: UserLayout},
    {path: "/admin", element: HomeAdmin, layout: AdminLayout},

];
