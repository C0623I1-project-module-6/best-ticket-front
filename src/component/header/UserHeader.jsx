import logo from "../../assets/img/logo/logo-auth-header-light.svg";
import {CiSearch} from "react-icons/ci";
import {FaMoon, FaSun, FaTicket} from "react-icons/fa6";
import {useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {Popover, PopoverContent, PopoverHandler,} from "@material-tailwind/react";
import {GrLanguage} from "react-icons/gr";
import logoVie from "../../assets/img/logo/Flag_of_Vietnam.svg"
import logoEng from "../../assets/img/logo/Flag_of_the_United_Kingdom_(3-5).svg"
import {useSelector} from "react-redux";
import {selectLoginSuccess} from "../../redux/features/UserSlice.js";


const UserHeader = () => {
    const inputRef = useRef();
    const navigate = useNavigate();
    const [theme, setTheme] = useState(localStorage.getItem("theme"))
    const userValue = useSelector(selectLoginSuccess)
    useEffect(() => {
        localStorage.setItem("theme", theme);
        if (
            localStorage.theme === 'dark'
            || (!('theme' in localStorage)
                && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme]);
    useEffect(() => {
        inputRef.current.checked = theme !== "dark";
    }, []);

    const changeTheme = async (e) => {
        if (e.target.checked) {
            await setTheme("light")
        } else {
            await setTheme("dark")
        }
    }
    return (
        <>
            <div className="h-[76px] w-full bg-[#10b981] text-white px-3 dark:bg-[#14b8a6]">
                <div className="px-6  flex text-center justify-center gap-20 items-center
                text-sm border-b-2 border-gray-400 ">
                    <div className="flex items-center gap-3 font-semibold dark:text-white">
                        <img src={logo} alt="" className="h-[75px] w-[100px] m-0 cursor-pointer  "
                             onClick={() => navigate("/")}/>
                    </div>
                    <div className="relative text-gray-600">
                        <input
                            type="search"
                            name="search"
                            placeholder="Bạn cần tìm gì ?"
                            className="border-green-600 border-[1px] h-11 px-5 w-[380px] pr-10 rounded-lg text-sm focus:outline-none flex"
                        />
                        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                            <CiSearch className="text-gray-600 h-5 w-5"/>
                        </button>
                    </div>
                    <div className="flex items-center gap-3 font-semibold">
                <span
                    className="cursor-pointer border-white border-[1px]
                                hover:bg-white hover:text-black
                                rounded-3xl font-bold px-6 py-2" onClick={() => navigate("/event")}>
                    Create Event
                </span>

                    </div>
                    <div className="cursor-pointer flex items-center gap-3 hover:text-amber-400" onClick={() => navigate("/my-ticket")}>
                        <FaTicket size={30}/>
                        <span>My ticket</span>
                    </div>
                    <div className="cursor-pointer flex items-center gap-4 font-bold">
                        <span onClick={() => navigate("/login")} className="hover:text-amber-400">Login | Register</span>
                        {/*<IoSettingsOutline size={30} onClick={clickOpenSlide}/>*/}
                        <Popover placement="bottom">
                            <PopoverHandler>
                               <span className="hover:text-amber-400 rounded-full">
                                    <GrLanguage size={20}/>
                               </span>
                            </PopoverHandler>
                            <PopoverContent className="w-32 p-1">
                                <div className="flex-col justify-center justify-items-center items-center w-full">
                                    <div className="flex space-x-2 justify-center  items-center w-full
                                    hover:bg-gray-500 rounded-full cursor-pointer
                                    ">
                                        <div className="w-[20px]">
                                            <img src={logoVie} alt="" className="w-[20px]"/>
                                        </div>
                                        <div>Viet Nam</div>
                                    </div>
                                    <div className="flex space-x-2 gap-2 justify-center  items-center w-full
                                    hover:bg-gray-500 rounded-full cursor-pointer
                                    ">
                                        <div className="w-fit h-fit">
                                            <img src={logoEng} alt="" className="w-[20px]"/>
                                        </div>
                                        <div>English</div>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                        <input type="checkbox" className="toggle toggle-warning" ref={inputRef} onClick={changeTheme}/>
                        <div>
                            {
                                theme === "light" ?
                                    <FaSun color={"yellow"} size={30}/> :
                                    <FaMoon color={"black"} size={30}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserHeader;
