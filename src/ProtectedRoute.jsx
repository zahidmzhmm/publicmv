import React, {useContext, useEffect} from 'react';
import {Navigate} from "react-router";
import Subscription from "./components/alerts/Subscription";
import Sidebar from "./layouts/Sidebar";
import {UserContext} from "./App";

const ProtectedRoute = ({children}) => {
    const {profile} = useContext(UserContext)
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            return window.location.href = '/login'
        }
    })
    return (
        <>
            <div className="mt-main"/>
            <Subscription/>
            <div className="mt-main"/>
            <div className="row">
                <div className="col-lg-2 pe-1 ps-1 ps-lg-2">
                    <Sidebar/>
                </div>
                {children}
            </div>
            <div className="pt-main"/>
        </>
    );
};

export default ProtectedRoute;