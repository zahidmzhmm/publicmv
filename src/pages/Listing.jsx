import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {jobfetch} from "../hooks/job";
import JobView from "../components/JobView";
import {ReqCRUD} from "../request";
import ListingsView from "../components/ListingsView";

const Listing = () => {
    const {id} = useParams();
    const [update, setUpdate] = useState(true);
    const [data, setData] = React.useState(false);

    useEffect(() => {
        ReqCRUD('listing-view/' + id).then((data) => {
            if (parseInt(data.status) === 200) {
                setData(data.data)
            }
        })
        setUpdate(false)
    }, [update])

    return (
        <div className="job-view">
            {data !== false ? <ListingsView data={data}/> : ""}
        </div>
    );
};

export default Listing;