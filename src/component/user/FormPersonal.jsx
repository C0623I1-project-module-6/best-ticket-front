export default function FormPersonal(){
    return(
        <>
            <h4 className="font-serif text-3xl p-5">Thông tin cơ bản</h4>
            <div className="border border-solid border-black rounded-md py-5 px-5 bg-white">
                <div className="border border-solid border-black rounded-md py-5 px-5 bg-white">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xl font-serif text-gray-700">
                                Họ và tên *
                            </label>
                            <input type="text"
                                   className=" bg-gray-200 block w-full rounded-md border border-solid border-black
                                        p-2 mt-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600
                                        sm:text-1xl sm:leading-6"/>
                        </div>
                        <div>
                            <label className="block text-xl font-serif text-gray-700">
                                Mã số thuế cá nhân *
                            </label>
                            <input type="text"
                                   className="bg-gray-200 block w-full rounded-md border border-solid border-black
                                        p-2 mt-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600
                                        sm:text-1xl sm:leading-6"/>
                        </div>
                        <div>
                            <label className="block text-xl font-serif text-gray-700">
                                CMND/CCCD/Hộ chiếu *
                            </label>
                            <input type="text"
                                   className="bg-gray-200 block w-full rounded-md border border-solid border-black
                                        p-2 mt-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600
                                        sm:text-1xl sm:leading-6"/>
                        </div>
                        <div>
                            <label className="block text-xl font-serif text-gray-700">
                                Nơi cấp *
                            </label>
                            <input type="text"
                                   className="bg-gray-200 block w-full rounded-md border border-solid border-black
                                        p-2 mt-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600
                                        sm:text-1xl sm:leading-6"/>
                        </div>
                        <div>
                            <label className="block text-xl font-serif text-gray-700">
                                Số điện thoại *
                            </label>
                            <input type="text"
                                   className="bg-gray-200 block w-full rounded-md border border-solid border-black
                                        p-2 mt-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600
                                        sm:text-1xl sm:leading-6"/>
                        </div>
                        <div>
                            <label className="block text-xl font-serif text-gray-700">
                                Email *
                            </label>
                            <input type="text"
                                   className="bg-gray-200 block w-full rounded-md border border-solid border-black
                                        p-2 mt-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600
                                        sm:text-1xl sm:leading-6"/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}