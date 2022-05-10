import React from 'react';
import "../utils/home.scss";
import "../utils/auth.scss";

const Login = () => {
    return (
        <>
            <div className="mt-main"/>
            <div className="auth-page">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-sm-8 col-lg-5 col-xxl-5 m-auto">
                        <div className="bg-white rounded-main py-4 px-4">
                            <h4 className="text-center">Login</h4>
                            <div className="px-md-4 pt-4">
                                <div className="form-group my-3">
                                    <label className="mb-1" htmlFor="email">Email</label>
                                    <input type="text" className="form-control"
                                           placeholder="Enter your email address"/>
                                </div>
                                <div className="my-3">
                                    <div className="d-flex">
                                        <div className="w-50">
                                            <label htmlFor="password" className="text-sm">Password</label>
                                        </div>
                                        <div className="w-50 text-right">
                                            <a href="/forget-password"
                                               className="text-decoration-none font-opens font-color-dark text-xs">Forgot
                                                Password?</a>
                                        </div>
                                    </div>
                                    <input type="text" className="form-control mt-2"
                                           placeholder="Enter your password"/>
                                </div>
                                <div className="btns mb-3 mt-4 d-md-flex align-items-center">
                                    <button className="btn btn-main">Login</button>
                                    <div className="text mt-2 mt-md-0 ms-md-2">
                                        No account? <a href="/register">Get registered</a>
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

export default Login;