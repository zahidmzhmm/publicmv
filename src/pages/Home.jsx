import React, {useState} from 'react';
import "../utils/home.scss";
import Topper from "../components/Home/Topper";
import RecentJobs from "../components/Home/RecentJobs";
import RecentNotices from "../components/Home/RecentNotices";

const Home = () => {
    const [items, setItems] = useState([{}, {}, {}, {}, {}, {}]);
    return (
        <>
            <Topper/>
            <div className="mt-main"/>
            <RecentNotices items={items}/>
            <div className="mt-main"/>
            <RecentJobs items={items}/>
            <div className="pt-main"/>
        </>
    );
};

export default Home;