import React, {useEffect, useState} from 'react';
import "../utils/home.scss";
import "../utils/auth.scss";
import {toast} from "react-toastify";
import {ReqCRUD} from "../request";
import {alertOptions, loader} from "../config";
import {FormControl, InputGroup} from "react-bootstrap";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import {Link, Navigate} from 'react-router-dom';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';

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
    const [passType, setPassType] = useState(true);
    const [passType2, setPassType2] = useState(true);
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            return window.location.href = "/dashboard"
        }
    }, [])
    const formSubmit = (e) => {
        setUpdate(true);
        e.preventDefault();
        if (name !== "" && sector !== "" && contact !== "" && designation !== "" && mobile !== "" && office !== "" && email !== "" && password !== "" && conPassword !== "") {
            if (password != conPassword) {
                setUpdate(false)
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
                        localStorage.setItem('token', data.data)
                        return window.location.href = '/dashboard'
                    } else {
                        setUpdate(false)
                        toast.error(data.message, alertOptions);
                    }
                })
            }
        } else {
            setUpdate(false)
            toast.error("All field is required", alertOptions);
        }
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
                                            <label className="mb-1" htmlFor="mobile">Mobile Number</label>
                                            <PhoneInput
                                                international
                                                defaultCountry="MV" className="form-control"
                                                onChange={setMobile}/>
                                        </div>
                                        <div className="form-group my-3">
                                            <label className="mb-1" htmlFor="office">Office Number</label>
                                            <PhoneInput
                                                international
                                                defaultCountry="MV" className="form-control"
                                                onChange={setOffice}/>
                                        </div>
                                        <div className="form-group my-3">
                                            <label className="mb-1" htmlFor="email">Email Address</label>
                                            <input type="text" className="form-control"
                                                   onChange={(e) => setEmail(e.target.value)} value={email}
                                                   placeholder="Enter your official email address"/>
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
                                            <FormControl required htmlFor="con_password" placeholder="Repeat Password"
                                                         type={passType2 ? "password" : "text"}
                                                         onChange={(e) => setConPassword(e.target.value)}
                                            />
                                            <InputGroup.Text id="basic-addon2" className="password-eye"
                                                             onClick={() => setPassType2(!passType2)}>
                                                {passType2 ? <AiFillEye/> : <AiFillEyeInvisible/>}
                                            </InputGroup.Text>
                                        </InputGroup>
                                        <div className="btns mb-3 mt-4 d-md-flex align-items-center">
                                            <button type="submit" className="btn btn-main">Sign up</button>
                                            <div className="text mt-2 mt-md-0 ms-md-2">
                                                Have an account? <Link to="/login">Login</Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>}
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