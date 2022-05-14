import React from 'react';
import Moment from "react-moment";

const TenderItem = ({data, indexVal}) => {
    return (
        <div className="px-3 mx-2 py-3 recent-item">
            <div className="title d-flex">
                <div className="alert-section mr-2 color-primary font-opens">tender</div>
                <h6 className="my-0 cursor-pointer text-ellipse">{data.title}</h6>
            </div>
            <div className={`row mt-1 font-size13 font-opens ms-recent-item`}>
                <div className={`col-lg-3 col-xl-4 col-md-4`}>{data.name}
                </div>
                <div className="col-lg-3 col-md-4">{data.ref_no}</div>
                <div className="col-lg-3 col-md-4">Closing on <Moment format="d MMM Y">{data.closed}</Moment></div>
                <div className="col-xl-2 col-lg-3 col-md-4">Posted <Moment fromNow>{data.created_at}</Moment></div>
            </div>
        </div>
    );
};

export default TenderItem;