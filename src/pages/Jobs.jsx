import React, {useEffect, useState} from 'react';
import JobItem from "../components/JobItem";
import WJobListing from "../components/WJobListing";
import {Pagination} from "@mui/material";
import {ReqCRUD} from "../request";
import {jobsicleUriApi, sortedFields} from "../config";
import "../utils/jobs.scss";

const Jobs = () => {
    const [data, setData] = useState(false);
    const [update, setUpdate] = useState(true);
    const [sector, setSector] = useState("");
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [salary, setSalary] = useState("");
    const [location, setLocation] = useState("");
    const [page, setPage] = useState(1);
    const [filters, setFilters] = useState(false);
    const pagination = (e) => {
        if (parseInt(data.last) > page) {
            setPage(data.last);
        } else {
            setPage(e.target.textContent)
        }
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        if (filters === false) {
            ReqCRUD('fields').then((response) => {
                setFilters(response)
            })
        }
        ReqCRUD('allJobs/filter?sector=' + sector + '&category=' + category + '&type=' + type + '&salary=' + salary + '&location=' + location + '&page=' + page, 'get', null, null, jobsicleUriApi).then((response) => {
            setData(response)
        })
        setUpdate(false)
    }, [update, page, sector, category, type, salary, location])
    const resetButton = () => {
        setSector("")
        setCategory("")
        setType("")
        setSalary("")
        setLocation("")
        setPage(1)
        setUpdate(true);
    }
    return (
        <>
            <div className="mt-main"/>
            <div className="bg-white rounded-main">
                <div className="my-0 py-3 jobs-content recent-heading d-xl-flex text-start">
                    <div className="left-heading-content mb-3 mb-lg-0 d-flex justify-content-start align-items-center">
                        <div className="heading ml-main">{data !== false ? data.count : ""} Open Jobs</div>
                        <span className="ps-3 text-sm font-opens">by <a
                            href="https://jobsicle.mv" className="link font-color-color"
                            target="_blank">Jobsicle</a></span>
                    </div>
                    <form
                        className="right-form-content mx-jobs-main d-md-flex align-items-center justify-content-xl-end">
                        {filters !== false
                            ? <>
                                <div className="form-group ps-2 my-2 my-md-0">
                                    <select name="" onChange={(e) => setSector(e.target.value)} id=""
                                            className="form-select filter-width">
                                        <option value="">Filter by sector</option>
                                        {sortedFields("work_sectors", filters).map((data) => {
                                            return <option key={data.value} value={data.value}>{data.value}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="form-group ps-2 my-2 my-md-0">
                                    <select name="" onChange={(e) => setCategory(e.target.value)} id=""
                                            className="form-select filter-width">
                                        <option value="">Filter by category</option>
                                        {sortedFields('work_categories', filters).map((data) => {
                                            return <option key={data.value} value={data.value}>{data.value}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="form-group ps-2 my-2 my-md-0">
                                    <select name="" onChange={(e) => setType(e.target.value)} id=""
                                            className="form-select filter-width">
                                        <option value="">Filter by type</option>
                                        {sortedFields('job_types', filters).map((data) => {
                                            return <option key={data.value} value={data.value}>{data.value}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="form-group ps-2 my-2 my-md-0">
                                    <select name="" onChange={(e) => setSalary(e.target.value)} id=""
                                            className="form-select filter-width">
                                        <option value="">Filter by salary</option>
                                        {filters.map((data) => {
                                            if (data.field === 'salary_range') {
                                                return <option key={data.value} value={data.value}>{data.value}</option>
                                            }
                                        })}
                                    </select>
                                </div>
                                <div className="form-group ps-2 my-2 my-md-0">
                                    <select name="" onChange={(e) => setLocation(e.target.value)} id=""
                                            className="form-select filter-width">
                                        <option value="">Filter by location</option>
                                        {sortedFields('preferred_locations', filters).map((data) => {
                                            return <option key={data.value} value={data.value}>{data.value}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="form-group ps-2" onClick={resetButton}>
                                    <button type="reset" className="btn btn-main">Reset</button>
                                </div>
                            </>
                            : ""}
                    </form>
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