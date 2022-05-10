import React, {useState} from 'react';
import "../utils/home.scss";
import Topper from "../components/Topper";
import RecentJobs from "../components/RecentJobs";
import RecentNotices from "../components/RecentNotices";
import WJobListing from "../components/WJobListing";

const Home = () => {
    const [items, setItems] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);
    return (
        <>
            <Topper/>
            <div className="mt-main"/>
            <RecentNotices items={items} type={1}/>
            <div className="mt-main"/>
            <RecentJobs items={items} type={2}/>
            <div className="mt-main"/>
            <WJobListing/>
            <div className="pt-main"/>
        </>
    );
};

export default Home;