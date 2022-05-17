import React from 'react';
import Moment from "react-moment";
import {Link} from "react-router-dom";
import {ReqCRUD} from "../request";
import {toast} from "react-toastify";
import {alertOptions} from "../config";
import moment from 'moment';

const ListingItem = ({data, setUpdate}) => {
    const forceClose = (id) => {
        ReqCRUD('user/force-close/' + id, 'get', localStorage.getItem('token')).then((data) => {
            if (parseInt(data.status) === 200) {
                toast.success(data.message, alertOptions)
                setUpdate(true)
            }
        })
    }
    const deleteList = (id) => {
        ReqCRUD('user/listings/' + id, 'delete', localStorage.getItem('token')).then((data) => {
            if (parseInt(data.status) === 200) {
                toast.success(data.message, alertOptions)
                setUpdate(true)
            }
        })
    }
    const getDaysBetweenDates = function (startDate) {
        let now = startDate.clone(), dates = [];

        while (now.isSameOrBefore(moment(new Date()))) {
            dates.push(now.format('DD'));
            now.add(1, 'days');
        }
        return dates.length;
    };
    return (
        <>
            <div
                className="d-flex mb-2 bg-nitem rounded-main p-3 justify-content-between align-items-center">
                <div className="">
                    <h6 className="nitemtitle">{data.title}</h6>
                    <div className="d-flex text-muted">
                        <div className="text-xs me-4">Posted <Moment
                            format="DD MMM Y">{data.created_at}</Moment></div>
                        <div className="text-xs">Closing <Moment
                            format="DD MMM Y">{data.expired_at}</Moment></div>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <a href={`/listing/${data.id}`} target="_blank"
                       className="btn btn-outline-main outline-text py-1 px-2 btn-sm">view
                    </a>
                    <Link to={`/edit-listings/${data.id}`}
                          className="btn btn-outline-main outline-text py-1 px-2 btn-sm ms-2">edit
                    </Link>
                    <button onClick={(e) => deleteList(data.id)}
                            className="btn btn-outline-main outline-text py-1 px-2 btn-sm ms-2">delete
                    </button>
                    {getDaysBetweenDates(moment(data.expired_at)) > 0 ?
                        <>
                            <Link to={`/report-listings/${data.id}`}
                                  className="btn btn-outline-main outline-text py-1 px-2 btn-werf btn-sm ms-2">repost
                            </Link>
                            <span className={`alert-color-2 ms-2 text-xs text-bold wnitem8`}> expired </span>
                        </>
                        :
                        <>
                            <button onClick={(e) => forceClose(data.id)}
                                    className="btn btn-outline-main outline-text py-1 px-2 btn-sm ms-2 btn-werf">force
                                close
                            </button>
                            <span
                                className={`${parseInt(data.status) === 1 && "alert-color-3"} ${parseInt(data.status) === 2 && "alert-color-1"} ms-2 text-xs text-bold wnitem8`}>
                                    {parseInt(data.status) === 1 && "pending approval"}{parseInt(data.status) === 2 && "published"}
                                </span>
                        </>
                    }
                </div>
            </div>
        </>
    );
};

export default ListingItem;