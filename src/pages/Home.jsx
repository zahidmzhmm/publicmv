import React from 'react';
import "../utils/home.scss";
import Topper from "../components/Home/Topper";
import Recent from "../components/Home/Recent";

const Home = () => {
    return (
        <>
            <Topper/>
            <div className="mt-main"/>
            <Recent/>
        </>
    );
};

export default Home;