import React from 'react';
import {NavLink} from "react-router-dom";

const NavItems = ({name, path, customClass = ""}) => {
    return (
        <>
            <NavLink exact className={`nav-link ms-md-2 ${customClass}`} activeClassName={"navLinkActive"} to={path}>
                {name}
            </NavLink>
        </>
    );
};

export default NavItems;
