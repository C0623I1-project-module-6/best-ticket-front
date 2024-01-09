import GuestLayout from "../layout/GuestLayout.jsx";
import UserLayout from "../layout/UserLayout.jsx";
import AdminLayout from "../layout/AdminLayout.jsx";
import UserHomePage from "../layout/pages/home/UserHomePage.jsx";
import AdminHomePage from "../layout/pages/home/AdminHomePage.jsx";
import EventHomePage from "../layout/pages/event/EventHomePage.jsx";
import Login from "../component/auth/Login.jsx";
import Register from "../component/auth/Register.jsx";
import TicketHistory from "../layout/pages/ticket/TicketHistory.jsx";
import Search from "../component/event/Search.jsx";
import AdminTable from "../component/table/AdminTable.jsx";
import AdminBookingTable from "../component/table/AdminBookingTable.jsx";
import CreateEvent from "../component/event/CreateEvent.jsx";

export const ROUT_DATA = [
  { path: "/login", element: Login, layout: GuestLayout },
  { path: "/register", element: Register, layout: GuestLayout },
  { path: "/", element: UserHomePage, layout: UserLayout },
  { path: "/event", element: EventHomePage, layout: UserLayout },
  { path: "/my-ticket", element: TicketHistory, layout: UserLayout },
  { path: "/admin", element: AdminHomePage, layout: AdminLayout },
  { path: "/admin/user", element: AdminTable, layout: AdminLayout },
  { path: "/admin/bookings", element: AdminBookingTable, layout: AdminLayout },
  { path: "/search", element: Search, layout: UserLayout },
  {path: "/event/create", element: CreateEvent},

];
