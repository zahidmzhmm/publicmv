import React, {useEffect, useState} from 'react';
import {alertOptions, loader} from "../config";
import {Link, useParams} from "react-router-dom";
import {ReqCRUD} from "../request";
import {toast} from "react-toastify";
import {FormControl, InputGroup} from "react-bootstrap";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const {token} = useParams();
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");
    const [passType, setPassType] = useState(false);
    const [passType2, setPassType2] = useState(false);
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            return window.location.href = "/dashboard"
        }
    }, [])
    const formSubmit = (e) => {
        setUpdate(true)
        e.preventDefault();
        let formData = new FormData();
        formData.append('email', email)
        formData.append('token', token)
        formData.append('password', password)
        formData.append('password_confirmation', conPassword)
        ReqCRUD('reset-password', 'post', null, formData).then((data) => {
            setUpdate(false)
            if (parseInt(data.status) === 200) {
                return window.location.href = '/login'
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
                                            <InputGroup className="my-3 text-sm">
                                                <FormControl required placeholder="Password"
                                                             type={passType ? "password" : "text"}
                                                             onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <InputGroup.Text id="basic-addon2" className="password-eye"
                                                                 onClick={() => setPassType(!passType)}>
                                                    {passType ? <AiFillEye/> : <AiFillEyeInvisible/>}
                                                </InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup className="my-3 text-sm">
                                                <FormControl required htmlFor="con_password"
                                                             placeholder="Repeat Password"
                                                             type={passType2 ? "password" : "text"}
                                                             onChange={(e) => setConPassword(e.target.value)}
                                                />
                                                <InputGroup.Text id="basic-addon2" className="password-eye"
                                                                 onClick={() => setPassType2(!passType2)}>
                                                    {passType2 ? <AiFillEye/> : <AiFillEyeInvisible/>}
                                                </InputGroup.Text>
                                            </InputGroup>
                                            <div className="btns mb-3 mt-4 d-md-flex align-items-center">
                                                <button className="btn btn-main" type="submit">Save</button>
                                                <div className="text mt-2 mt-md-0 ms-md-2">
                                                    Back to <Link to="/login">login</Link>
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

export default ResetPassword;