import BookingManagerSidebar from "../component/booking/BookingManagerSidebar.jsx";

function OrganizerBookingManagerLayout({children}) {
    return (
        <div className="flex">
            <div className="w-2/6 text-white">
                <BookingManagerSidebar/>
            </div>
            <div className="bg-white">
                {
                    children
                }
            </div>
        </div>
    )
}

export default OrganizerBookingManagerLayout;
