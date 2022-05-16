import React from 'react';
import Moment from "react-moment";
import {blobFD} from "../request";
import {Pagination} from "@mui/material";

const SubscriptionsItem = ({email_verified_at, item, status, text1, text2, text3, company, token}) => {
    const download = (id) => {
        blobFD(token, "user/gen-pdf/" + id, "Invoice.pdf")
    }
    const download2 = (id) => {
        blobFD(token, "user/receipt/" + id, "Receipt.pdf")
    }
    return (
        <div>
            {email_verified_at !== null && item ?
                <>
                    {item.map((data, index) => {
                        return (
                            <>
                                <div className={`bg-white gap-2 grid grid-cols-6 ${index === 0 ? 'pt-3' : ""}`}>
                                    <div className="ps-2 text-xs">INV-{data.id}</div>
                                    <div
                                        className="text-xs">{parseInt(data.package) === 2 ? "Pay-Per-Job" : "Annual Subscription "}</div>
                                    <div className="text-xs"><Moment format="DD MMM YYYY">{data.created_at}</Moment>
                                    </div>
                                    <div
                                        className="text-xs">
                                        {data.paid_at !== null ? <>
                                            {parseInt(data.package) !== 2
                                                ? "Paid"
                                                : "Paid"}
                                        </> : "Pending payment "}
                                    </div>
                                    <div className="text-xs">
                                        {data.paid_at !== null ?
                                            <Moment
                                                format="DD MMM YYYY">{data.updated_at}</Moment>
                                            : "-"}
                                    </div>
                                    <div className="text-xs">
                                        {status === true ?
                                            <button className="text-main"
                                                    onClick={() => download(data.id)}><b>{text2}</b></button>
                                            : text2}
                                        {data.paid_at !== null ?
                                            <button className="text-main ms-2"
                                                    onClick={() => download2(data.id)}><b>{text3}</b></button>
                                            : ""}
                                    </div>
                                </div>
                                <hr className="my-2"/>
                            </>
                        )
                    })}
                </>
                : ""
            }
        </div>
    );
};

export default SubscriptionsItem;
