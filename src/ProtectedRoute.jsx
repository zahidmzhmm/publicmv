import React, {useContext, useEffect, useState} from 'react';
import {Navigate} from "react-router";
import Subscription from "./components/alerts/Subscription";
import Sidebar from "./layouts/Sidebar";
import {UserContext} from "./App";
import {ReqCRUD} from "./request";
import {toast} from "react-toastify";
import {alertOptions, loader} from "./config";

const ProtectedRoute = ({children}) => {
    const {profile} = useContext(UserContext)
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            return window.location.href = '/login'
        }
    })
    const resend = (e) => {
        setUpdate(true)
        ReqCRUD('email-verification', 'post', localStorage.getItem('token')).then((data) => {
            toast.warning(data.message, alertOptions)
            setUpdate(false)
        })
    }
    return (
        <>
            {profile ?
                <>
                    <div className="mt-main"/>
                    {
                        profile.user.email_verified_at !== null
                            ?
                            <>
                                <Subscription/>
                                <div className="mt-main"/>
                                <div className="row">
                                    <div className="col-lg-2 pe-1 ps-1 ps-lg-2">
                                        <Sidebar/>
                                    </div>
                                    {profile ? children : ""}
                                </div>
                                <div className="pt-main"/>
                            </>
                            :
                            <>
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div className="col-sm-8 col-lg-5 col-xxl-4 m-auto">
                                        <div className="bg-white text-center rounded-main py-4 px-5">
                                            {
                                                update ?
                                                    loader("20rem")
                                                    : <>
                                                        <h5 className="mb-0 mt-0">Activate Account</h5>
                                                        <p className="my-3 text-muted text-sm">
                                                            We have sent the activation mail to your email
                                                            address. Please click on the activation link provided
                                                            on the mail. Check your junk or spam folder if you
                                                            cannot find our mail in your inbox.
                                                        </p>
                                                        <div className="mt-4 mb-0 text-sm text-muted">Mail not
                                                            received? <button
                                                                onClick={(e) => resend(e)} className=""><b>Resend</b>
                                                            </button></div>
                                                    </>}
                                        </div>
                                    </div>
                                </div>
                            </>
                    }
                </> : ""}
        </>
    );
};

export default ProtectedRoute;