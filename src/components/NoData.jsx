import React from 'react';
import icon from "../assets/no-data-img.png";

const NoData = () => {
    return (
        <>
            <div className="text-center no-data-alert p-3">
                <div className="icon pt-2"><img src={icon} className="img-fluid" alt=""/></div>
                <div className="text-p font-opens pb-3">Nothing to show at the moment. No active listings</div>
            </div>
        </>
    );
};

export default NoData;