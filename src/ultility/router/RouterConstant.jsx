import Home from "../../pages/home/Home.jsx";
import UserLayout from "../../layout/UserLayout.jsx";
import AdminLayout from "../../layout/AdminLayout.jsx";
import ContentSections from "../../component/ContentSections.jsx";

export const ROUT_DATA = [
    {path: "/", element: Home, layout: UserLayout},
    {path: "/admin", element: ContentSections, layout: AdminLayout},

];
export const clientId = "361050206682-7vbijdohdfieda94hioub7kplcnqnn3o.apps.googleusercontent.com";
