import React, {useState} from 'react';
import NoticeItem from "../components/Home/NoticeItem";
import {Pagination} from "@mui/material";
import WJobListing from "../components/Home/WJobListing";
import TenderItem from "../components/Home/TenderItem";

const Tenders = () => {
    const [items, setItems] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);
    const [page, setPage] = useState(1);
    const pagination = (e) => {
        setPage(e.target.textContent);
        window.scrollTo(0, 0);
    }
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
                    {items.map((data, index) =>
                        <TenderItem type={2} data={data} key={index} indexVal={index}/>
                    )}
                </div>
                <div className="py-3 text-center">
                    <Pagination
                        count={Math.ceil(100 / 20)}
                        onClick={(e) => pagination(e)}
                        hidePrevButton hideNextButton
                        color="primary"
                        className="d-flex justify-content-center"/>
                </div>
            </div>
            <div className="mt-main"/>
            <WJobListing/>
            <div className="pt-main"/>
        </>
    );
};

export default Tenders;