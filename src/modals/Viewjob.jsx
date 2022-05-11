import React from "react";
import {Box, Modal} from '@mui/material';
import {alertOptions, loader, mainURI, rootURI} from "../config";
import {AiFillCheckCircle, AiFillWarning} from "react-icons/ai";
import {FaRegBookmark, FaShareSquare, FaTimes} from "react-icons/fa";
import {BsBookmarkFill} from "react-icons/bs";
import {FiAlertTriangle} from "react-icons/fi";
import {TiWarning} from 'react-icons/ti';
import {GoAlert} from "react-icons/go";
import {Link} from "react-router-dom";
import {MdContactPage} from "react-icons/md";
import {toast} from "react-toastify";
import Moment from "react-moment";
import "../utils/jobs.scss";
import {ReqCRUD} from "../request";

const ViewJob = ({id, title, profile}) => {
    const [open, setOpen] = React.useState(false);
    const [save, setSave] = React.useState(false)
    const [applicationChecker, setApplicationChecker] = React.useState(null)
    const [data, setData] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = (id) => {
        if (data === false) {
            if (localStorage.getItem('token')) {
                ReqCRUD('user/applicationChecker/' + id).then((response) => {
                    setApplicationChecker(response)
                })
            }
            if (localStorage.getItem('token')) {
                ReqCRUD('job/save/' + id).then((response) => {
                    if (response !== undefined) {
                        if (parseInt(response.status) === 200) {
                            setSave(true)
                        } else {
                            setSave(false)
                        }
                    } else {
                        setSave(false)
                    }
                })
            }
            ReqCRUD('jobView/' + id).then((response) => {
                if (response.status === 200) {
                    setData(response.data)
                }
            })
        }
        setOpen(true)
    };
    const copyText = () => {
        navigator.clipboard.writeText(rootURI + "/job/" + id);
        toast.success("Link copied", alertOptions)
    }
    return (
        <>
            <h6 className="my-0 cursor-pointer text-ellipse" onClick={() => handleOpen(id)}>Purchase of computer
                systems</h6>
            <Modal className="viewjobModal"
                   open={open}
                   onClose={handleClose}>
                <Box className="modal-jobView pb-3">
                    <div className="text-right py-2 px-2 closeModalViewJob">
                        <div className="d-flex ps-5 ms-5">
                            <h5 className="w-50 text-end">Job Details</h5>
                            <div className="w-50 text-end"><FaTimes onClick={() => handleClose()}
                                                                    className="w-5 cursor-pointer h-5 ml-auto"/></div>
                        </div>
                    </div>
                    {data !== false ?
                        <div className="px-lg-5 px-3 content">
                            <div
                                className="flex justify-content-between align-items-center flex-wrap border-b py-4 border-gray-300">
                                <div className="d-lg-flex items-center align-items-start gap-2">
                                    <div>
                                        <img className="logo"
                                             src={`${data.logo !== undefined ? data.logo !== null ? data.logo : mainURI + "/uploads/no-img.jpg" : mainURI + "/uploads/no-img.jpg"}`}
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
                                        Posted 10 hours ago
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
                                {data.application_form === null || data.application_form === "" ?
                                    "" :
                                    <div className="d-flex justify-content-start align-items-start">
                                        <GoAlert className="warningIcon alert-color-1 w-90 mr-2 d-inline-block"/>
                                        <p className="d-inline-block text-sm">This job requires an application form to
                                            be filled and submitted. <a href={data.application_form}
                                                                        className="color-1-link">Click here to
                                                Download</a></p>
                                    </div>}
                                {parseInt(data.prevent_online_application) === 1 &&
                                <div className="d-flex justify-content-start align-items-start">
                                    <GoAlert className="warningIcon alert-color-1 w-90 mr-2 d-inline-block"/>
                                    <p className="d-inline-block text-sm">
                                        This employer does not accept Online
                                        Application through Jobsicle for this
                                        job. Please submit Applications in hard copy or as instructed below
                                    </p>
                                </div>}
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-2 lg:gap-5 mt-2">
                                <div
                                    className="border rounded-main bg-white  border-gray-300 text-sm p-3 p-md-4 col-span-2">
                                    {<div style={{whiteSpace: 'pre-wrap'}}
                                          dangerouslySetInnerHTML={{__html: data.description}}/>}
                                    {data.req_email != null ?
                                        <div className="mailto mt-2">You can apply online or send job application by
                                            email to: {data.req_email}</div> : ""}
                                </div>
                                <div className="text-sm">
                                    <div className="border rounded-main bg-white border-gray-300 p-3 p-md-4">
                                        <div className="flex items-center gap-1">
                                            <p className="mb-2 font-bold">Salary Range:</p>
                                            <p className="mb-2 ">{data.salary_range}</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <p className="mb-2 font-bold">Job Type:</p>
                                            <p className="mb-2 ">{data.type}</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <p className="mb-2 font-bold">Qualification: </p>
                                            <p className="mb-2 ">{data.qualification}</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <p className="mb-2 font-bold">Location: </p>
                                            <p className="mb-2 ">{data.location}</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <p className="mb-2 font-bold">Experience: </p>
                                            <p className="mb-2 ">{data.experience}</p>
                                        </div>
                                        <div className="flex gap-1 flex-col">
                                            <p className="font-bold mb-2">Required: </p>
                                            <ul className="list-disc mb-2" style={{marginLeft: "1rem"}}>
                                                {data.required_items !== undefined && data.required_items !== null ?
                                                    JSON.parse(data.required_items).map((item, index) =>
                                                        item !== null &&
                                                        <li key={index}>{item}</li>
                                                    ) : ""
                                                }
                                            </ul>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <p className="font-medium mb-2"><b>Ref No:</b> {data.ref_no}</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <p className="font-medium mb-2"><b>Sector: </b> {data.sector}</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <p className="font-medium mb-2"><b>Closing on: </b> <Moment
                                                format="DD MMM YYYY">{data.expired_at}</Moment></p>
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
                </Box>
            </Modal>
        </>
    );
}
export default ViewJob;
