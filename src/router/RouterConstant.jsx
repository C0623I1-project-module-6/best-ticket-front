import GuestLayout from "../layout/GuestLayout.jsx";
import UserLayout from "../layout/UserLayout.jsx";
import AdminLayout from "../layout/AdminLayout.jsx";
import UserHomePage from "../layout/pages/home/UserHomePage.jsx";
import AdminHomePage from "../layout/pages/home/AdminHomePage.jsx";
import EventHomePage from "../layout/pages/event/EventHomePage.jsx";
import Login from "../component/auth/Login.jsx";
import Register from "../component/auth/Register.jsx";
import TicketHistory from "../component/ticket/TicketHistory.jsx";
import Search from "../component/event/Search.jsx";
import AdminTable from "../component/table/AdminTable.jsx";
import TicketBooking from "../component/ticket/TicketBooking.jsx";
import ForbiddenPage from "../layout/pages/errors/ForbiddenPage.jsx";
import ErrorLayout from "../layout/ErrorLayout.jsx";
import NotFoundPage from "../layout/pages/errors/NotFoundPage.jsx";
import InternalServerErrorPage from "../layout/pages/errors/InternalServerErrorPage.jsx";
import BadGatewayPage from "../layout/pages/errors/BadGatewayPage.jsx";
import ServiceUnavailablePage from "../layout/pages/errors/ServiceUnavailablePage.jsx";
import {BookingManager} from "../component/booking/BookingManager.jsx";
import AddCustomerProfile from "../component/user/AddCustomerProfile.jsx";
import RegisterOrganizerProfile from "../component/user/RegisterOrganizerProfile.jsx";
import OrganizerLayout from "../layout/OrganizerLayout.jsx";
import CreateEventPage from "../layout/pages/event/CreateEventPage.jsx";
import CreateEventStep1 from "../component/event/createEvent/CreateEventStep1.jsx";
import CreateEventStep2 from "../component/event/createEvent/CreateEventStep2.jsx";
import CreateEventStep3 from "../component/event/createEvent/CreateEventStep3.jsx";
import EventDetail from "../component/event/EventDetail.jsx";




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
    {path: "/my-ticket/:customerId", element: TicketHistory, layout: UserLayout},
    {path: "/admin", element: AdminHomePage, layout: AdminLayout},
    {path: "/admin/user", element: AdminTable, layout: AdminLayout},
    {path: "/admin/ticket", element: AdminTable, layout: AdminLayout},
    {path: "/admin/:param", element: AdminTable, layout: AdminLayout},
    {path: "/search", element: Search, layout: UserLayout},
    {path: "/event/:id", element: EventDetail, layout: UserLayout},
    {path: "/event/:param/ticket-booking/:param", element: TicketBooking, layout: UserLayout},
    {path: "/profile/add", element: AddCustomerProfile, layout: UserLayout},
    {path: "/organizer/profile", element: RegisterOrganizerProfile, layout: OrganizerLayout},
    {path: "/event/id/ticket-booking/id", element: TicketBooking, layout: UserLayout},
    {path: "/event/create", element: CreateEventPage, children : [
            {path: "", element: CreateEventStep1 },
            {path: "step2", element: CreateEventStep2 },
            {path: "step3", element: CreateEventStep3 },
        ] },
    {path: "/customer/profile", element: AddCustomerProfile, layout: UserLayout},
    {path: "/organizer/profile", element: RegisterOrganizerProfile, layout: OrganizerLayout},
    {path: "/my-event/event/:eventId/RSVPs/bookings", element: BookingManager},
];
