import React, {useEffect} from 'react';
import {alertOptions, jobsicleUri, loader, rootURI} from "../config";
import {toast} from "react-toastify";
import Moment from "react-moment";
import {GoAlert} from "react-icons/go";
import {MdWatchLater} from 'react-icons/md';
import {AiFillFileText} from 'react-icons/ai'
import DocumentItem from "./DocumentItem";

const ListingsView = ({data}) => {
    const copyText = () => {
        navigator.clipboard.writeText(rootURI + "/listing/" + data.id);
        toast.success("Link copied", alertOptions)
    }
    useEffect(() => {
    })
    return (
        <>
            {data !== false ?
                <div className="px-lg-5 px-3 content">
                    <div
                        className="flex justify-content-between align-items-center flex-wrap border-b py-4 border-gray-300">
                        <div className="d-lg-flex items-center align-items-start gap-2">
                            <div>
                                <img className="logo"
                                     src={`${data.logo !== undefined ? data.logo !== null ? data.logo : jobsicleUri + "/uploads/no-img.jpg" : jobsicleUri + "/uploads/no-img.jpg"}`}
                                     alt=""/>
                            </div>
                            <div>
                                <h5 className="mb-0 mt-2 mt-lg-0 title text-ellipse">{data.title}</h5>
                                <p className="d-flex text-start text-ellipse justify-content-start text-sm align-items-center">
                                    <span>{data.name}</span></p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <p className="my-0 text-xs">
                                <Moment fromNow>{data.created_at}</Moment>
                            </p>
                            <button onClick={() => copyText()} className="btn btn-small btn-outline-main">Share
                                Link
                            </button>
                        </div>
                    </div>
                    <div className="mt-4">
                        {parseInt(data.prevent_international_applicants) === 1 &&
                        <div className="d-flex justify-content-start align-items-start">
                            <GoAlert className="warningIcon alert-color-2 w-90 mr-2 d-inline-block"/>
                            <p className="d-inline-block text-sm">This job is open for Maldivians only</p>
                        </div>}
                        {data.attachment === null || data.attachment === "" ?
                            "" :
                            <>
                                <div className="d-flex justify-content-start align-items-start">
                                    <GoAlert className="warningIcon alert-color-4 w-90 mr-2 d-inline-block"/>
                                    <p className="d-inline-block text-sm">
                                        This listing has a PDF attachment. Please see below
                                    </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-start">
                                    <GoAlert className="warningIcon alert-color-5 w-90 mr-2 d-inline-block"/>
                                    <p className="d-inline-block text-sm">
                                        This listing contains attached supporting documents. See details below to
                                        download them
                                    </p>
                                </div>
                            </>
                        }
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-2 lg:gap-5 mt-2">
                        <div
                            className="border rounded-main bg-white  border-gray-300 text-sm p-3 p-md-4 col-span-2">
                            {<div style={{whiteSpace: 'pre-wrap'}}
                                  dangerouslySetInnerHTML={{__html: data.description}}/>}
                            {data.closed != null ?
                                <div className="closed mt-2 d-flex align-items-center">
                                    <div className="icon"><MdWatchLater className="w-5 h-5 me-2"/></div>
                                    <div className="text">Closing on <Moment
                                        format="DD MMM YYYY LT">{data.closed}</Moment></div>
                                </div> : ""}
                            {data.website != null ?
                                <div className="websitelink mt-2">
                                    <b>Web link:</b> <a className="link font-weight-600 font-color-primary"
                                                        href="https://sample.com/egor/purchase.html">https://sample.com/egor/purchase.html</a>
                                </div> : ""}
                        </div>
                        <div className="text-sm">
                            <div className="border rounded-main bg-white border-gray-300 p-3 p-md-4">
                                <div className="flex items-center gap-1">
                                    <p className="mb-2 font-bold">Sector:</p>
                                    <p className="mb-2 ">{data.sector}</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <p className="mb-2 font-bold">Ref:</p>
                                    <p className="mb-2 ">{data.ref_no}</p>
                                </div>
                            </div>
                            <div className="border rounded-main bg-white border-gray-300">
                                <div className="p-3 p-md-4">
                                    <h6 className="mb-0 mt-0">Supporting Documents</h6>
                                </div>
                                <hr className="my-0"/>
                                <div className="p-3 p-md-4">
                                    <DocumentItem document={data.document1}/>
                                    <DocumentItem document={data.document2}/>
                                    <DocumentItem document={data.document3}/>
                                    <DocumentItem document={data.document4}/>
                                    <DocumentItem document={data.document5}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-3">
                        {data.attachment !== null && data.attachment !== "" ?
                            <div className="jobPdfViewer">
                                <iframe
                                    src={"https://viewer-js.jobsicle.org/index.html#viewer.php?url=" + data.attachment}
                                    frameBorder="0" height="100%" width="100%"/>
                            </div> : ""
                        }
                    </div>
                </div>
                : <div className="container pt-loader">{loader("20rem")}</div>}
        </>
    );
};

export default ListingsView;