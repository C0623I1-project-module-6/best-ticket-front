import BookingManagerSidebar from "../component/booking/BookingManagerSidebar.jsx";

function OrganizerBookingManagerLayout({children}) {
    return (
        <div className="flex">
            <div className="w-[40%] text-white">
                <BookingManagerSidebar/>
            </div>
            <div className="w-3/4 bg-white">
                {
                    children
                }
            </div>
        </div>
    )
}

export default OrganizerBookingManagerLayout;
