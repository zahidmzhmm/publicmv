import React, {useEffect, useState} from 'react';
import JobItem from "../components/JobItem";
import WJobListing from "../components/WJobListing";
import {Pagination} from "@mui/material";
import "../utils/jobs.scss";
import {ReqCRUD} from "../request";
import {jobsicleUriApi} from "../config";

const Jobs = () => {
    const [data, setData] = useState(false);
    const [update, setUpdate] = useState(true);
    const [sector, setSector] = useState("");
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [salary, setSalary] = useState("");
    const [location, setLocation] = useState("");
    const [page, setPage] = useState(1);
    const pagination = (e) => {
        if (parseInt(data.last) > page) {
            setPage(data.last);
        } else {
            setPage(e.target.textContent)
        }
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        ReqCRUD('allJobs/filter?sector=' + sector + '&category=' + category + '&type=' + type + '&salary=' + salary + '&location=' + location + '&page=' + page, 'get', null, null, jobsicleUriApi).then((response) => {
            setData(response)
        })
        setUpdate(false)
    }, [update, page, sector, category, type, salary, location])
    return (
        <>
            <div className="mt-main"/>
            <div className="bg-white rounded-main">
                <div className="my-0 py-3 jobs-content recent-heading d-xl-flex text-start">
                    <div className="left-heading-content mb-3 mb-lg-0 d-flex justify-content-start align-items-center">
                        <div className="heading ml-main">87 Open Jobs</div>
                        <span className="ps-3 text-sm font-opens">by <a
                            href="https://jobsicle.mv" className="link font-color-color"
                            target="_blank">Jobsicle</a></span>
                    </div>
                    <div
                        className="right-form-content mx-jobs-main d-md-flex align-items-center justify-content-xl-end">
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
                                <option value="">Filter by type</option>
                            </select>
                        </div>
                        <div className="form-group ps-2 my-2 my-md-0">
                            <select name="" id="" className="form-select">
                                <option value="">Filter by salary</option>
                            </select>
                        </div>
                        <div className="form-group ps-2 my-2 my-md-0">
                            <select name="" id="" className="form-select">
                                <option value="">Filter by location</option>
                            </select>
                        </div>
                        <div className="form-group ps-2">
                            <button className="btn btn-main">Reset</button>
                        </div>
                    </div>
                </div>
                <div className="mx-recent">
                    {data !== false ?
                        <>{data.jobs.data.map((data, index) =>
                            <JobItem type={2} data={data} key={index} indexVal={index}/>
                        )}</> : ""}
                </div>
                <div className="py-3 text-center">
                    {data !== false ? <Pagination
                        count={Math.ceil(data.jobs.total / 20)}
                        onClick={(e) => pagination(e)}
                        hidePrevButton hideNextButton
                        color="primary"
                        className="d-flex justify-content-center"/> : ""}
                </div>
            </div>
            <div className="mt-main"/>
            <WJobListing/>
            <div className="pt-main"/>
        </>
    );
};

export default Jobs;