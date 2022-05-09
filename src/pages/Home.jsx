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
            <div className="mt-main"/>
            <div className="postjob-alert p-4 rounded-main">
                <h4 className="text-center heading mb-0 mt-1">Want to post a Job listing?</h4>
                <p className="text-center text mt-3">
                    Get registered on <b><a href="https://jobsicle.mv" className="link font-color-white">www.jobsicle.mv</a></b> and
                    post your jobs there.
                    It will instantly get published in our
                    job section
                </p>
            </div>
            <div className="pt-main"/>
        </>
    );
};

export default Home;