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

const Sidebar = () => {
    const icons = [
        { icon: iconHome, label: 'Trang chủ' },
        { icon: iconLiveMusic, label: 'Nhạc sống' },
        { icon: iconCulture, label: 'Sân khấu-Nghệ thuật ' },
        { icon: iconNightLife, label: 'Night Life' },
        { icon: iconCommunity, label: 'Hội thảo-Cộng đồng' },
        { icon: iconCourse, label: 'Khóa học' },
        { icon: iconAttractions, label: 'Tham quan du lịch' },
        { icon: iconSport, label: 'Thể thao' },
        { icon: iconEventHCM, label: 'Sự kiện tại TPHCM' },
        { icon: iconEventHN, label: 'Sự kiện tại Hà Nội' },

    ];

    return (
        <div className="w-[20%] p-2 pt-5">
            <ul className="ml-2 text-sm ">
                {icons.map(({ icon, label }, index) => (
                    <li key={index} className="p-2 flex rounded-full gap-2 items-center cursor-pointer transition-transform transform-gpu hover:scale-105 hover:bg-white">
                        <img src={icon} alt={`Icon ${index}`} className="h-6 w-6  " />
                        <span>{label}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
