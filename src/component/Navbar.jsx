import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {FaUser} from "react-icons/fa6";

function Navbar() {
    const [theme, setTheme] = useState(localStorage.getItem("theme")
        ?
        localStorage.getItem("theme") : "light");
    const handleToogle = (e)=>{
        if (e.target.checked){
            setTheme("dark")
        }else {
            setTheme("light")
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme]);
    return (
        <>
            <div className="navbar bg-primary">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost text-xl">
                       Home
                    </Link>
                </div>
                <div className="flex items-center align-middle gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto"/>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className=" rounded-full">
                                <FaUser className="w-full h-[30px]" color="white"/>
                            </div>
                        </div>
                        <ul tabIndex={0}
                            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link to="/login" className="justify-between">
                                   Login
                                </Link>
                            </li>
                            <li><Link to="/register">Register</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;