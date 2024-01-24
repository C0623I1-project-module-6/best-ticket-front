import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Bounce, toast} from "react-toastify";
import UserFooter from "../../footer/UserFooter.jsx";
import FormEditCompany from "./FormEditCompany.jsx";
import FormEditPersonal from "./FormEditPersonal.jsx";
import {
    editOrganizerProfile,
    selectEditOrganizerSuccess,
    selectOrganizerEdit
} from "../../../features/user/OrganizerSlice.js";

function EditOrganizerProfile({organizer}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [selected, setSelected] = useState("0");
    const [isEditMode, setIsEditMode] = useState(false)
    const organizerEdited = useSelector(selectOrganizerEdit);
    const success = useSelector(selectEditOrganizerSuccess);

    const toastOptions =
        {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        }

    const [editOrganizer, setEditOrganizer] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(editOrganizerProfile(editOrganizer));
        setIsEditMode(false);
        navigate("/my-event/legal");
    }

    const handleSelectChange = (e) => {
        setSelected(e.target.value);
    }
    const toggleEditMode = () => {
        setIsEditMode(prev => !prev);
    }
    useEffect(() => {
        if (success) {
            toast.success("🦄 Cập nhật thông tin thành công!", toastOptions);
        }
    }, [success]);
    return (
        <div className="max-h-screen overflow-y-auto">
            <form className="max-h-full p-5" method="PUT" onSubmit={handleSubmit}>
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
                                shadow-md ring-1 ring-inset ring-gray-300 focus:ring-0 font-serif
                                focus:ring-inset focus:ring-indigo-600
                                sm:text-1xl sm:leading-6">
                                <option className="font-serif" value="0">Doanh nghiệp/Nhà tổ chức</option>
                                <option className="font-serif" value="1">Cá nhân</option>
                            </select>
                        </div>
                    </div>
                </div>
                {selected === "0" && <FormEditCompany
                    editOrganizer={editOrganizer}
                    setEditOrganizer={setEditOrganizer}
                    organizer={organizer}
                    isEditMode={isEditMode}/>}
                {selected === "1" && <FormEditPersonal
                    editOrganizer={editOrganizer}
                    setEditOrganizer={setEditOrganizer}
                    organizer={organizer}
                    isEditMode={isEditMode}/>}
                <button type="submit" onClick={toggleEditMode}
                        className=" mt-4 block w-60 text-center text-white font-bold ml-auto px-3 py-2
                        bg-[#10b981] border-0 rounded-full">
                    {isEditMode ? "Hoàn thành" : "Chỉnh sửa"}
                </button>
            </form>
            <div><UserFooter/></div>
        </div>
    );
}

export default EditOrganizerProfile;