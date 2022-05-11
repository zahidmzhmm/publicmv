import React from 'react';
import {NavLink} from "react-router-dom";

const NavItems = ({name, path, customClass = ""}) => {
    return (
        <>
            <NavLink className={`${customClass ? customClass : "nav-link ms-md-2"}`} to={path}>
                {name}
            </NavLink>
        </>
    );
};

export default NavItems;
