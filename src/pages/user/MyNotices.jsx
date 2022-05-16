import React, {useState} from 'react';
import {Pagination} from '@mui/material';
import NoData from "../../components/NoData";

const MyNotices = () => {
    const [notices, setNotices] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);
    const [page, setPage] = useState(1);
    const pagination = (e) => {
        /*if (parseInt(data.last) > page) {
            setPage(data.last);
        } else {
            setPage(e.target.textContent)
        }*/
    }
    return (
        <>
            <div className="col-lg-10">
                <div className="bg-white px-4 pt-4 m-1 rounded-main">
                    <h5 className="mt-0 sub-heading mb-4">My Notices</h5>
                    {/*<div className="text-left my-2">
                        <NoData customClass1={"text-left"} customClass2={"mr-auto"}/>
                    </div>*/}
                    {
                        notices.map((data, index) =>
                            <div
                                className="d-flex mb-2 bg-nitem rounded-main p-3 justify-content-between align-items-center">
                                <div className="">
                                    <h6 className="nitemtitle">Sale of Plot from Hulhumale phase 2</h6>
                                    <div className="d-flex text-muted">
                                        <div className="text-xs me-5">Posted 24 Sep 2022</div>
                                        <div className="text-xs">Closing 30 Sep 2022</div>
                                    </div>
                                </div>
                                <div className="">
                                    <button className="btn btn-outline-main outline-text py-1 px-2 btn-sm">view</button>
                                    <button className="btn btn-outline-main outline-text py-1 px-2 btn-sm ms-2">edit
                                    </button>
                                    <button className="btn btn-outline-main outline-text py-1 px-2 btn-sm ms-2">delete
                                    </button>
                                    <button className="btn btn-outline-main outline-text py-1 px-2 btn-sm ms-2">force
                                        close
                                    </button>
                                    <span
                                        className={`${index === 0 && "text-warning"} ${index === 1 && "text-success2"} ${index === 2 && "text-danger"} ms-2 text-sm text-bold wnitem8`}>
                                        {index === 0 && "pending approval"}{index === 1 && "published"}{index === 2 && "expired"}
                                    </span>
                                </div>
                            </div>
                        )
                    }
                    <div className="py-3 text-center">
                        <Pagination
                            count={Math.ceil(100 / 20)}
                            onClick={(e) => pagination(e)}
                            hidePrevButton hideNextButton
                            color="primary"
                            className="d-flex justify-content-center"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyNotices;