import React from 'react';
import {HiCheckCircle} from "react-icons/hi";
import "../../utils/pricing.scss";
import SubscriptionContent from "../../components/SubscriptionContent";
import SubscriptionHistory from "../../components/SubscriptionHistory";

const Subscription = () => {
    return (
        <>
            <div className="col-lg-10">
                <div className="bg-white d-flex px-4 py-3 justify-content-start align-items-center m-1 rounded-main">
                    <p className="my-0 text-sm text-muted">No active subscriptions</p>
                    <button className="btn btn-outline-main ms-4">Subscribe</button>
                </div>
            </div>
        </>
    );
};

export default Subscription;