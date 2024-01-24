export default function FormEditPersonal({organizer, editOrganizer, setEditOrganizer, isEditMode}) {
    const handleChange = (e) => {
        setEditOrganizer({
            ...editOrganizer,
            [e.target.name]: e.target.value
        });
    }
    return (
        <>
            <h4 className="font-serif text-2xl p-5">Thông tin cơ bản</h4>
            <div className="border border-solid shadow-lg rounded-md py-5 px-5 bg-white">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className="sm:flex sm:gap-4">
                            <label
                                htmlFor="name"
                                className="block text-1xl font-serif text-gray-700">
                                Họ và tên *
                            </label>
                            <p className="text-red-900 text-2xl">*</p>
                        </div>
                        <input type="text"
                               id="name"
                               name="name"
                               autoComplete="name"
                               placeholder={organizer?.name || "Vui lòng nhập họ và tên"}
                               onChange={handleChange}
                               disabled={!isEditMode}
                               className="block w-full rounded-md border-0 p-2 mt-2 text-gray-900 shadow-md ring-1
                               ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-0 focus:ring-inset
                               focus:ring-indigo-600 sm:text-1xl sm:leading-6 placeholder:font-serif placeholder:text-1xl
                               font-serif"/>
                    </div>
                    <div>
                        <div className="sm:flex sm:gap-4">
                            <label
                                htmlFor="taxCode"
                                className="block text-1xl font-serif text-gray-700">
                                Mã số thuế cá nhân
                            </label>
                            <p className="text-red-900 text-2xl">*</p>
                        </div>
                        <input type="text"
                               id="taxCode"
                               name="taxCode"
                               autoComplete="taxCode"
                               placeholder={organizer?.taxCode || "Vui lòng nhập mã số thuế cá nhân"}
                               onChange={handleChange}
                               disabled={!isEditMode}
                               className="block w-full rounded-md border-0 p-2 mt-2 text-gray-900 shadow-md ring-1
                               ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-0 focus:ring-inset
                               focus:ring-indigo-600 sm:text-1xl sm:leading-6 placeholder:font-serif placeholder:text-1xl
                               font-serif"/>
                    </div>
                    <div>
                        <div className="sm:flex sm:gap-4">
                            <label
                                htmlFor="idCard"
                                className="block text-1xl font-serif text-gray-700">
                                CMND/CCCD/Hộ chiếu
                            </label>
                            <p className="text-red-900 text-2xl">*</p>
                        </div>
                        <input type="text"
                               id="idCard"
                               name="idCard"
                               autoComplete="idCard"
                               placeholder={organizer?.idCard || "Vui lòng nhập CMND/CCCD/Hộ chiếu"}
                               onChange={handleChange}
                               disabled={!isEditMode}
                               className="block w-full rounded-md border-0 p-2 mt-2 text-gray-900 shadow-md ring-1
                            ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-0 focus:ring-inset
                            focus:ring-indigo-600 sm:text-1xl sm:leading-6 placeholder:font-serif placeholder:text-1xl
                            font-serif"/>
                    </div>
                    <div>
                        <div className="sm:flex sm:gap-4">
                            <label
                                htmlFor="issuedBy"
                                className="block text-1xl font-serif text-gray-700">
                                Nơi cấp
                            </label>
                            <p className="text-red-900 text-2xl">*</p>
                        </div>
                        <input type="text"
                               id="issuedBy"
                               name="issuedBy"
                               autoComplete="issuedBy"
                               placeholder={organizer?.issuedBy || "Vui lòng nhập nơi cấp"}
                               onChange={handleChange}
                               disabled={!isEditMode}
                               className="block w-full rounded-md border-0 p-2 mt-2 text-gray-900 shadow-md ring-1
                            ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-0 focus:ring-inset
                            focus:ring-indigo-600 sm:text-1xl sm:leading-6 placeholder:font-serif placeholder:text-1xl
                            font-serif"/>
                    </div>
                    <div>
                        <div className="sm:flex sm:gap-4">
                            <label
                                htmlFor="dateRange"
                                className="block text-1xl font-serif text-gray-700">
                                Ngày cấp
                            </label>
                            <p className="text-red-900 text-2xl">*</p>
                        </div>
                        <input type="date"
                               id="dateRange"
                               name="dateRange"
                               autoComplete="dateRange"
                               placeholder={organizer?.dateRange}
                               onChange={handleChange}
                               disabled={!isEditMode}
                               className="block w-full rounded-md border-0 p-2 mt-2 text-gray-900 shadow-md ring-1
                               ring-inset ring-gray-300 focus:ring-0 focus:ring-inset
                               focus:ring-indigo-600 sm:text-1xl sm:font-serif sm:leading-6 placeholder:font-serif
                               placeholder:text-1xl"/>

                    </div>
                </div>
            </div>
            <h4 className="font-serif text-2xl p-5">Thông tin liên hệ</h4>
            <div className="border border-solid shadow-lg rounded-md py-5 px-5 bg-white">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className="sm:flex sm:gap-4">
                            <label
                                htmlFor="phoneNumber"
                                className="block text-1xl font-serif text-gray-700">
                                Số điện thoại
                            </label>
                            <p className="text-red-900 text-2xl">*</p>
                        </div>
                        <input type="number"
                               id="phoneNumber"
                               name="phoneNumber"
                               autoComplete="phoneNumber"
                               placeholder={organizer?.phoneNumber || "Vui lòng nhập số điện thoại"}
                               onChange={handleChange}
                               disabled={!isEditMode}
                               className="block w-full rounded-md border-0 p-2 mt-2 text-gray-900 shadow-md ring-1
                               ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-0 focus:ring-inset
                               ocus:ring-indigo-600 sm:text-1xl sm:leading-6 placeholder:font-serif placeholder:text-1xl
                               font-serif"/>
                    </div>
                    <div>
                        <div className="sm:flex sm:gap-4">
                            <label
                                htmlFor="email"
                                className="block text-1xl font-serif text-gray-700">
                                Email
                            </label>
                            <p className="text-red-900 text-2xl">*</p>
                        </div>
                        <input type="email"
                               id="email"
                               name="email"
                               autoComplete="email"
                               placeholder={organizer?.email || "bestticket@example.com"}
                               onChange={handleChange}
                               disabled={!isEditMode}
                               className="block w-full rounded-md border-0 p-2 mt-2 text-gray-900 shadow-md ring-1
                               ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-0 focus:ring-inset
                               focus:ring-indigo-600 sm:text-1xl sm:leading-6 placeholder:font-serif placeholder:text-1xl
                               font-serif"/>
                    </div>
                </div>
            </div>
        </>
    );
}