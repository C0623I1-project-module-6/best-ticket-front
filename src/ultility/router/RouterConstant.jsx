import Content from "../../component/content/Content.jsx"
import UserHomePage from "../../layout/pages/home/UserHomePage.jsx";
import UserLayout from "../../layout/UserLayout.jsx";
import AdminLayout from "../../layout/AdminLayout.jsx";
import Login from "../../component/auth/Login.jsx";
import AdminHomePage from "../../layout/pages/home/AdminHomePage.jsx";
import GuestLayout from "../../layout/GuestLayout.jsx";
import Register from "../../component/auth/Register.jsx";
import TicketHistory from "../../layout/pages/ticket/TicketHistory.jsx";
import OrganizesLayout from "../../layout/OganizesLayout.jsx";
import EventHomePage from "../../layout/pages/event/EventHomePage.jsx";

export const ROUT_DATA = [
    {path: "/login", element: Login, layout: GuestLayout},
    {path: "/register", element: Register, layout: GuestLayout},
    {path: "/", element: UserHomePage, layout: UserLayout},
    {path: "/event", element: EventHomePage, layout: UserLayout},
    {path: "/my-ticket", element: TicketHistory, layout: UserLayout},
    {path: "/admin", element: AdminHomePage, layout: AdminLayout},

];
