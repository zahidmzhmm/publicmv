import React from 'react';
import icon from "../assets/no-data-img.png";

const NoData = ({customClass1, customClass2}) => {
    return (
        <>
            <div className={`${customClass1} no-data-alert p-3`}>
                <div className={`icon pt-2 ${customClass2}`}><img src={icon} className="img-fluid" alt=""/></div>
                <div className="text-p font-opens pb-3">Nothing to show at the moment. No active listings</div>
            </div>
        </>
    );
};

export default NoData;