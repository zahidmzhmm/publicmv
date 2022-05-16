import React, {useContext} from 'react';
import "../../utils/dashboard.scss";
import {UserContext} from "../../App";
import Moment from "react-moment";

const Subscription = () => {
    const {profile} = useContext(UserContext);
    return (
        <>
            {profile.annual === null && profile.payper === null ?
                <div className="subscription-alert">
                    You do not have any active subscriptions.
                </div> :
                <>
                    {profile.annual !== null &&
                    <div className="subscription-alert">
                        You have an active subscription for <Moment
                        format="DD MMM YYYY">{profile.annual.expiry_date}</Moment> {profile.annual.package}
                    </div>
                    }
                    {profile.payper !== null &&
                    <div className="subscription-alert">
                        You have an active subscription for {profile.payper.jobs_left} {profile.payper.package}
                    </div>
                    }
                </>
            }
        </>
    );
};

export default Subscription;