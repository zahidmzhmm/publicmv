import React from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {BsCloudUpload} from "react-icons/bs";

const Dashboard = () => {
    return (
        <>
            <div className="col-lg-6">
                <div className="row">
                    <div className="col-lg-4 col-md-6 px-1">
                        <div className="content p-3 text-center text-lg-start m-1 bg-white rounded-main">
                            <p className="my-0 text-sm">Logo</p>
                            <label htmlFor="logo" className="logoIcon m-auto ms-lg-0 my-2 cursor-pointer">
                                <BsCloudUpload className="text-muted"/>
                            </label>
                            <label htmlFor="choose"
                                   className="btn d-lg-block cursor-pointer btn-main line-height">Choose</label>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6 px-1">
                        <div className="content px-3 py-4 m-1 bg-white rounded-main">
                            <div className="form-group mb-2 mt-0">
                                <label htmlFor="bname" className="text-small mb-1">Business Name</label>
                                <input type="text" className="form-control" placeholder="ABC Company Pvt Ltd"/>
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="bname" className="text-small mb-1">Sector</label>
                                <select name="" id="" className="form-select font-small">
                                    <option value="private">Private</option>
                                </select>
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="bname" className="text-small mb-1">Office Phone</label>
                                <input type="text" className="form-control" placeholder="+960"/>
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="bname" className="text-small mb-1">Office Address / Location</label>
                                <input type="text" className="form-control" placeholder="Enter office address"/>
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="bname" className="text-small mb-1">About (company
                                    introduction)</label>
                                <textarea name="" id="" cols="30" rows="10" className="form-control"
                                          placeholder="Write company/business introduction here"/>
                                <p className="mb-0 mt-1 text-right text-xs">2500 characters left</p>
                            </div>
                            <div className="btns">
                                <button className="btn btn-main">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="row">
                    <div className="col-md-8 px-1">
                        <div className="content px-3 py-4 m-1 bg-white rounded-main">
                            <div
                                className="d-flex mb-2 text-white py-2 px-3 rounded-main alert-color-2 bg align-items-center justify-content-between">
                                <h4 className="my-0">58</h4>
                                <p className="text-xs my-0">Notices Posted</p>
                            </div>
                            <div
                                className="d-flex mb-2 text-white py-2 px-3 rounded-main alert-color-1 bg align-items-center justify-content-between">
                                <h4 className="my-0">145</h4>
                                <p className="text-xs my-0">Tenders Posted</p>
                            </div>
                            <div
                                className="d-flex text-white py-2 px-3 rounded-main alert-color-3 bg align-items-center justify-content-between">
                                <h4 className="my-0">4</h4>
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