import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "../App";
import {useNavigate} from "react-router";
import {toast} from "react-toastify";
import {ReqCRUD} from "../request";
import {alertOptions} from "../config";
import {LinearProgress} from "@mui/material";
import {AiFillFileText} from "react-icons/ai";

const CreateListItem = ({data, listType}) => {
    const {profile} = useContext(UserContext);
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [type, setType] = useState(2);
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
    const [update, setUpdate] = useState(0);
    const [categories, setCategories] = useState(false);
    const [update2, setUpdate2] = useState(false);
    const formSubmit = (e) => {
        setUpdate2(true)
        e.preventDefault()
        if (title === "" || type === "" || closed === "" || category === "" || description === "") {
            toast.error("* Field is required")
        } else {
            let formData = new FormData();
            formData.append("company_id", profile.company.id)
            formData.append("title", title)
            formData.append("type", type)
            formData.append("category", category)
            formData.append("ref_no", reference)
            formData.append("website", website)
            formData.append("description", description)
            formData.append("attachment", listingPdf)
            formData.append("document1", document1)
            formData.append("document2", document2)
            formData.append("document3", document3)
            formData.append("document4", document4)
            formData.append("document5", document5)
            formData.append("closed", closed)
            if (listType !== false && listType === 2 && data !== false) {
                formData.append("_method", "put")
                ReqCRUD('user/listings/' + data, 'post', localStorage.getItem('token'), formData).then((data) => {
                    errorHandle(data)
                })
            } else {
                if (profile.annual !== null) {
                    formData.append("subscription_id", profile.annual.id)
                }
                if (profile.payper !== null) {
                    formData.append("subscription_id", profile.payper.id)
                }
                ReqCRUD('user/listings', 'post', localStorage.getItem('token'), formData).then((data) => {
                    errorHandle(data)
                })
            }
        }
    }
    const errorHandle = (data) => {
        if (parseInt(data.status) === 200) {
            toast.success(data.message, alertOptions);
            setTimeout(() => {
                setUpdate2(false)
                if (parseInt(data.data.type) === 1) {
                    window.location.href = '/my-notices'
                } else {
                    window.location.href = '/my-tenders'
                }
            }, 2000)
        } else {
            toast.error(data.message, alertOptions)
        }
    }
    const docUploader = (doctype, setState, e) => {
        setUpdate(doctype)
        let formData = new FormData();
        formData.append('document', e.target.files[0]);
        if (e.target.files[0].type === "application/pdf") {
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
        } else {
            setUpdate(0)
            toast.error("Document not supported!", alertOptions)
        }
    }
    const isNotNull = (name, setState) => {
        if (name !== null) {
            setState(name)
        }
    }
    useEffect(() => {
        if (data !== false) {
            ReqCRUD('listing-view/' + data, 'get', localStorage.getItem('token')).then((data) => {
                let listData = data.data;
                if (parseInt(data.status) === 200) {
                    setTitle(listData.title)
                    setType(parseInt(listData.type))
                    setClosed(listData.expired_at)
                    setCategory(listData.category)
                    setReference(listData.ref_no)
                    setWebsite(listData.website)
                    setDescription(listData.description)
                    isNotNull(listData.attachment, setListingPdf)
                    isNotNull(listData.document1, setDocument1)
                    isNotNull(listData.document2, setDocument2)
                    isNotNull(listData.document3, setDocument3)
                    isNotNull(listData.document4, setDocument4)
                    isNotNull(listData.document5, setDocument5)
                }
            })
        }
        ReqCRUD('fields?field=work_categories&order=atoz.asc').then((data) => {
            setCategories(data)
        })
    }, [update2])
    return (
        <>
            <form onSubmit={(e) => formSubmit(e)} className="col-lg-10">
                <div className="row">
                    <div className="col-md-12">
                    </div>
                    <div className="col-lg-8">
                        <div className="bg-white px-4 pt-2 pb-4 m-1 rounded-main">
                            {update2 ? <LinearProgress color="success"/> : ""}
                            <div className="form-group my-3">
                                <label className="mb-1 text-sm" htmlFor="bname">Business Name</label>
                                <input type="text" className="form-control" disabled value={profile.company.name}
                                       placeholder="Enter your title"/>
                            </div>
                            <div className="form-group my-3">
                                <label className="mb-1 text-sm" htmlFor="title">Title *</label>
                                <input type="text" onChange={(e) => setTitle(e.target.value)}
                                       className="form-control" value={title}
                                       placeholder="Enter your title"/>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label className="mb-1 text-sm" htmlFor="type">Listing type *</label>
                                        <select name="" className="form-select" id="" value={type}
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
                                        <input type="datetime-local" value={closed}
                                               onChange={(e) => setClosed(e.target.value)}
                                               className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label className="mb-1 text-sm" htmlFor="type">Category *</label>
                                        <select name="" id="" className="form-select" value={category}
                                                onChange={(e) => setCategory(e.target.value)}>
                                            <option value="">Select category</option>
                                            {categories !== false &&
                                            categories.map((data, index) => <option key={index}
                                                                                    value={data.value}>{data.value}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label className="mb-1 text-sm" htmlFor="title">Reference No.</label>
                                        <input type="text" onChange={(e) => setReference(e.target.value)}
                                               className="form-control" value={reference}
                                               placeholder="Enter reference number"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label className="mb-1 text-sm" htmlFor="type">External Web link (optional)</label>
                                <input type="text" onChange={(e) => setWebsite(e.target.value)}
                                       className="form-control" value={website}
                                       placeholder="Paste URL here"/>
                            </div>
                            <div className="form-group mb-0">
                                <label className="mb-1 text-sm" htmlFor="type">Description *</label>
                                <textarea name="" id="" cols="30" rows="10" className="form-control"
                                          placeholder="Information about this notice or tender." value={description}
                                          onChange={(e) => setDescription(e.target.value)}/>
                            </div>
                            <div className="text-right text-xs mb-2">20,000 characters left</div>
                            <div className="btns">
                                <button type="submit" className="btn btn-main">Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 ps-md-1 ps-3 pe-3 pe-md-0">
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
            </form>
        </>
    );
};

export default CreateListItem;