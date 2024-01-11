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
import TicketBooking from "../component/ticket/TicketBooking.jsx";
import CreateEvent from "../component/event/CreateEvent.jsx";
import TicketPayment from "../component/ticket/TicketPayment.jsx";
import ForbiddenPage from "../layout/pages/errors/ForbiddenPage.jsx";
import ErrorLayout from "../layout/ErrorLayout.jsx";
import NotFoundPage from "../layout/pages/errors/NotFoundPage.jsx";
import InternalServerErrorPage from "../layout/pages/errors/InternalServerErrorPage.jsx";
import BadGatewayPage from "../layout/pages/errors/BadGatewayPage.jsx";
import ServiceUnavailablePage from "../layout/pages/errors/ServiceUnavailablePage.jsx";

export const ROUT_DATA = [
    {path: "/login", element: Login, layout: GuestLayout},
    {path: "/register", element: Register, layout: GuestLayout},
    {path: "/403", element: ForbiddenPage, layout: ErrorLayout},
    {path: "/404", element: NotFoundPage, layout: ErrorLayout},
    {path: "/500", element: InternalServerErrorPage, layout: ErrorLayout},
    {path: "/502", element: BadGatewayPage, layout: ErrorLayout},
    {path: "/503", element: ServiceUnavailablePage, layout: ErrorLayout},
    {path: "/", element: UserHomePage, layout: UserLayout},
    {path: "/event", element: EventHomePage, layout: UserLayout},
    {path: "/my-ticket", element: TicketHistory, layout: UserLayout},
    {path: "/admin", element: AdminHomePage, layout: AdminLayout},
    {path: "/admin/user", element: AdminTable, layout: AdminLayout},
    {path: "/admin/ticket", element: AdminTable, layout: AdminLayout},
    {path: "/admin/:param", element: AdminTable, layout: AdminLayout},
    {path: "/search", element: Search, layout: UserLayout},
    {path: "/event/id/ticket-booking/id", element: TicketBooking, layout: UserLayout},
    {path: "/event/id/ticket-booking/id/2", element: TicketPayment, layout: UserLayout},
    {path: "/event/create", element: CreateEvent}
];
