import React, {useEffect, useState} from 'react';
import "../utils/home.scss";
import "../utils/auth.scss";
import {toast} from "react-toastify";
import {ReqCRUD} from "../request";
import {alertOptions} from "../config";

const Register = () => {
    const [name, setName] = useState("");
    const [sector, setSector] = useState("Private (Others)");
    const [contact, setContact] = useState("");
    const [designation, setDesignation] = useState("");
    const [mobile, setMobile] = useState("");
    const [office, setOffice] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");
    useEffect(() => {
        if (localStorage.getItem('token')) {
            return window.location.href = "/dashboard"
        }
    }, [])
    const formSubmit = (e) => {
        e.preventDefault();
        if (name !== "" && sector !== "" && contact !== "" && designation !== "" && mobile !== "" && office !== "" && email !== "" && password !== "" && conPassword !== "") {
            if (password != conPassword) {
                toast.error("Password doesn't match")
            } else {
                let formData = new FormData();
                formData.append('role', 1)
                formData.append('name', name)
                formData.append('email', email)
                formData.append('password', conPassword)
                formData.append('sector', sector)
                formData.append('contact', contact)
                formData.append('designation', designation)
                formData.append('phone', mobile)
                formData.append('hr_phone', office)
                ReqCRUD('register', 'post', null, formData).then((data) => {
                    if (parseInt(data.status) === 202) {
                        toast.success(data.message, alertOptions)
                    } else {
                        toast.error(data.message, alertOptions);
                    }
                })
            }
        } else {
            toast.error("All field is required", alertOptions);
        }
    }
    return (
        <>
            <div className="mt-main"/>
            <div className="auth-page">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-sm-8 col-lg-5 col-xxl-5 m-auto">
                        <form onSubmit={(e) => formSubmit(e)} className="bg-white rounded-main py-4 px-4">
                            <h4 className="text-center">Create Account</h4>
                            <div className="px-md-4 pt-4">
                                <div className="form-group my-3">
                                    <label className="mb-1" htmlFor="bname">Business Name</label>
                                    <input type="text" className="form-control" value={name}
                                           onChange={(e) => setName(e.target.value)}
                                           placeholder="Enter your company or business name"/>
                                </div>
                                <div className="form-group my-3">
                                    <label className="mb-1" htmlFor="sector">Sector</label>
                                    <select name="" id="" className="form-select" value={sector}
                                            onChange={(e) => setSector(e.target.value)}>
                                        <option value="Private (Others)">Private (Others)</option>
                                    </select>
                                </div>
                                <div className="form-group my-3">
                                    <label className="mb-1" htmlFor="contact">Contact Person</label>
                                    <input type="text" className="form-control" value={contact}
                                           onChange={(e) => setContact(e.target.value)}
                                           placeholder="Enter the name of your contact person"/>
                                </div>
                                <div className="form-group my-3">
                                    <label className="mb-1" htmlFor="designation">Designation</label>
                                    <input type="text" className="form-control" value={designation}
                                           onChange={(e) => setDesignation(e.target.value)}
                                           placeholder="Enter the designation of contact person"/>
                                </div>
                                <div className="form-group my-3">
                                    <label className="mb-1" htmlFor="mobile">Mobile Numer</label>
                                    <input type="text" className="form-control" value={mobile}
                                           onChange={(e) => setMobile(e.target.value)} placeholder="960"/>
                                </div>
                                <div className="form-group my-3">
                                    <label className="mb-1" htmlFor="office">Office Number</label>
                                    <input type="text" className="form-control" value={office}
                                           onChange={(e) => setOffice(e.target.value)} placeholder="960"/>
                                </div>
                                <div className="form-group my-3">
                                    <label className="mb-1" htmlFor="email">Email Address</label>
                                    <input type="text" className="form-control"
                                           onChange={(e) => setEmail(e.target.value)} value={email}
                                           placeholder="Enter your official email address"/>
                                </div>
                                <div className="form-group my-3">
                                    <label className="mb-1" htmlFor="password">Password</label>
                                    <input type="text" className="form-control" value={password}
                                           onChange={(e) => setPassword(e.target.value)}
                                           placeholder="Enter a password"/>
                                </div>
                                <div className="form-group my-3">
                                    <label className="mb-1" htmlFor="con_password">Repeat Password</label>
                                    <input type="text" className="form-control" value={conPassword}
                                           onChange={(e) => setConPassword(e.target.value)}
                                           placeholder="Enter the same password"/>
                                </div>
                                <div className="btns mb-3 mt-4 d-md-flex align-items-center">
                                    <button type="submit" className="btn btn-main">Sign up</button>
                                    <div className="text mt-2 mt-md-0 ms-md-2">
                                        Have an account? <a href="">Login</a>
                                    </div>
                                </div>
                            </div>
                        </form>
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