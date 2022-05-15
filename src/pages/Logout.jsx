import React, {useEffect} from 'react';
import {Navigate} from "react-router";

const Logout = () => {
    useEffect(() => {
        localStorage.clear()
    }, [])
    return (
        window.location.href = '/login'
    );
};

export default Logout;