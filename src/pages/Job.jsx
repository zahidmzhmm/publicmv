import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import JobView from "../components/JobView";
import {jobfetch} from "../hooks/job";
import "../utils/jobs.scss";

const Job = () => {
    const {id} = useParams();
    const [update, setUpdate] = useState(true);
    const [applicationChecker, setApplicationChecker] = React.useState(null)
    const [save, setSave] = React.useState(false)
    const [data, setData] = React.useState(false);

    useEffect(() => {
        jobfetch(id, setApplicationChecker, setSave, setData)
        setUpdate(false)
    }, [update])

    return (
        <div className="job-view">
            <JobView data={data} applicationChecker={applicationChecker} save={save}/>
        </div>
    );
};

export default Job;