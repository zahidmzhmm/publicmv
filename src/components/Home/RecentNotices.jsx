import React from 'react';
import Item from "./Item";
import {Link} from "react-router-dom";

const RecentNotices = ({items}) => {
    return (
        <>
            <div className="bg-white rounded-main">
                <h3 className="heading recent-heading mb-0 mt-0 text-center py-3">Recent Notices & Tenders</h3>
                <div className="mx-recent">
                    {items.map((data, index) =>
                        <Item data={data} key={index} indexVal={index}/>
                    )}
                </div>
                <div className="px-recent mx-4 py-3">
                    <div className="d-block d-sm-inline">
                        <Link to="/tenders" className="link font-color-dark me-5">View all Tenders</Link>
                    </div>
                    <Link to="/tenders" className="link font-color-dark">View all Notices</Link>
                </div>
            </div>
        </>
    );
};

export default RecentNotices;