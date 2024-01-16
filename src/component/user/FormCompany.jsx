export default function FormCompany({organizer, setOrganizer}) {
    const handleChange = (e) => {
        setOrganizer({
            ...organizer,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>

            <h4 className="font-serif text-3xl p-5">Thông tin cơ bản</h4>
            <div className="border border-solid border-black rounded-md py-5 px-5 bg-white">
                <div className="border border-solid border-black rounded-md py-5 px-5 bg-white">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-xl font-serif text-gray-700">
                                Tên Doanh Nghiệp *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                autoComplete="name"
                                value={organizer.name}
                                onChange={handleChange}
                                required
                                className=" bg-gray-200 block w-full rounded-md border border-solid border-black
                                        p-2 mt-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600
                                        sm:text-1xl sm:leading-6"/>
                        </div>
                        <div>
                            <label
                                htmlFor="businessCode"
                                className="block text-xl font-serif text-gray-700">
                                Mã số đăng ký kinh doanh *
                            </label>
                            <input
                                type="text"
                                id="businessCode"
                                name="businessCode"
                                autoComplete="businessCode"
                                value={organizer.businessCode}
                                onChange={handleChange}
                                required
                                className="bg-gray-200 block w-full rounded-md border border-solid border-black
                                        p-2 mt-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600
                                        sm:text-1xl sm:leading-6"/>
                        </div>
                        <div>
                            <label
                                htmlFor="dateRange"
                                className="block text-xl font-serif text-gray-700">
                                Ngày cấp *
                            </label>
                            <input
                                type="date"
                                id="dateRange"
                                name="dateRange"
                                autoComplete="dateRange"
                                value={organizer.dateRange}
                                onChange={handleChange}
                                required
                                className="bg-gray-200 block w-full rounded-md border border-solid border-black
                                        p-2 mt-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600
                                        sm:text-1xl sm:leading-6"/>
                        </div>
                        <div>
                            <label
                                htmlFor="issuedBy"
                                className="block text-xl font-serif text-gray-700">
                                Nơi cấp *
                            </label>
                            <input type="text"
                                   id="issuedBy"
                                   name="issuedBy"
                                   autoComplete="issuedBy"
                                   value={organizer.issuedBy}
                                   onChange={handleChange}
                                   required
                                   className="bg-gray-200 block w-full rounded-md border border-solid border-black
                                        p-2 mt-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600
                                        sm:text-1xl sm:leading-6"/>
                        </div>
                    </div>
                </div>
            </div>
            <h4 className="font-serif text-3xl p-5">Thông tin liên hệ</h4>
            <div className="border border-solid border-black rounded-md py-5 px-5 bg-white">
                <div className="border border-solid border-black rounded-md py-5 px-5 bg-white">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="phoneNumber"
                                className="block text-xl font-serif text-gray-700">
                                Số điện thoại *
                            </label>
                            <input type="number"
                                   id="phoneNumber"
                                   name="phoneNumber"
                                   autoComplete="phoneNumber"
                                   value={organizer.phoneNumber}
                                   onChange={handleChange}
                                   required
                                   className=" bg-gray-200 block w-full rounded-md border border-solid border-black
                                        p-2 mt-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600
                                        sm:text-1xl sm:leading-6"/>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-xl font-serif text-gray-700">
                                Email *
                            </label>
                            <input type="email"
                                   id="email"
                                   name="email"
                                   autoComplete="email"
                                   value={organizer.email}
                                   onChange={handleChange}
                                   required
                                   className="bg-gray-200 block w-full rounded-md border border-solid border-black
                                        p-2 mt-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600
                                        sm:text-1xl sm:leading-6"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}