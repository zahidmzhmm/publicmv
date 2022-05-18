import React, {useEffect, useState} from 'react';
import {Pagination} from '@mui/material';
import NoData from "../../components/NoData";
import Moment from "react-moment";
import {ReqCRUD} from "../../request";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import {alertOptions} from "../../config";
import ListingItem from "../../components/ListingItem";

const MyTenders = () => {
    const [tenders, setTenders] = useState(false);
    const [page, setPage] = useState(1);
    const pagination = (e) => {
        setPage(e.target.textContent)
    }
    const [update, setUpdate] = useState(false)
    useEffect(() => {
        ReqCRUD('user/my-tenders?page=' + page, 'get', localStorage.getItem('token')).then((data) => {
            setTenders(data)
        })
        setUpdate(false)
    }, [update, page])
    return (
        <>
            <div className="col-lg-10">
                <div className="bg-white px-4 pt-4 m-1 rounded-main">
                    <h5 className={`mt-0 sub-heading ${tenders !== false && tenders.data.data.length !== 0 ? 'mb-4' : ""}`}>My
                        Tenders</h5>
                    {tenders !== false && tenders.data.data.length === 0 ?
                        <div className="text-left">
                            <NoData customClass1={"text-left"} customClass2={"mr-auto"} text={"You have not created any listings yet"}/>
                        </div> : ""}
                    {tenders !== false && parseInt(tenders.status) === 200
                        ?
                        <>
                            {
                                tenders.data.data.map((data, index) =>
                                    <ListingItem data={data} setUpdate={setUpdate}/>
                                )
                            }
                        </> : ""}

                    {tenders !== false && parseInt(tenders.status) === 200 && tenders.data.length > 0
                        ?
                        <div className="py-3 text-center">
                            <Pagination
                                count={Math.ceil(tenders.data.total / 8)}
                                onClick={(e) => pagination(e)}
                                hidePrevButton hideNextButton
                                color="primary"
                                className="d-flex justify-content-center"/>
                        </div> : ""}
                </div>
            </div>
        </>
    );
};

export default MyTenders;