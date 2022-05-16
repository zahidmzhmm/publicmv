import React, {useContext, useEffect, useState} from 'react';
import {HiCheckCircle} from "react-icons/hi";
import {UserContext} from "../App";
import {toast} from "react-toastify";
import {ReqCRUD} from "../request";
import {alertOptions, loader} from "../config";

const SubscriptionContent = () => {
    const {profile} = useContext(UserContext);
    const [option, setOption] = useState(0);
    const [jobLeft, setJobLeft] = useState(1);
    const [update, setUpdate] = useState(false);
    const confirm = () => {
        setUpdate(true);
        let formData = new FormData();
        formData.append('company_id', profile.company.id)
        if (option === 0) {
            toast.error("Please select a package");
        } else {
            if (profile.invoice_pending !== null) {
                formData.append('_method', 'put')
            }
            formData.append('package', option);
            formData.append('tin', 1);
            if (option === 2) {
                formData.append('no_of_jobs', jobLeft);
            }
            if (profile.invoice_pending === null) {
                ReqCRUD('user/invoices', 'post', localStorage.getItem('token'), formData).then((data) => {
                    reReturn(data)
                })
            } else {
                ReqCRUD('user/invoices/' + profile.invoice_pending.id, 'post', localStorage.getItem('token'), formData).then((data) => {
                    reReturn(data)
                })
            }
        }
    }
    const reReturn = (data) => {
        setUpdate(false)
        if (parseInt(data.status) === 201) {
            toast.success(data.message, alertOptions)
            setTimeout(() => {
                window.location.reload()
            }, 3000)
        } else {
            toast.error(data.message, alertOptions)
        }
    }
    useEffect(() => {
        if (profile.invoice_pending !== null) {
            let pack = parseInt(profile.invoice_pending.package);
            setOption(pack);
            if (pack === 2) {
                setJobLeft(parseInt(profile.invoice_pending.no_of_jobs))
            }
        }
    }, [])
    return (
        <>
            <div className="row pricing subscription-pricing">
                <div className="col-lg-8 content-1">
                    <div className="row">
                        <div className="col-md-6 my-2 my-md-0">
                            <div
                                className="card card-content-1 rounded-main overflow-hidden price-content">
                                {update ?
                                    loader("10rem") :
                                    <>
                                        <div className="card-body p-main pb-0 card-body-topper">
                                            <h4>Pay-per-listing</h4>
                                            <p className="color-2 mt-3 mb-0 height-p-1">
                                                Pay as you go. Valid for 1 listing
                                            </p>
                                            <h1 className="mb-0">MVR 500</h1>
                                            <p className="color-2 my-0">/ listing</p>
                                            <br/>
                                        </div>
                                        <div className="card-body p-main rounded-0 list-content">
                                            <h4 className="color-2 size-2">What’s Included</h4>
                                            <div
                                                className="checklist my-3 text-sm d-flex justify-content-start align-items-center">
                                                    <span className="icon text-pr">
                                                        <HiCheckCircle/>
                                                    </span>
                                                <p className="my-0 ms-2">Attach PDF file</p>
                                            </div>
                                            <div
                                                className="checklist my-3 text-sm d-flex justify-content-start align-items-center">
                                                    <span className="icon text-pr">
                                                        <HiCheckCircle/>
                                                    </span>
                                                <p className="my-0 ms-2">Attach supporting documents</p>
                                            </div>
                                            <div
                                                className="checklist my-3 text-sm d-flex justify-content-start align-items-center">
                                                    <span className="icon text-pr">
                                                        <HiCheckCircle/>
                                                    </span>
                                                <p className="my-0 ms-2">Add external web link</p>
                                            </div>
                                            <div
                                                className="checklist my-3 text-sm d-flex justify-content-start align-items-center">
                                                    <span className="icon text-pr">
                                                        <HiCheckCircle/>
                                                    </span>
                                                <p className="my-0 ms-2">Shared on social media</p>
                                            </div>
                                            <div className="btns">
                                                <button onClick={(e) => setOption(2)}
                                                        className="btn btn-main btn-block text-big py-4">Select this
                                                    Package
                                                </button>
                                            </div>
                                            {
                                                option === 2 &&
                                                <>
                                                    <div className="form-group mt-3 mb-2">
                                                        <label className="mb-1 text-muted text-sm" htmlFor="bname">Enter
                                                            no. of
                                                            listings
                                                            required</label>
                                                        <input type="number" min={1} className="form-control"
                                                               value={jobLeft}
                                                               onChange={(e) => setJobLeft(e.target.value)}/>
                                                    </div>
                                                    <h5 className="text-sm mb-2 mt-0"><b>TOTAL = MVR {500 * jobLeft}</b>
                                                    </h5>
                                                    <div className="btns">
                                                        <button onClick={(e) => confirm()}
                                                                className="btn btn-color1 btn-block text-big py-4">Confirm
                                                            and
                                                            Submit
                                                        </button>
                                                    </div>
                                                </>
                                            }
                                        </div>
                                    </>}
                            </div>
                        </div>
                        <div className="col-md-6 my-2 my-md-0">
                            <div
                                className="card card-content-1 rounded-main overflow-hidden price-content">
                                {update ?
                                    loader("10rem")
                                    :
                                    <>
                                        <div className="card-body p-main pb-0 card-body-topper">
                                            <h4>Annual Subscription
                                            </h4>
                                            <p className="color-2 mt-3 mb-0 height-p-1">
                                                Well suited for any regular posting business. <br/>
                                                Valid for 365 days from the date of activation
                                            </p>
                                            <h1 className="mb-0">MVR 3000</h1>
                                            <p className="color-2 my-0">/ year</p>
                                            <br/>
                                        </div>
                                        <div className="card-body p-main rounded-0 list-content">
                                            <h4 className="color-2 size-2">What’s Included</h4>
                                            <div
                                                className="checklist my-3 text-sm d-flex justify-content-start align-items-center">
                                                    <span className="icon text-pr">
                                                        <HiCheckCircle/>
                                                    </span>
                                                <p className="my-0 ms-2">Valid for 365 days</p>
                                            </div>
                                            <div
                                                className="checklist my-3 text-sm d-flex justify-content-start align-items-center">
                                                    <span className="icon text-pr">
                                                        <HiCheckCircle/>
                                                    </span>
                                                <p className="my-0 ms-2">Create unlimited listings</p>
                                            </div>
                                            <div
                                                className="checklist my-3 text-sm d-flex justify-content-start align-items-center">
                                                    <span className="icon text-pr">
                                                        <HiCheckCircle/>
                                                    </span>
                                                <p className="my-0 ms-2">Attach PDF file</p>
                                            </div>
                                            <div
                                                className="checklist my-3 text-sm d-flex justify-content-start align-items-center">
                                                    <span className="icon text-pr">
                                                        <HiCheckCircle/>
                                                    </span>
                                                <p className="my-0 ms-2">Attach supporting documents</p>
                                            </div>
                                            <div
                                                className="checklist my-3 text-sm d-flex justify-content-start align-items-center">
                                                    <span className="icon text-pr">
                                                        <HiCheckCircle/>
                                                    </span>
                                                <p className="my-0 ms-2">Add external web link</p>
                                            </div>
                                            <div
                                                className="checklist my-3 text-sm d-flex justify-content-start align-items-center">
                                                    <span className="icon text-pr">
                                                        <HiCheckCircle/>
                                                    </span>
                                                <p className="my-0 ms-2">Shared on social media</p>
                                            </div>
                                            <div className="btns">
                                                <button onClick={(e) => setOption(1)}
                                                        className="btn btn-main btn-block text-big py-4">Select this
                                                    Package
                                                </button>
                                            </div>
                                            {
                                                option === 1 &&
                                                <>
                                                    <div className="btns">
                                                        <button onClick={(e) => confirm()}
                                                                className="btn btn-color1 mt-3 btn-block text-big py-4">Confirm
                                                            and
                                                            Submit
                                                        </button>
                                                    </div>
                                                </>
                                            }
                                        </div>
                                    </>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubscriptionContent;