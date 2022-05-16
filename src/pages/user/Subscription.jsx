import React, {useContext, useEffect, useState} from 'react';
import {HiCheckCircle} from "react-icons/hi";
import "../../utils/pricing.scss";
import SubscriptionContent from "../../components/SubscriptionContent";
import SubscriptionHistory from "../../components/SubscriptionHistory";
import {UserContext} from "../../App";
import {ReqCRUD} from "../../request";
import {toast} from "react-toastify";
import {alertOptions} from "../../config";

const Subscription = () => {
    const {profile} = useContext(UserContext);
    const [subscription, setSubscription] = useState(false);
    const [slip, setSlip] = useState("");
    useEffect(() => {
        if (profile.invoice_pending !== null) {
            if (profile.invoice_pending.slip !== null) {
                setSlip(profile.invoice_pending.slip)
            }
        }
    })
    const onUploadSlip = (e) => {
        let currentFile = e.target.files[0];
        let formData = new FormData();
        formData.append('slip', e.target.files[0]);
        formData.append('_method', 'put')
        if (currentFile.type == 'image/jpeg' || currentFile.type == 'image/png' || currentFile.type == 'application/pdf'){
            ReqCRUD('user/slip-upload/' + profile.invoice_pending.id, 'post', localStorage.getItem('token'), formData).then((data) => {
                if (parseInt(data.status) === 200) {
                    setSlip(data.data.slip)
                    toast.success(data.message, alertOptions)
                } else {
                    toast.error(data.message, alertOptions)
                }
            })
        }else{
            toast.error('File Format Error', alertOptions)
        }
    }
    return (
        <>
            <div className="col-lg-10">
                {profile.invoice_pending !== null
                    ?
                    <>
                        <div
                            className="bg-white d-flex px-4 py-3 justify-content-start align-items-center m-1 rounded-main">
                            <p className="my-0 text-sm text-muted">Pending payment
                                for {parseInt(profile.invoice_pending.package) === 2 ? "Pay-per-listing " : "Annual Package "}</p>
                            {slip === "" ?
                                <>
                                    <label htmlFor="upload-slip"
                                           className="btn btn-outline-main ms-4">Upload Payment Slip
                                    </label>
                                    <input type="file" className="d-none" id="upload-slip"
                                           onChange={(e) => onUploadSlip(e)}/>
                                </> :
                                <>
                                    <div className="text-warning ms-2">Payment slip linked</div>
                                </>}
                            <button onClick={() => setSubscription(!subscription)}
                                    className="btn btn-outline-main ms-4">Change Package
                            </button>
                        </div>
                    </>
                    : ""}
                {!subscription ?
                    <> {profile.annual === null && profile.payper === null && profile.invoice_pending === null
                        ? <div
                            className="bg-white d-flex px-4 py-3 justify-content-start align-items-center m-1 rounded-main">
                            <p className="my-0 text-sm text-muted">No active subscriptions</p>
                            <button onClick={() => setSubscription(!subscription)}
                                    className="btn btn-outline-main ms-4">Subscribe
                            </button>
                        </div> : ""}
                        <SubscriptionHistory/>
                    </> : <SubscriptionContent/>}
            </div>
        </>
    );
};

export default Subscription;