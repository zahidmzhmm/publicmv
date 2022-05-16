import React, {useContext} from 'react';
import {UserContext} from "../App";
import SubscriptionsItem from "./SubscriptionsItem";

const SubscriptionHistory = () => {
    const {profile} = useContext(UserContext)
    return (
        <>
            <div
                className="bg-white px-4 mt-3 py-4 m-1 rounded-main">
                <p className="my-0 text-sm"><b>History</b></p>
                {profile.invoice === null ?
                    <p className="mt-3 mb-0 text-sm text-muted">You do not have any previous subscriptions.</p>
                    :
                    <>
                        <div className="mt-4 bg-gray-200 gap-2 py-2 grid grid-cols-6">
                            <div className="text-gray-500 text-xs ps-2">Ref</div>
                            <div className="text-gray-500 text-xs">Type</div>
                            <div className="text-gray-500 text-xs">Issued on</div>
                            <div className="text-gray-500 text-xs">Status</div>
                            <div className="text-gray-500 text-xs">Paid on</div>
                            <div className="text-gray-500 text-xs">Download</div>
                        </div>
                        <SubscriptionsItem token={localStorage.getItem('token')}
                                           status={true} email_verified_at={profile.user.email_verified_at}
                                           item={profile.invoice}
                                           company={profile.company} text3={"Receipt"}
                                           text1={`is Expired`} text2={"Invoice"}/>
                    </>}
            </div>
        </>
    );
};

export default SubscriptionHistory;