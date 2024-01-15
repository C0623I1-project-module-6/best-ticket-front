import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import FormCompany from "./FormCompany.jsx";
import FormPersonal from "./FormPersonal.jsx";

function AddOrganizerProfile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [selected, setSelected] = useState("0");
    const handleSelectChange = (e) => {
        setSelected(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch()
    }
    return (
        <div className="h-screen size-full overflow-y-auto ">
            <form className="p-5 max-w-full" onSubmit={handleSubmit}>
                <h2 className="font-semibold text-4xl p-5">
                    Đơn đăng ký ban tổ chức
                </h2>
                <div className="mt-2">
                    <div className="border border-solid border-black rounded-md py-5 px-5 bg-white ">
                        <div className="border border-solid border-black rounded-md py-5 px-5 bg-white ">
                            <div className="sm:flex sm:items-center sm:gap-4 sm:justify-center">
                                <label htmlFor="organizerType"
                                       className="block text-xl font-serif leading-6 text-gray-900 m-2">
                                    Loại hình kinh doanh *</label>
                                <select
                                    id="organizerType"
                                    name="organizerType"
                                    autoComplete="organizerType-name"
                                    value={selected}
                                    onChange={handleSelectChange}
                                    className=" mt-1 bg-gray-200 block w-80 rounded-md border border-solid border-black py-3
                                    pl-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600
                                    sm:text-1xl sm:leading-6">
                                    <option value="0">Doanh nghiệp/Nhà tổ chức</option>
                                    <option value="1">Cá nhân</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                {selected === "0" && <FormCompany/>}
                {selected === "1" && <FormPersonal/>}
                <button type="subbmit"
                        className=" mt-4 block w-60 text-center text-lg font-bold ml-auto px-3 py-2
                        bg-green-500 border-0 rounded-full">
                    Lưu thông tin
                </button>
            </form>
        </div>
    );
}

export default AddOrganizerProfile;