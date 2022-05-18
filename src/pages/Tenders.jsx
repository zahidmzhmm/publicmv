import React, {useState} from 'react';
import {Pagination} from "@mui/material";
import WJobListing from "../components/WJobListing";
import TenderItem from "../components/TenderItem";
import {loader} from "../config";
import NoData from "../components/NoData";
import NtTopper from "../components/NTTopper";

const Tenders = () => {
    const [data, setData] = useState(false);
    const [page, setPage] = useState(1);
    const pagination = (e) => {
        setPage(e.target.textContent);
        window.scrollTo(0, 0);
    }
    return (
        <>

            <div className="mt-main"/>
            <div className="bg-white rounded-main">
                <div className="my-0 py-3 jobs-content recent-heading d-xl-flex text-start">
                    <div className="left-heading-content mb-3 mb-lg-0 d-flex justify-content-start align-items-center">
                        <div className="heading ml-main">All Tenders</div>
                    </div>
                    <NtTopper type={2} setData={setData} setPage={setPage} page={page}/>
                </div>
                <div className="mx-recent">
                    {data !== false ?
                        <>
                            {data.data.map((data, index) =>
                                <TenderItem type={2} data={data} key={index} indexVal={index}/>
                            )}
                        </> : loader("20rem")}
                    {data !== false && data.data.length === 0 ?
                        <NoData customClass1={"text-center"} customClass2={"m-auto"}/> : ""}
                </div>

                {data !== false && data.total !== undefined && data.total > 0 ?
                    <div className="py-3 text-center">
                        {data !== false && <Pagination
                            count={Math.ceil(data.total / 20)}
                            onClick={(e) => pagination(e)}
                            hidePrevButton hideNextButton
                            color="primary"
                            className="d-flex justify-content-center"/>}
                    </div> : ""}
            </div>
            <div className="mt-main"/>
            <WJobListing/>
            <div className="pt-main"/>
        </>
    );
};

export default Tenders;