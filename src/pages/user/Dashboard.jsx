import React from 'react';
import Subscription from "../../components/alerts/Subscription";
import Sidebar from "../../layouts/Sidebar";

const Dashboard = () => {
    return (
        <>
            <div className="mt-main"/>
            <Subscription/>
            <div className="mt-main"/>
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-lg-4 pe-1">
                            <Sidebar/>
                        </div>
                        <div className="col-lg-3 px-1">
                            <div className="content p-3 m-1 bg-white rounded-main">
                                Test
                            </div>
                        </div>
                        <div className="col-lg-5 px-1">
                            <div className="content p-3 m-1 bg-white rounded-main">
                                Test
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="row">
                        <div className="col-md-7 px-1">
                            <div className="content p-3 m-1 bg-white rounded-main">
                                Test
                            </div>
                        </div>
                        <div className="col-md-5 ps-1">
                            <div className="content p-3 text-sm m-1 bg-white rounded-main">
                                Create Listing
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;