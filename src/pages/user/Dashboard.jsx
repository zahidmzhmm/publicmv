import React, {useContext, useState} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {BsCloudUpload} from "react-icons/bs";
import {UserContext} from "../../App";
import {ReqCRUD} from "../../request";
import {toast} from "react-toastify";
import {alertOptions} from "../../config";
import PhoneInput from "react-phone-number-input";

const Dashboard = () => {
    const {profile} = useContext(UserContext);
    const company = profile.company;
    const [bname, setBname] = useState(company.name);
    const [sector, setSector] = useState(company.sector);
    const [phone, setPhone] = useState(company.hr_phone);
    const [address, setAddress] = useState(company.address);
    const [about, setAbout] = useState(company.about);
    const [oldLogo, setOldLogo] = useState(company.logo);
    const formSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('name', bname)
        formData.append('sector', sector)
        formData.append('hr_phone', phone)
        if (address !== null) {
            formData.append('address', address)
        }
        if (about !== null) {
            formData.append('about', about)
        }
        formData.append('_method', 'put')
        ReqCRUD('user/companies/' + company.id, 'post', localStorage.getItem('token'), formData).then((data) => {
            toast.success(data.message, alertOptions)
        })
    }
    const onImageChange = (e) => {
        let formData = new FormData();
        formData.append('logo', e.target.files[0]);
        ReqCRUD("user/logo-upload/" + company.id, 'post', localStorage.getItem('token'), formData).then((data) => {
            toast.success(data.message, alertOptions)
            if (parseInt(data.status) === 200) {
                setOldLogo(data.data.logo)
            }
        })
    }
    return (
        <>
            <div className="col-lg-6">
                <div className="row">
                    <div className="col-lg-4 col-md-6 px-1">
                        <div className="content p-3 text-center text-lg-start m-1 bg-white rounded-main">
                            <p className="my-0 text-sm">Logo</p>
                            <label htmlFor="choose" className="logoIcon m-auto ms-lg-0 my-2 cursor-pointer">
                                {oldLogo !== null || oldLogo !== "" || oldLogo !== undefined ?
                                    <img src={oldLogo} className="w-100 h-100 rounded-main overflow-hidden"
                                         style={{objectFit: "cover"}} alt=""/> :
                                    <BsCloudUpload className="text-muted"/>
                                }
                            </label>
                            <label htmlFor="choose"
                                   className="btn d-lg-block cursor-pointer btn-main line-height">Choose</label>
                            <input type="file" className="d-none" name=""
                                   onChange={(e) => onImageChange(e)}
                                   id="choose"/>
                        </div>
                    </div>
                    <form onSubmit={(e) => formSubmit(e)} className="col-lg-8 col-md-6 px-1">
                        <div className="content px-3 py-4 m-1 bg-white rounded-main">
                            <div className="form-group mb-2 mt-0">
                                <label htmlFor="bname" className="text-small mb-1">Business Name</label>
                                <input type="text" value={bname} onChange={(e) => setBname(e.target.value)}
                                       className="form-control" placeholder="ABC Company Pvt Ltd"/>
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="bname" className="text-small mb-1">Sector</label>
                                <select name="" id="" value={sector} onChange={(e) => setSector(e.target.value)}
                                        className="form-select font-small">
                                    <option value="Private">Private</option>
                                </select>
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="bname" className="text-small mb-1">Office Phone</label><PhoneInput
                                international value={phone}
                                defaultCountry="MV" className="form-control"
                                onChange={setPhone}/>
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="bname" className="text-small mb-1">Office Address / Location</label>
                                <input type="text" className="form-control" value={address}
                                       onChange={(e) => setAddress(e.target.value)} placeholder="Enter office address"/>
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="bname" className="text-small mb-1">About (company
                                    introduction)</label>
                                <textarea name="" id="" cols="30" rows="10" className="form-control"
                                          placeholder="Write company/business introduction here"
                                          maxLength={about !== null ? 2500 - about.length : 2500}
                                          onChange={(e) => setAbout(e.target.value)} defaultValue={about}/>
                                <p className="mb-0 mt-1 text-right text-xs">{about !== null ? 2500 - about.length : 2500} characters
                                    left</p>
                            </div>
                            <div className="btns">
                                <button className="btn btn-main">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="row">
                    <div className="col-md-8 px-1">
                        <div className="content px-3 py-4 m-1 bg-white rounded-main">
                            <div
                                className="d-flex mb-2 text-white py-2 px-3 rounded-main alert-color-2 bg align-items-center justify-content-between">
                                <h4 className="my-0">{profile.notices}</h4>
                                <p className="text-xs my-0">Notices Posted</p>
                            </div>
                            <div
                                className="d-flex mb-2 text-white py-2 px-3 rounded-main alert-color-1 bg align-items-center justify-content-between">
                                <h4 className="my-0">{profile.tenders}</h4>
                                <p className="text-xs my-0">Tenders Posted</p>
                            </div>
                            <div
                                className="d-flex text-white py-2 px-3 rounded-main alert-color-3 bg align-items-center justify-content-between">
                                <h4 className="my-0">{profile.pending}</h4>
                                <p className="text-xs my-0">Pending Approval</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ps-1">
                        <Link to="/create-listing"
                              className="content d-block text-muted text-decoration-none text-center p-3 text-sm m-1 bg-white rounded-main">
                            <div className="icon text-2xl mb-2"><AiOutlinePlus className="m-auto"/></div>
                            <p className="my-0 text-xs">Create Listing</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;