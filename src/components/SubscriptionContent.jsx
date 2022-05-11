import React from 'react';
import {HiCheckCircle} from "react-icons/hi";

const SubscriptionContent = () => {
    return (
        <>
            <div className="row pricing mt-4">
                <div className="col-lg-8 content-1">
                    <div className="row">
                        <div className="col-md-6 my-2 my-md-0">
                            <div
                                className="card card-content-1 rounded-main overflow-hidden price-content">
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
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 my-2 my-md-0">
                            <div
                                className="card card-content-1 rounded-main overflow-hidden price-content">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubscriptionContent;