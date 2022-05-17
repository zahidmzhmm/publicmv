import React, {useContext, useEffect, useState} from 'react';
import "../utils/home.scss";
import "../utils/auth.scss";
import {Link} from 'react-router-dom';
import {FormControl, InputGroup} from "react-bootstrap";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import {ReqCRUD} from "../request";
import {toast} from "react-toastify";
import {alertOptions, loader} from "../config";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passType, setPassType] = useState(false);
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            return window.location.href = "/dashboard"
        }
    }, [])
    const formSubmit = (e) => {
        setUpdate(true);
        e.preventDefault();
        let formData = new FormData();
        formData.append('email', email)
        formData.append('password', password)
        ReqCRUD('login', 'post', null, formData).then((data) => {
            setUpdate(false)
            if (parseInt(data.status) === 202) {
                localStorage.setItem('token', data.data.token)
                return window.location.href = '/dashboard'
            } else {
                toast.error(data.message, alertOptions)
            }
        })
    }
    return (
        <>
            <div className="mt-main"/>
            <div className="auth-page">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-sm-8 col-lg-5 col-xxl-5 m-auto">
                        {
                            update ?
                                loader("20rem")
                                :
                                <>
                                    <form onSubmit={(e) => formSubmit(e)} className="bg-white rounded-main py-4 px-4">
                                        <h4 className="text-center">Login</h4>
                                        <div className="px-md-4 pt-4">
                                            <div className="form-group my-3">
                                                <label className="mb-1" htmlFor="email">Email</label>
                                                <input type="email" onChange={(e) => setEmail(e.target.value)}
                                                       className="form-control"
                                                       placeholder="Enter your email address"/>
                                            </div>
                                            <div className="my-3">
                                                <div className="d-flex">
                                                    <div className="w-50">
                                                        <label htmlFor="password" className="text-sm">Password</label>
                                                    </div>
                                                    <div className="w-50 text-right">
                                                        <Link to="/forget-password"
                                                              className="text-decoration-none font-opens font-color-dark text-xs">Forgot
                                                            Password?</Link>
                                                    </div>
                                                </div>
                                                <InputGroup className="mt-1 text-sm">
                                                    <FormControl required placeholder="Password"
                                                                 type={passType ? "password" : "text"}
                                                                 onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                    <InputGroup.Text id="basic-addon2" className="password-eye"
                                                                     onClick={() => setPassType(!passType)}>
                                                        {passType ? <AiFillEye/> : <AiFillEyeInvisible/>}
                                                    </InputGroup.Text>
                                                </InputGroup>
                                            </div>
                                            <div className="btns mb-3 mt-4 d-md-flex align-items-center">
                                                <button className="btn btn-main">Login</button>
                                                <div className="text mt-2 mt-md-0 ms-md-2">
                                                    No account? <Link to="/register">Get registered</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </>
                        }
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