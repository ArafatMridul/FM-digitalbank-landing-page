import React from "react";

const NavbarLiItem = ({ children }) => {
    return (
        <li className="relative select-none cursor-pointer after:content-[''] after:absolute after:-bottom-7 after:left-0 after:h-[3px] after:w-0 after:bg-primary-g after:transition-all after:duration-300 hover:after:w-full">
            {children}
        </li>
    );
};

export default NavbarLiItem;
