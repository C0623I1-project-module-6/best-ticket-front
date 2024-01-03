import React from 'react';
import iconHome from '../../assets/icon/iconHome.png';
import iconLiveMusic from '../../assets/icon/iconLiveMusic.png';
import iconCulture from '../../assets/icon/iconCulture.png';
import iconNightLife from '../../assets/icon/iconNightLife.png';
import iconCommunity from '../../assets/icon/iconCommunity.png';
import iconCourse from '../../assets/icon/iconCourse.png';
import iconAttractions from '../../assets/icon/iconAttractions.png';
import iconSport from '../../assets/icon/iconSport.png';
import iconEventHCM from '../../assets/icon/iconHCM.png';
import iconEventHN from '../../assets/icon/iconHN.png';
import {Link} from "react-router-dom";

const UserSideBar = () => {
    const pathname = window.location.pathname;
    const icons = [
        { icon: iconHome, label: 'Home' },
        { icon: iconLiveMusic, label: 'Live Music' },
        { icon: iconCulture, label: 'Theater - Art Culture ' },
        { icon: iconNightLife, label: 'Nightlife' },
        { icon: iconCommunity, label: 'Community' },
        { icon: iconCourse, label: 'Course' },
        { icon: iconAttractions, label: 'Attractions' },
        { icon: iconSport, label: 'Sport' },
        { icon: iconEventHCM, label: 'Event at Ho Chi Minh City' },
        { icon: iconEventHN, label: 'Event at Ha Noi' },

    ];

    return (
        <div className="w-[800px] p-2 pt-5">
            <ul className="ml-2 text-sm ">
                {icons.map(({ icon, label }, index) => (
                    <Link to="/">
                        <li key={index} className="p-2 flex rounded-full gap-2 items-center cursor-pointer transition-transform transform-gpu hover:scale-105 hover:bg-white">
                            <img src={icon} alt={`Icon ${index}`} className="h-6 w-6  " />
                            <span>{label}</span>
                        </li>
                    </Link>

                ))}
            </ul>
        </div>
    );
};

export default UserSideBar;
