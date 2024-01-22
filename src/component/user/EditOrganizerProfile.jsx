import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import FormCompany from "./FormCompany.jsx";
import FormPersonal from "./FormPersonal.jsx";
import {registerProfile, selectError, selectOrganizerRegister, selectSuccess} from "../../features/OrganizerSlice.js";
import {Bounce, toast} from "react-toastify";
import UserFooter from "../footer/UserFooter.jsx";

function EditOrganizerProfile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [selected, setSelected] = useState("0");
    const organizerAdded = useSelector(selectOrganizerRegister);
    const editSuccess = useSelector(selectSuccess);
    const editError = useSelector(selectError);
    const showToastMessage = (content) => {
        toast("🦄", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        })
    }
    const [organizer, setOrganizer] = useState({
        name: "",
        businessCode: "",
        dateRange: "",
        issuedBy: "",
        phoneNumber: "",
        email: "",
        idCard: "",
        taxCode: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(registerProfile(organizer));
        setOrganizer(organizerAdded);
        showToastMessage("Register successfully!")
        navigate("/")
    }

    const handleSelectChange = (e) => {
        setSelected(e.target.value);
    }


    return (
        <div className="max-h-screen overflow-y-auto">
            <form className="max-h-full p-5" method="POST" onSubmit={handleSubmit}>
                <h2 className="font-serif text-3xl p-5">
                    Đơn đăng ký ban tổ chức
                </h2>
                <div className="mt-2">
                    <div className="border border-solid shadow-lg rounded-md py-5 px-5 bg-white ">
                        <div className="sm:flex sm:items-center sm:gap-4 sm:justify-center">
                            <label htmlFor="organizerTypeName"
                                   className="block text-1xl font-serif leading-6 text-gray-900 m-2">
                                Loại hình kinh doanh</label>
                            <p className="text-red-900 text-2xl">*</p>
                            <select
                                id="organizerTypeName"
                                name="organizerTypeName"
                                autoComplete="organizerTypeName"
                                value={selected}
                                onChange={handleSelectChange}
                                className=" mt-1 block w-72 rounded-md border-0 py-2 pl-3 text-gray-900
                                shadow-md ring-1 ring-inset ring-gray-300 focus:ring-0
                                focus:ring-inset focus:ring-indigo-600
                                sm:text-1xl sm:leading-6">
                                <option className="font-serif" value="0">Doanh nghiệp/Nhà tổ chức</option>
                                <option className="font-serif" value="1">Cá nhân</option>
                            </select>
                        </div>
                    </div>
                </div>
                {selected === "0" && <FormCompany organizer={organizer} setOrganizer={setOrganizer}/>}
                {selected === "1" && <FormPersonal organizer={organizer} setOrganizer={setOrganizer}/>}
                <button type="subbmit"
                        className=" mt-4 block w-60 text-center text-lg font-bold ml-auto px-3 py-2
                        bg-green-500 border-0 rounded-full">
                    Lưu thông tin
                </button>
            </form>
            <div><UserFooter/></div>
        </div>
    );
}

export default EditOrganizerProfile;