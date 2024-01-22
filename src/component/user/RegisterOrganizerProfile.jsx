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
                <div className="border border-solid border-black rounded-md py-5 px-5 bg-white">
                    <div className="border border-solid border-black rounded-md py-5 px-5 bg-white">
                        <div className="grid gap-4">
                            <div className="flex">
                                <label
                                    htmlFor="phoneNumber"
                                    className="block text-xl font-serif text-gray-700 w-2/6"
                                >
                                    Loại hình kinh doanh *
                                </label>
                                <select
                                    className="w-[100%] bg-[#EEEEEE] border border-black rounded"
                                    value={activeTab}
                                    onChange={(e) => handleTabClick(e.target.value)}
                                >
                                    <option
                                        value="company"
                                        className={`${activeTab === "company" ? "bg-black" : "bg-gray-400"} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2`}
                                    >
                                        Công ty
                                    </option>
                                    <option
                                        value="personal"
                                        className={`${activeTab === "personal" ? "bg-black" : "bg-gray-400"} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
                                    >
                                        Cá nhân
                                    </option>
                                </select>
                            </div>
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
