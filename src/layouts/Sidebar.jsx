import React from 'react';
import "../utils/dashboard.scss";
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className="content m-1 bg-white rounded-main">
                <ul className="sidebar">
                    <li><NavLink className="nav-link" to="/dashboard"><span>Business Profile</span></NavLink></li>
                    <li><NavLink className="nav-link" to="/subscription"><span>Subscriptions</span></NavLink></li>
                    <li><NavLink className="nav-link" to="/my-notices"><span>My Notices</span></NavLink></li>
                    <li><NavLink className="nav-link" to="/my-tenders"><span>My Tenders</span></NavLink></li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;