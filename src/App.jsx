import React, {createContext, useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import {ToastContainer} from "react-toastify";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Notices from "./pages/Notices";
import Tenders from "./pages/Tenders";
import Pricing from "./pages/Pricing";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Jobs from "./pages/Jobs";
import Job from "./pages/Job";
import Dashboard from "./pages/user/Dashboard";
import CreateListing from "./pages/user/CreateListing";
import ProtectedRoute from "./ProtectedRoute";
import Subscription from "./pages/user/Subscription";
import MyNotices from "./pages/user/MyNotices";
import MyTenders from "./pages/user/MyTenders";
import {ReqCRUD} from "./request";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifyEmail from "./pages/VerifyEmail";
import Listing from "./pages/Listing";
import EditList from "./pages/user/EditList";
import Repost from "./pages/user/Repost";

export const UserContext = createContext();

function App() {
    const [data, setData] = useState(false);
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            let token = localStorage.getItem('token');
            ReqCRUD('profile', 'get', token).then((data, index) => {
                if (parseInt(data.status) === 200) {
                    setData({profile: data});
                }
            })
        }
    }, [update])
    return (
        <>
            <Router>
                <UserContext.Provider value={data}>
                    <Header profile={data}/>
                    <div className="main-content">
                        <div className="pt-main"/>
                        <div className="container">
                            <ToastContainer/>
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/jobs" element={<Jobs/>}/>
                                <Route path="/job/:id" element={<Job/>}/>
                                <Route path="/listing/:id" element={<Listing/>}/>
                                <Route path="/notices" element={<Notices/>}/>
                                <Route path="/tenders" element={<Tenders/>}/>
                                <Route path="/pricing" element={<Pricing/>}/>
                                <Route path="/login" element={<Login/>}/>
                                <Route path="/forget-password" element={<ForgotPassword/>}/>
                                <Route path="/reset-password/:token" element={<ResetPassword/>}/>
                                <Route path="/verify-email/:id/:token" element={<VerifyEmail/>}/>
                                <Route path="/register" element={<Register/>}/>
                                <Route path="/logout" element={<Logout/>}/>
                                <Route path="/dashboard"
                                       element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
                                <Route path="/create-listing"
                                       element={<ProtectedRoute><CreateListing/></ProtectedRoute>}/>
                                <Route path="/subscription"
                                       element={<ProtectedRoute><Subscription/></ProtectedRoute>}/>
                                <Route path="/my-notices"
                                       element={<ProtectedRoute><MyNotices/></ProtectedRoute>}/>
                                <Route path="/edit-listings/:id"
                                       element={<ProtectedRoute><EditList/></ProtectedRoute>}/>
                                <Route path="/repost-listings/:id"
                                       element={<ProtectedRoute><Repost/></ProtectedRoute>}/>
                                <Route path="/my-tenders"
                                       element={<ProtectedRoute><MyTenders/></ProtectedRoute>}/>
                            </Routes>
                        </div>
                    </div>
                    <Footer/>
                </UserContext.Provider>
            </Router>
        </>
    );
}

export default App;
