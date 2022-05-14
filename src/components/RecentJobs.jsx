import React from 'react';
import {Link} from 'react-router-dom';
import JobItem from "./JobItem";

const RecentJobs = ({data, type}) => {
    return (
        <>
            <div className="bg-white rounded-main">
                <div className="d-flex recent-heading">
                    <div className="tagline ms-4">
                        <div className="ms-tag font-opens text-sm">
                            Content by <a href="https://jobsicle.mv" target="_blank"
                                          className="text-main my-3 link font-color-color d-inline-block">Jobsicle</a>
                        </div>
                    </div>
                    <h3
                        className="heading mb-0 mt-0 py-3">Recent Job Openings</h3>

                </div>
                <div className="mx-recent">
                    {data.jobs.data.map((data, index) =>
                        <JobItem type={type} data={data} key={index} indexVal={index}/>
                    )}
                </div>
                <div className="px-recent mx-4 py-3">
                    <Link to="/jobs" className="link font-color-dark me-5">View all</Link>
                </div>
            </div>
        </>
    );
};

export default RecentJobs;