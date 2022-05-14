import React, {useEffect, useState} from 'react';
import Topper from "../components/Topper";
import RecentJobs from "../components/RecentJobs";
import RecentNotices from "../components/RecentNotices";
import WJobListing from "../components/WJobListing";
import {ReqCRUD} from "../request";
import "../utils/home.scss";
import {jobsicleUriApi} from "../config";

const Home = () => {
    const [data, setData] = useState(false);
    const [update, setUpdate] = useState(true);
    const [notices, setNotices] = useState(false)
    useEffect(() => {
        ReqCRUD('allJobs/filter?sector=&category=&type=&salary=&location=&page=1', 'get', null, null, jobsicleUriApi).then((response) => {
            setData(response)
        })
    }, [update])
    return (
        <>
            <Topper/>
            <div className="mt-main"/>
            {notices !== false ? <RecentNotices data={notices} type={1}/> : ""}
            <div className="mt-main"/>
            {data !== false ? <RecentJobs data={data} type={2}/> : ""}
            <div className="mt-main"/>
            <WJobListing/>
            <div className="pt-main"/>
        </>
    );
};

export default Home;