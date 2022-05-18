import React, {useEffect, useState} from 'react';
import NoticeItem from "../components/NoticeItem";
import {Pagination} from "@mui/material";
import WJobListing from "../components/WJobListing";
import TenderItem from "../components/TenderItem";
import {ReqCRUD} from "../request";
import {loader} from "../config";
import NoData from "../components/NoData";

const Tenders = () => {
    const [data, setData] = useState(false);
    const [page, setPage] = useState(1);
    const pagination = (e) => {
        setPage(e.target.textContent);
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        ReqCRUD('tenders?page=' + page).then((data) => {
            setData(data)
        })
    }, [page])
    return (
        <>

            <div className="mt-main"/>
            <div className="bg-white rounded-main">
                <div className="my-0 py-3 jobs-content recent-heading d-xl-flex text-start">
                    <div className="left-heading-content mb-3 mb-lg-0 d-flex justify-content-start align-items-center">
                        <div className="heading ml-main">All Tenders</div>
                    </div>
                    <div
                        className="right-form-content mx-jobs-main d-md-flex align-items-center justify-content-xl-end">
                        <div
                            className="form-group search-form d-flex justify-content-center align-items-center ps-2 my-2 my-md-0">
                            <input type="text" className="form-control" placeholder="Search here"/>
                            <button className="btn btn-main">Find</button>
                        </div>
                        <div className="form-group ps-2 my-2 my-md-0">
                            <select name="" id="" className="form-select">
                                <option value="">Filter by sector</option>
                            </select>
                        </div>
                        <div className="form-group ps-2 my-2 my-md-0">
                            <select name="" id="" className="form-select">
                                <option value="">Filter by category</option>
                            </select>
                        </div>
                        <div className="form-group ps-2 my-2 my-md-0">
                            <select name="" id="" className="form-select">
                                <option value="">Filter by status</option>
                            </select>
                        </div>
                        <div className="form-group ps-2 my-2 my-md-0">
                            <select name="" id="" className="form-select">
                                <option value="">Filter by year</option>
                            </select>
                        </div>
                        <div className="form-group ps-2 my-2 my-md-0">
                            <select name="" id="" className="form-select">
                                <option value="">Ending in</option>
                            </select>
                        </div>
                        <div className="form-group ps-2">
                            <button className="btn btn-main">Reset</button>
                        </div>
                    </div>
                </div>
                <div className="mx-recent">
                    {data !== false ?
                        <>
                            {data.data.map((data, index) =>
                                <TenderItem type={2} data={data} key={index} indexVal={index}/>
                            )}
                        </> : loader("20rem")}
                    {data !== false && data.data.length === 0 ?
                        <NoData customClass1={"text-center"} customClass2={"m-auto"}/> : ""}
                </div>

                {data !== false && data.data.length > 0 ?
                    <div className="py-3 text-center">
                        {data !== false && <Pagination
                            count={Math.ceil(data.total / 20)}
                            onClick={(e) => pagination(e)}
                            hidePrevButton hideNextButton
                            color="primary"
                            className="d-flex justify-content-center"/>}
                    </div> : ""}
            </div>
            <div className="mt-main"/>
            <WJobListing/>
            <div className="pt-main"/>
        </>
    );
};

export default Tenders;