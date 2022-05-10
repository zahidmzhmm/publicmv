import React from 'react';
import jobs from "../assets/jobs-img.png";
import notices from "../assets/notice-img.png";
import tenders from "../assets/tenders-img.png";

const Topper = () => {
    return (
        <>
            <div className="top-area rounded-main mt-main">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="items d-flex pb-4 justify-content-center align-items-center font-opens">
                            <div className="item">
                                <div className="icon">
                                    <img className="img-fluid" src={jobs} alt=""/>
                                </div>
                                <div className="text-uppercase">Jobs</div>
                            </div>
                            <div className="line"/>
                            <div className="item">
                                <div className="icon">
                                    <img className="img-fluid" src={notices} alt=""/>
                                </div>
                                <div className="text-uppercase">notices</div>
                            </div>
                            <div className="line"/>
                            <div className="item">
                                <div className="icon">
                                    <img className="img-fluid" src={tenders} alt=""/>
                                </div>
                                <div className="text-uppercase">tenders</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 justify-content-center align-items-center d-flex">
                        <div
                            className="notice-tender-content d-flex m-2 py-5 px-3 py-lg-3 rounded-main justify-content-center align-items-center">
                            <div className="left">
                                <h3 className="my-0">Want to Post a Notice or Tender?</h3>
                                <p className="mt-1 mb-0 me-1">Create your account, subscribe for a package and start
                                    posting now</p>
                            </div>
                            <div className="right">
                                <div className="btn btn-outline-main">View Pricing</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Topper;