import React from 'react';
import RecentNTItem from "./RecentNTItem";
import {Link} from "react-router-dom";
import NoData from "./NoData";

const RecentNotices = ({data, type}) => {
    return (
        <>
            <div className="bg-white rounded-main">
                <h3 className="heading recent-heading mb-0 mt-0 text-center py-3">Recent Notices & Tenders</h3>
                <div className="mx-recent">
                    {data.length > 0 ?
                        <>
                            {data.map((data, index) =>
                                <RecentNTItem type={type} data={data} key={index} indexVal={index}/>
                            )}
                        </> : <NoData customClass1={"text-center"} customClass2={"m-auto"}/>}

                </div>
                {data.length > 0 ?
                    <div className="px-recent mx-4 py-3">
                        <div className="d-block d-sm-inline">
                            <Link to="/tenders" className="link font-color-dark me-5">View all Tenders</Link>
                        </div>
                        <Link to="/notices" className="link font-color-dark">View all Notices</Link>
                    </div> : ""}
            </div>
        </>
    );
};

export default RecentNotices;