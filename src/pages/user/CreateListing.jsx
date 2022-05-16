import React, {useContext, useState} from 'react';
import {UserContext} from "../../App";
import {AiFillFileText} from 'react-icons/ai';
import {LinearProgress} from '@mui/material';
import {ReqCRUD} from "../../request";
import {toast} from "react-toastify";
import {alertOptions} from "../../config";

const CreateListing = () => {
    const {profile} = useContext(UserContext);
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [closed, setClosed] = useState("");
    const [category, setCategory] = useState("");
    const [reference, setReference] = useState("");
    const [website, setWebsite] = useState("");
    const [description, setDescription] = useState("");
    const [listingPdf, setListingPdf] = useState("");
    const [document1, setDocument1] = useState("");
    const [document2, setDocument2] = useState("");
    const [document3, setDocument3] = useState("");
    const [document4, setDocument4] = useState("");
    const [document5, setDocument5] = useState("");
    const [update, setUpdate] = useState(0)
    const formSubmit = (e) => {
        e.preventDefault()
    }
    const docUploader = (doctype, setState, e) => {
        setUpdate(doctype)
        let formData = new FormData();
        formData.append('document', e.target.files[0]);
        ReqCRUD('file-uploader', 'post', null, formData).then((data) => {
            setTimeout(() => {
                if (parseInt(data.status) === 200) {
                    toast.success("Success", alertOptions)
                    setState(data.data)
                } else {
                    toast.error("File Upload Error", alertOptions)
                }
                setUpdate(0)
            }, 3000)
        })
    }
    return (
        <>
            {profile.annual !== null || profile.payper !== null ?
                <form onSubmit={(e) => formSubmit(e)} className="col-lg-10">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="bg-white px-4 pt-2 pb-4 m-1 rounded-main">
                                <div className="form-group my-3">
                                    <label className="mb-1 text-sm" htmlFor="bname">Business Name</label>
                                    <input type="text" className="form-control" disabled value={profile.company.name}
                                           placeholder="Enter your title"/>
                                </div>
                                <div className="form-group my-3">
                                    <label className="mb-1 text-sm" htmlFor="title">Title *</label>
                                    <input type="text" onChange={(e) => setTitle(e.target.value)}
                                           className="form-control"
                                           placeholder="Enter your title"/>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label className="mb-1 text-sm" htmlFor="type">Listing type *</label>
                                            <select name="" className="form-select" id=""
                                                    onChange={(e) => setType(e.target.value)}>
                                                <option value="2">Tender</option>
                                                <option value="1">Notice</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label className="mb-1 text-sm" htmlFor="title">Closing date / time
                                                *</label>
                                            <input type="datetime-local" onChange={(e) => setClosed(e.target.value)}
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label className="mb-1 text-sm" htmlFor="type">Category *</label>
                                            <select name="" id="" className="form-select"
                                                    onChange={(e) => setCategory(e.target.value)}>
                                                <option value="">Select category</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label className="mb-1 text-sm" htmlFor="title">Reference No.</label>
                                            <input type="text" onChange={(e) => setReference(e.target.value)}
                                                   className="form-control"
                                                   placeholder="Enter reference number"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <label className="mb-1 text-sm" htmlFor="type">External Web link (optional)</label>
                                    <input type="text" onChange={(e) => setWebsite(e.target.value)}
                                           className="form-control"
                                           placeholder="Paste URL here"/>
                                </div>
                                <div className="form-group mb-0">
                                    <label className="mb-1 text-sm" htmlFor="type">Description *</label>
                                    <textarea name="" id="" cols="30" rows="10" className="form-control"
                                              placeholder="Information about this notice or tender."
                                              onChange={(e) => setDescription(e.target.value)}/>
                                </div>
                                <div className="text-right text-xs mb-2">20,000 characters left</div>
                                <div className="btns">
                                    <button type="submit" className="btn btn-main">Submit</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 ps-1">
                            <div style={{marginBottom: '2px'}} className="bg-white mt-1 px-4 py-2 rounded-main rt">
                                <h6 className="mt-3 mb-4">Upload files</h6>
                                <div className="form-group my-3">
                                    <div className="d-flex mb-3">
                                        <AiFillFileText className="text-2xl"/>
                                        <div className="text-sm mt-1">Listing PDF</div>
                                    </div>
                                    {update && update === 1 ? <LinearProgress color="success" className="mb-3"/> : ""}
                                    <label
                                        className={`mb-1 btn btn-outline-main outline-text btn-block line-height ${listingPdf !== "" ? 'active' : ""}`}
                                        htmlFor="pdf">Choose
                                        file</label>
                                    <div className="text-center text-xs">Allowed 1 file maximum 5mb</div>
                                    <input type="file" className="d-none"
                                           onChange={(e) => docUploader(1, setListingPdf, e)} id="pdf"/>
                                </div>
                            </div>
                            <div className="bg-white px-4 py-2 rounded-main rb">
                                <div className="form-group my-3">
                                    <div className="d-flex mb-3">
                                        <AiFillFileText className="text-2xl"/>
                                        <div className="text-sm mt-1">Supporting Documents (PDF)</div>
                                    </div>
                                    {update && update === 2 ? <LinearProgress color="success" className="mb-3"/> : ""}
                                    <label
                                        className={`mb-1 btn btn-outline-main outline-text btn-block line-height ${document1 !== "" ? 'active' : ""}`}
                                        htmlFor="doc1">Choose
                                        file</label>
                                    <div className="text-center text-xs">Allowed 1 file maximum 5mb</div>
                                    <input type="file" onChange={(e) => docUploader(2, setDocument1, e)}
                                           className="d-none" id="doc1"/>
                                </div>
                                {update && update === 3 ? <LinearProgress color="success"/> : ""}
                                <div className="form-group my-3">
                                    <label
                                        className={`mb-1 btn btn-outline-main outline-text btn-block line-height ${document2 !== "" ? 'active' : ""}`}
                                        htmlFor="doc2">Choose
                                        file</label>
                                    <div className="text-center text-xs">Allowed 1 file maximum 5mb</div>
                                    <input type="file" onChange={(e) => docUploader(3, setDocument2, e)}
                                           className="d-none" id="doc2"/>
                                </div>
                                {update && update === 4 ? <LinearProgress color="success"/> : ""}
                                <div className="form-group my-3">
                                    <label
                                        className={`mb-1 btn btn-outline-main outline-text btn-block line-height ${document3 !== "" ? 'active' : ""}`}
                                        htmlFor="doc3">Choose
                                        file</label>
                                    <div className="text-center text-xs">Allowed 1 file maximum 5mb</div>
                                    <input type="file" onChange={(e) => docUploader(4, setDocument3, e)}
                                           className="d-none" id="doc3"/>
                                </div>
                                {update && update === 5 ? <LinearProgress color="success"/> : ""}
                                <div className="form-group my-3">
                                    <label
                                        className={`mb-1 btn btn-outline-main outline-text btn-block line-height ${document4 !== "" ? 'active' : ""}`}
                                        htmlFor="doc4">Choose
                                        file</label>
                                    <div className="text-center text-xs">Allowed 1 file maximum 5mb</div>
                                    <input type="file" onChange={(e) => docUploader(5, setDocument4, e)}
                                           className="d-none" id="doc4"/>
                                </div>
                                {update && update === 6 ? <LinearProgress color="success"/> : ""}
                                <div className="form-group my-3">
                                    <label
                                        className={`mb-1 btn btn-outline-main outline-text btn-block line-height ${document5 !== "" ? 'active' : ""}`}
                                        htmlFor="doc5">Choose
                                        file</label>
                                    <div className="text-center text-xs">Allowed 1 file maximum 5mb</div>
                                    <input type="file" onChange={(e) => docUploader(6, setDocument5, e)}
                                           className="d-none" id="doc5"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </form> : ""}
        </>
    );
};

export default CreateListing;