const BookingManagerSidebar = () => {
    return (
        <div className="w-full h-screen border-r shadow-md">
            <div className="text-center py-6 flex bg-[#262F38]">
                <div className="w-1/2 text-left ml-6">
                    <a href="/">
                        <img src="/src/assets/img/logo/logo-auth-header-light.svg" alt=""
                             className="h-[50px] w-[50px] cursor-pointer bg-white"/>
                    </a>
                </div>
                <div className="w-1/2 text-right m-3 mr-8">User</div>
            </div>
            <nav className="">
                <ul className="space-y-4 text-center">
                    <li>
                        <a href="#" className="block py-2 px-4 rounded hover:bg-indigo-600 hover:text-white">
                            Quay lại trang sự kiện của tôi
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 rounded hover:bg-indigo-600 hover:text-white">
                            Tổng kết
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 rounded hover:bg-indigo-600 hover:text-white">
                            RSVPs
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 rounded hover:bg-indigo-600 hover:text-white">
                            Quảng bá
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 rounded hover:bg-indigo-600 hover:text-white">
                            Mã giảm giá
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 rounded hover:bg-indigo-600 hover:text-white">
                            Người quản lý
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default BookingManagerSidebar;