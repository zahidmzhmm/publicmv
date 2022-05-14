import React from 'react';
import ViewJob from "../modals/Viewjob";
import Moment from "react-moment";

const JobItem = ({data, indexVal}) => {
    return (
        <div className="px-3 mx-2 py-3 recent-item">
            <div className="title d-flex">
                <ViewJob id={data.id} profile={{id: 1, name: "Zahid"}} title={data.title}/>
            </div>
            <div className={`row mt-1 font-size13 font-opens`}>
                <div className={`col-xl-7 col-lg-6 col-md-4`}>
                    {data.name}
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4">
                    <div className="ml-recent1">{data.salary_range}</div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4">
                    <div className="ml-recent2"><Moment fromNow>{data.created_at}</Moment></div>
                </div>
            </div>
        </div>
    );
};

export default JobItem;