import React from 'react';
import {NavLink} from "react-router-dom";

const NavItems = ({name, path, customClass = ""}) => {
    return (
        <>
            <NavLink className={`nav-link ms-md-2 ${customClass}`} to={path}>
                {name}
            </NavLink>
        </>
    );
};

export default NavItems;
