import React from 'react';

const NoticeItem = ({data, indexVal}) => {
    return (
        <div className="px-3 mx-2 py-3 recent-item">
            <div className="title d-flex">
                {indexVal === 2 ?
                    <div className="alert-section mr-2 color-danger font-opens">notice</div>
                    : <div className="alert-section mr-2 color-primary font-opens">tender</div>}
                <h6 className="my-0 cursor-pointer text-ellipse">Purchase of computer systems</h6>
            </div>
            <div className={`row mt-1 font-size13 font-opens ms-recent-item`}>
                <div className={`col-lg-3 col-xl-4 col-md-4`}>ABC
                    Company Pvt Ltd
                </div>
                <div className="col-lg-3 col-md-4">IUL/2022/NRM-01520</div>
                <div className="col-lg-3 col-md-4">Closing on 24 Sep 2022</div>
                <div className="col-xl-2 col-lg-3 col-md-4">Posted 1 hour ago</div>
            </div>
        </div>
    );
};

export default NoticeItem;