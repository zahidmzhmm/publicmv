import React from "react";
import {Box, Modal} from '@mui/material';
import {alertOptions, loader, mainURI, rootURI} from "../config";
import {AiFillCheckCircle, AiFillWarning} from "react-icons/ai";
import {FaRegBookmark, FaShareSquare, FaTimes} from "react-icons/fa";
import {BsBookmarkFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import {MdContactPage} from "react-icons/md";
import {toast} from "react-toastify";
import Moment from "react-moment";

const ViewJob = ({id, title, profile}) => {
    const [open, setOpen] = React.useState(false);
    const [save, setSave] = React.useState(false)
    const [applicationChecker, setApplicationChecker] = React.useState(null)
    const [data, setData] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = (id) => {
        setOpen(true)
    };
    return (
        <>
            <a className="text-gray-600 font-weight-600 pointer" onClick={() => handleOpen(id)}>{title}</a>
            <Modal className="viewjobModal"
                   open={open}
                   onClose={handleClose}>
                <Box className="modal-jobView pb-3">
                    <div className="text-right p-2 closeModalViewJob">
                        <FaTimes onClick={() => handleClose()} className="w-5 cursor-pointer h-5 ml-auto"/>
                    </div>
                    {data !== false ?
                        <div className="px-lg-5 px-3">
                            <div
                                className="flex items-center justify-between flex-wrap gap-3 border-b py-4 border-gray-300">
                                <div className="flex items-center gap-2">
                                    <div>
                                        <img className="w-20 h-20" src="" alt=""/>
                                    </div>
                                    <div>
                                        <h5 style={{fontSize: '1.17rem'}}>{data.title}</h5>
                                        <div
                                            className="row customViewjobrow items-center mx-0 mt-2 text-sm text-gray-600">
                                            <div className="content px-0 mb-0">
                                                <p className="items-center d-flex my-0">
                                                    <a href={`/viewCompany/12`}
                                                       target="_blank"
                                                       className="text-muted">{data.name}</a> {parseInt(data.is_verified) === 1 &&
                                                <AiFillCheckCircle className="w-3 h-3 ml-2 ml-md-1 text-pr"/>} </p>
                                            </div>
                                            <div className="content px-0 ps-sm-2">
                                                <p className="items-center my-0 ms-1">Posted: <Moment
                                                    fromNow>{data.created_at}</Moment></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <ApplyItem data={data} applicationChecker={applicationChecker} profile={profile}
                                               save={save}
                                               setSave={setSave} jobId={id}/>
                                </div>
                            </div>
                            <div className="mt-4">
                                {parseInt(data.prevent_international_applicants) === 1 &&
                                <div className="">
                                    <AiFillWarning className="text-yellow-500 warningIcon mr-2 d-inline-block"/>
                                    <p className="d-inline-block my-2 text-sm">This job is open for Maldivians only</p>
                                </div>}
                                {parseInt(data.prevent_online_application) === 1 &&
                                <div className="">
                                    <AiFillWarning className="text-red-600 warningIcon w-90 mr-2 d-inline-block"/>
                                    <p className="d-inline-block my-2 text-sm">This employer does not accept Online
                                        Application through Jobsicle for this
                                        job. Please submit Applications in hard copy or as instructed below</p>

                                </div>}
                                {data.application_form === null || data.application_form === "" ?
                                    "" :
                                    <div className="">
                                        <MdContactPage className="text-pr warningIcon mr-2 d-inline-block"/>
                                        <p className="d-inline-block my-2 text-sm">This job requires an Applications
                                            Form to
                                            be filled and submitted. <a target="_blank" className="text-main"
                                                                        href={data.application_form}>Click here to
                                                download</a>
                                        </p>
                                    </div>
                                }
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-2 lg:gap-5 mt-3">
                                <div className="border border-gray-300 text-sm p-3 col-span-2">
                                    {<div style={{whiteSpace: 'pre-wrap'}}
                                          dangerouslySetInnerHTML={{__html: data.description}}/>}
                                    {data.req_email != null ?
                                        <div className="mailto mt-2">You can apply online or send job application by
                                            email to: {data.req_email}</div> : ""}
                                </div>
                                <div className="text-sm">
                                    <div className="border border-gray-300 p-3">
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
                                    <AttachmentViewer url={data.attachment}/> : ""
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
