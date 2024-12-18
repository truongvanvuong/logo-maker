import { PencilRuler, Image, Shield } from 'lucide-react';
import React, { useState } from 'react';

import PropTypes from 'prop-types';

const SideNav = ({ selectedIndex }) => {
    const menuList = [
        {
            name: 'Icon',
            icon: PencilRuler,
        },
        {
            name: 'Phông nền',
            icon: Image,
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="border shadow-sm h-screen">
            <ul>
                {menuList.map((menu, index) => (
                    <li
                        onClick={() => {
                            setActiveIndex(index);
                            selectedIndex(index);
                        }}
                        className={`p-4 text-sm px-5 text-gray-500 cursor-pointer flex items-center gap-2 hover:bg-primary hover:text-white ${
                            activeIndex === index && 'bg-primary text-white'
                        }`}
                        key={index}
                    >
                        <menu.icon />
                        {menu.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};
SideNav.propTypes = {
    selectedIndex: PropTypes.func,
};
export default SideNav;
