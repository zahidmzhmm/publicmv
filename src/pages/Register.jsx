import React from 'react';
import "../utils/home.scss";
import "../utils/auth.scss";
import {Navigate} from "react-router";

const Register = ({user}) => {
    if (user) {
        return <Navigate to="/dashboard" replace/>;
    }
    return (
        <>
            <div className="mt-main"/>
            <div className="auth-page">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-sm-8 col-lg-5 col-xxl-5 m-auto">
                        <div className="bg-white rounded-main py-4 px-4">
                            <h4 className="text-center">Create Account</h4>
                            <div className="px-md-4 pt-4">
                                <div className="form-group my-3">
                                    <label className="mb-1" htmlFor="bname">Business Name</label>
                                    <input type="text" className="form-control"
                                           placeholder="Enter your company or business name"/>
                                </div>
                                <div className="form-group my-3">
                                    <label className="mb-1" htmlFor="sector">Sector</label>
                                    <input type="text" className="form-control"
                                           placeholder="Choose your business sector"/>
                                </div>
                                <div className="form-group my-3">
                                    <label className="mb-1" htmlFor="contact">Contact Person</label>
                                    <input type="text" className="form-control"
                                           placeholder="Enter the name of your contact person"/>
                                </div>
                                <div className="form-group my-3">
                                    <label className="mb-1" htmlFor="designation">Designation</label>
                                    <input type="text" className="form-control"
                                           placeholder="Enter the designation of contact person"/>
                                </div>
                                <div className="form-group my-3">
                                    <label className="mb-1" htmlFor="mobile">Mobile Numer</label>
                                    <input type="text" className="form-control" placeholder="960"/>
                                </div>
                                <div className="form-group my-3">
                                    <label className="mb-1" htmlFor="office">Office Number</label>
                                    <input type="text" className="form-control" placeholder="960"/>
                                </div>
                                <div className="form-group my-3">
                                    <label className="mb-1" htmlFor="email">Email Address</label>
                                    <input type="text" className="form-control"
                                           placeholder="Enter your official email address"/>
                                </div>
                                <div className="form-group my-3">
                                    <label className="mb-1" htmlFor="password">Password</label>
                                    <input type="text" className="form-control" placeholder="Enter a password"/>
                                </div>
                                <div className="form-group my-3">
                                    <label className="mb-1" htmlFor="con_password">Repeat Password</label>
                                    <input type="text" className="form-control" placeholder="Enter the same password"/>
                                </div>
                                <div className="btns mb-3 mt-4 d-md-flex align-items-center">
                                    <button className="btn btn-main">Sign up</button>
                                    <div className="text mt-2 mt-md-0 ms-md-2">
                                        Have an account? <a href="">Login</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-main"/>
                        <div className="postjob-alert p-4 rounded-main">
                            <h4 className="text-center heading mb-0 mt-1">Want to post a Job
                                listing?</h4>
                            <p className="text-center mt-3">
                                Get registered on <b><a href="https://jobsicle.mv"
                                                        className="link font-color-white">www.jobsicle.mv</a></b> and
                                post your jobs there. <br/>
                                It will instantly get published in our
                                job section
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-main"/>
        </>
    );
};

export default Register;