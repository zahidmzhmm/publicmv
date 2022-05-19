import React, {useEffect, useState} from 'react';
import {ReqCRUD} from "../request";

const NtTopper = ({type, setData, page}) => {
    const [fields, setFields] = useState(false);
    const [search, setSearch] = useState("");
    const [sector, setSector] = useState("");
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("");
    const [year, setYear] = useState("");
    const [ending, setEnding] = useState("");
    const [update, setUpdate] = useState(false);
    const searchFormSubmit = (e) => {
        e.preventDefault();
        setUpdate(true)
    }
    const resetForm = () => {
        setSector("")
        setCategory("")
        setStatus("")
        setYear("")
        setEnding("")
    }
    useEffect(() => {
        ReqCRUD('fields').then((data) => {
            setFields(data)
        })
        ReqCRUD('nt-filters?page=' + page + '&type=' + type + "&sector=" + sector + "&year=" + year + "&ending=" + ending + '&title=' + search + "&category=" + category + "&status=" + status).then((data) => {
            setData(data)
        })
        setUpdate(false)
    }, [page, type, sector, category, year, ending, update, status])
    return (
        <>
            <div
                className="right-form-content mx-jobs-main d-md-flex align-items-center justify-content-xl-end">
                <form onSubmit={(e) => searchFormSubmit(e)}
                      className="form-group search-form d-flex justify-content-center align-items-center ps-2 my-2 my-md-0">
                    <input type="text" className="form-control" placeholder="Search here" value={search}
                           onChange={(e) => setSearch(e.target.value)}/>
                    <button type="submit" className="btn btn-main">Find</button>
                </form>
                {
                    fields !== false ?
                        <>
                            <div className="form-group ps-2 my-2 my-md-0 nt_option_width">
                                <select name="" id="" value={sector} onChange={(e) => setSector(e.target.value)}
                                        className="form-select">
                                    <option value="">Filter by sector</option>
                                    {fields.map((data) => {
                                        if (data.field === 'work_sectors') {
                                            return <option key={data.value}
                                                           value={data.value}>{data.value}</option>
                                        }
                                    })}
                                </select>
                            </div>
                            <div className="form-group ps-2 my-2 my-md-0 nt_option_width">
                                <select name="" id="" className="form-select" value={category}
                                        onChange={(e) => setCategory(e.target.value)}>
                                    <option value="">Filter by category</option>
                                    {fields.map((data) => {
                                        if (type === 1 && data.field === 'notice_categories') {
                                            return <option key={data.value}
                                                           value={data.value}>{data.value}</option>
                                        }
                                        if (type === 2 && data.field === 'tender_categories') {
                                            return <option key={data.value}
                                                           value={data.value}>{data.value}</option>
                                        }
                                    })}
                                </select>
                            </div>
                            <div className="form-group ps-2 my-2 my-md-0 nt_option_width">
                                <select name="" id="" className="form-select" value={status}
                                        onChange={(e) => setStatus(e.target.value)}>
                                    <option value="">Filter by status</option>
                                    <option value="1">Active</option>
                                    <option value="2">Expired</option>
                                </select>
                            </div>
                            <div className="form-group ps-2 my-2 my-md-0 nt_option_width">
                                <select name="" id="" className="form-select" value={year}
                                        onChange={(e) => setYear(e.target.value)}>
                                    <option value="">Filter by year</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                </select>
                            </div>
                            <div className="form-group ps-2 my-2 my-md-0 nt_option_width">
                                <select name="" id="" className="form-select" value={ending}
                                        onChange={(e) => setEnding(e.target.value)}>
                                    <option value="">Ending in</option>
                                    <option value="14">14 days</option>
                                    <option value="7">7 days</option>
                                    <option value="3">3 days</option>
                                    <option value="1">1 days</option>
                                </select>
                            </div>
                            <div className="form-group ps-2">
                                <button onClick={resetForm} className="btn btn-main">Reset</button>
                            </div>
                        </>
                        : ""
                }
            </div>
        </>
    );
};

export default NtTopper;