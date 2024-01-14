import {useEffect, useState} from "react";
import {getDistrict, getProvince, getWard} from "../../api/ProvincesApi.js";

export default function FormCompany() {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const fetchProvinceData = async () => {
        const data =
            await getProvince();
        setProvinces(data);
    }
    const fetchDistrictData = async (province_id) => {
        const data =
            await getDistrict(province_id);
        console.log(data)
        setDistricts(data);
    }
    const fetchWardData = async (district_id) => {
        const data =
            await getWard(district_id)
        console.log(data)
        setWards(data);
    }
    const handleProvinceChange = (e) => {
        const selectedProvinceId = e.target.value;
        fetchDistrictData(selectedProvinceId);
    }
    const handleDistrictChange = (e) => {
        const selectedDistrictId = e.target.value;
        fetchWardData(selectedDistrictId);
    }
    useEffect(() => {
        fetchProvinceData();
    }, [])

    return (
        <>

            <h4 className="font-serif text-3xl p-5">Thông tin cơ bản</h4>
            <div className="border border-solid border-black rounded-md py-5 px-5 bg-white">
                <div className="border border-solid border-black rounded-md py-5 px-5 bg-white">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xl font-serif text-gray-700">
                                Tên Doanh Nghiệp *
                            </label>
                            <input type="text"
                                   className=" bg-gray-200 block w-full rounded-md border border-solid border-black
                                        p-2 mt-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600
                                        sm:text-1xl sm:leading-6"/>
                        </div>
                        <div>
                            <label className="block text-xl font-serif text-gray-700">
                                Mã số đăng ký kinh doanh *
                            </label>
                            <input type="text"
                                   className="bg-gray-200 block w-full rounded-md border border-solid border-black
                                        p-2 mt-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600
                                        sm:text-1xl sm:leading-6"/>
                        </div>
                        <div>
                            <label className="block text-xl font-serif text-gray-700">
                                Ngày cấp *
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
                    </div>
                </div>
            </div>
            <h4 className="font-serif text-3xl p-5">Thông tin liên hệ</h4>
            <div className="border border-solid border-black rounded-md py-5 px-5 bg-white">
                <div className="border border-solid border-black rounded-md py-5 px-5 bg-white">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xl font-serif text-gray-700">
                                Số điện thoại *
                            </label>
                            <input type="text"
                                   className=" bg-gray-200 block w-full rounded-md border border-solid border-black
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
            <h4 className="font-serif text-3xl p-5">Địa chỉ trụ sở</h4>
            <div className="border border-solid border-black rounded-md py-5 px-5 bg-white">
                <div className="border border-solid border-black rounded-md py-5 px-5 bg-white">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xl font-serif text-gray-700">
                                Tỉnh/Thành phố *
                            </label>
                            <select
                                onChange={handleProvinceChange}
                                className=" bg-gray-200 block w-full rounded-md border border-solid border-black
                                        p-2 mt-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600
                                       sm:text-1xl sm:leading-6">
                                <option>Chọn Tỉnh/Thành phố</option>
                                {provinces.length > 0 &&
                                        provinces.map((province) => (
                                    <option key={province.province_id} value={province.province_id}>
                                        {province.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-xl font-serif text-gray-700">
                                Quận/Huyện *
                            </label>
                            <select
                                onChange={handleDistrictChange}
                                className="bg-gray-200 block w-full rounded-md border border-solid border-black
                                        p-2 mt-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600
                                        sm:text-1xl sm:leading-6">
                                <option>Chọn Quận/Huyện</option>
                                {districts.map((district) => (
                                    <option key={district.district_id} value={district.district_id}>
                                        {district.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-xl font-serif text-gray-700">
                                Phường/Xã *
                            </label>
                            <select
                                className=" bg-gray-200 block w-full rounded-md border border-solid border-black
                                        p-2 mt-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600
                                       sm:text-1xl sm:leading-6">
                                <option>Chọn Phường/Xã</option>
                                {wards.map((ward) => (
                                    <option key={ward.ward_id} value={ward.ward_id}>
                                        {ward.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-xl font-serif text-gray-700">
                                Địa chỉ *
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
    );
}