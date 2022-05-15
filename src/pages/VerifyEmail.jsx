import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ReqCRUD} from "../request";

const VerifyEmail = () => {
    const params = useParams();
    const [status, setStatus] = useState(1);
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            return window.location.href = '/login'
        }
        if (params !== undefined) {
            ReqCRUD('verify-email/' + params.id + '/' + params.token, 'get', localStorage.getItem('token')).then((data) => {
                if (parseInt(data.status) === 200) {
                    setStatus(data.status)
                }
                setStatus(data.status)
                setTimeout(() => {
                    return window.location.href = '/dashboard'
                }, 3000)
            })
        }
    })
    return (
        <>
            <div className="mt-main"/>
            <div className="auth-page">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-sm-8 col-lg-5 col-xxl-5 m-auto">
                        <div className="bg-white rounded-main py-4 px-4">
                            <h4 className="text-center my-2">Success</h4>
                            <p className="my-2 text-sm text-center text-muted">You account is now activated. Redirecting
                                to Dashboard</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-main"/>
        </>
    );
};

export default VerifyEmail;