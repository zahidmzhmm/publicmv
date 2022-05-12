import React from "react";
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

function App() {
    const isLoggedIn = 1;
    return (
        <>
            <Router>
                <Header authentication={isLoggedIn}/>
                <div className="main-content">
                    <div className="pt-main"/>
                    <div className="container">
                        <ToastContainer/>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/jobs" element={<Jobs/>}/>
                            <Route path="/job/:id" element={<Job/>}/>
                            <Route path="/notices" element={<Notices/>}/>
                            <Route path="/tenders" element={<Tenders/>}/>
                            <Route path="/pricing" element={<Pricing/>}/>
                            <Route path="/login" element={<Login user={isLoggedIn}/>}/>
                            <Route path="/register" element={<Register user={isLoggedIn}/>}/>
                            <Route path="/logout" element={<Logout/>}/>
                            <Route path="/dashboard"
                                   element={<ProtectedRoute user={isLoggedIn}><Dashboard/></ProtectedRoute>}/>
                            <Route path="/create-listing"
                                   element={<ProtectedRoute user={isLoggedIn}><CreateListing/></ProtectedRoute>}/>
                            <Route path="/subscription"
                                   element={<ProtectedRoute user={isLoggedIn}><Subscription/></ProtectedRoute>}/>
                            <Route path="/my-notices"
                                   element={<ProtectedRoute user={isLoggedIn}><MyNotices/></ProtectedRoute>}/>
                            <Route path="/my-tenders"
                                   element={<ProtectedRoute user={isLoggedIn}><MyTenders/></ProtectedRoute>}/>
                        </Routes>
                    </div>
                </div>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
