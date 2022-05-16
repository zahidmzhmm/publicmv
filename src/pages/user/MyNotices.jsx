import React, {useEffect, useState} from 'react';
import {Pagination} from '@mui/material';
import NoData from "../../components/NoData";
import {ReqCRUD} from "../../request";
import Moment from "react-moment";
import {toast} from "react-toastify";
import {alertOptions} from "../../config";
import {Link} from "react-router-dom";

const MyNotices = () => {
    const [notices, setNotices] = useState(false);
    const [page, setPage] = useState(1);
    const pagination = (e) => {
        setPage(e.target.textContent)
    }
    const [update, setUpdate] = useState(false)
    useEffect(() => {
        ReqCRUD('user/my-notices?page=' + page, 'get', localStorage.getItem('token')).then((data) => {
            setNotices(data)
        })
    }, [update, page])
    const deleteList = (id) => {
        ReqCRUD('user/listings/' + id, 'delete', localStorage.getItem('token')).then((data) => {
            if (parseInt(data.status) === 200) {
                toast.success(data.message, alertOptions)
                setUpdate(true)
            }
        })
    }
    const forceClose = (id) => {
        ReqCRUD('user/force-close/' + id, 'get', localStorage.getItem('token')).then((data) => {
            if (parseInt(data.status) === 200) {
                toast.success(data.message, alertOptions)
                setUpdate(true)
            }
        })
    }
    return (
        <>
            <div className="col-lg-10">
                <div className="bg-white px-4 pt-4 m-1 rounded-main">
                    <h5 className={`mt-0 sub-heading ${notices !== false && notices.data.data.length !== 0 ? 'mb-4' : ""}`}>My
                        Notices</h5>
                    {notices !== false && notices.data.data.length === 0 ?
                        <div className="text-left">
                            <NoData customClass1={"text-left"} customClass2={"mr-auto"}/>
                        </div> : ""}
                    {notices !== false && parseInt(notices.status) === 200
                        ?
                        <>
                            {
                                notices.data.data.map((data, index) =>
                                    <div
                                        className="d-flex mb-2 bg-nitem rounded-main p-3 justify-content-between align-items-center">
                                        <div className="">
                                            <h6 className="nitemtitle">{data.title}</h6>
                                            <div className="d-flex text-muted">
                                                <div className="text-xs me-4">Posted <Moment
                                                    format="DD MMM Y">{data.created_at}</Moment></div>
                                                <div className="text-xs">Closing <Moment
                                                    format="DD MMM Y">{data.closed}</Moment></div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <a href={`/listings/${data.id}`} target="_blank"
                                               className="btn btn-outline-main outline-text py-1 px-2 btn-sm">view
                                            </a>
                                            <Link to={`/edit-listings/${data.id}`}
                                                  className="btn btn-outline-main outline-text py-1 px-2 btn-sm ms-2">edit
                                            </Link>
                                            <button onClick={(e) => deleteList(data.id)}
                                                    className="btn btn-outline-main outline-text py-1 px-2 btn-sm ms-2">delete
                                            </button>
                                            {data.expired_at === null
                                                ?
                                                <button onClick={(e) => forceClose(data.id)}
                                                        className="btn btn-outline-main outline-text py-1 px-2 btn-sm ms-2 btn-werf">force
                                                    close
                                                </button> : <Link to={`/report-listings/${data.id}`}
                                                                  className="btn btn-outline-main outline-text py-1 px-2 btn-werf btn-sm ms-2">repost
                                                </Link>}
                                            {data.expired_at === null
                                                ?
                                                <span
                                                    className={`${parseInt(data.status) === 1 && "alert-color-3"} ${parseInt(data.status) === 2 && "alert-color-1"} ms-2 text-xs text-bold wnitem8`}>
                                                    {parseInt(data.status) === 1 && "pending approval"}{parseInt(data.status) === 2 && "published"}
                                                </span>
                                                : <span
                                                    className={`alert-color-2 ms-2 text-xs text-bold wnitem8`}> expired </span>}
                                        </div>
                                    </div>
                                )
                            }
                        </> : ""}
                    <div className="py-3 text-center">
                        {notices !== false && parseInt(notices.status) === 200
                            ? <Pagination
                                count={Math.ceil(notices.data.total / 8)}
                                onClick={(e) => pagination(e)}
                                hidePrevButton hideNextButton
                                color="primary"
                                className="d-flex justify-content-center"/>
                            : ""}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyNotices;