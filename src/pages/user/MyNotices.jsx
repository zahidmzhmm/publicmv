import React, {useEffect, useState} from 'react';
import {Pagination} from '@mui/material';
import NoData from "../../components/NoData";
import {ReqCRUD} from "../../request";
import ListingItem from "../../components/ListingItem";

const MyNotices = () => {
    const [notices, setNotices] = useState(false);
    const [page, setPage] = useState(1);
    const pagination = (e) => {
        setPage(e.target.textContent)
    }
    const [update, setUpdate] = useState(false)
    useEffect(() => {
        ReqCRUD('user/my-notices?page=' + page, 'get', localStorage.getItem('token')).then((data) => {
            setNotices(data)
        })
    }, [update, page])
    return (
        <>
            <div className="col-lg-10">
                <div className="bg-white px-4 pt-4 m-1 rounded-main">
                    <h5 className={`mt-0 sub-heading ${notices !== false && notices.data.data.length !== 0 ? 'mb-4' : ""}`}>My
                        Notices</h5>
                    {notices !== false && notices.data.data.length === 0 ?
                        <div className="text-left">
                            <NoData customClass1={"text-left"} customClass2={"mr-auto"}/>
                        </div> : ""}
                    {notices !== false && parseInt(notices.status) === 200
                        ?
                        <>
                            {
                                notices.data.data.map((data, index) =>
                                    <ListingItem data={data} setUpdate={setUpdate}/>
                                )
                            }
                        </> : ""}
                    <div className="py-3 text-center">
                        {notices !== false && parseInt(notices.status) === 200
                            ? <Pagination
                                count={Math.ceil(notices.data.total / 8)}
                                onClick={(e) => pagination(e)}
                                hidePrevButton hideNextButton
                                color="primary"
                                className="d-flex justify-content-center"/>
                            : ""}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyNotices;