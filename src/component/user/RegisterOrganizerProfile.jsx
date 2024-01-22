import {useState} from "react";
import UserFooter from "../footer/UserFooter";
import FormCompany from "./FormCompany";
import FormPersonal from "./FormPersonal";

export function RegisterOrganizerProfile() {
    const [activeTab, setActiveTab] = useState("company");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (<>
        <div className="w-full bg-white">
            <div className="w-full px-10 text-black">
                <div className="text-4xl py-6">Đơn đăng ký ban tổ chức</div>
                <div className="border-solid border shadow-lg rounded-md py-5 px-5 bg-white">
                    <div className="gap-4 flex">
                        <div className="flex w-1/4">
                            <label
                                htmlFor="name"
                                className="block text-1xl font-serif text-gray-700">
                                Loại hình kinh doanh
                            </label>
                            <p className="text-red-900 text-2xl">*</p>
                        </div>
                        <div className="w-full">
                            <select
                                className="w-full block rounded-md border-0 p-2 text-white shadow-md ring-1
                            ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset
                            focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:font-serif"
                                value={activeTab}
                                onChange={(e) => handleTabClick(e.target.value)}
                            >
                                <option
                                    value="company"
                                    className={`${activeTab === "company" ? "bg-black" : "bg-gray-400"} hover:bg-blue-700 text-white m-2 font-bold`}
                                >
                                    Công ty
                                </option>
                                <option
                                    value="personal"
                                    className={`${activeTab === "personal" ? "bg-black" : "bg-gray-400"} hover:bg-blue-700 text-white m-2 font-bold`}
                                >
                                    Cá nhân
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className=""></div>
                {/* Conditional rendering based on activeTab */}
                {activeTab === "company" && <FormCompany/>}
                {activeTab === "personal" && <FormPersonal/>}
            </div>
            <div>
                <UserFooter/>
            </div>
        </div>
    </>);
}
