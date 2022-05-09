import React, {useState} from 'react';
import "../utils/home.scss";
import Topper from "../components/Home/Topper";
import RecentJobs from "../components/Home/RecentJobs";
import RecentNotices from "../components/Home/RecentNotices";

const Home = () => {
    const [items, setItems] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);
    return (
        <>
            <Topper/>
            <div className="mt-main"/>
            <RecentNotices items={items} type={1}/>
            <div className="mt-main"/>
            <RecentJobs items={items} type={2}/>
            <div className="pt-main"/>
        </>
    );
};

export default Home;