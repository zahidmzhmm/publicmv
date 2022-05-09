import React from 'react';

const JobItem = ({data, indexVal}) => {
    return (
        <div className="px-3 mx-2 py-3 recent-item">
            <div className="title d-flex">
                <h6 className="my-0 cursor-pointer text-ellipse">Purchase of computer systems</h6>
            </div>
            <div className={`row mt-1 font-size13 font-opens`}>
                <div className={`col-xl-7 col-lg-6 col-md-4`}>
                    ABC Company Pvt Ltd
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4">
                    <div className="ml-recent1">IUL/2022/NRM-01520</div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4">
                    <div className="ml-recent2">Posted 1 hour ago</div>
                </div>
            </div>
        </div>
    );
};

export default JobItem;