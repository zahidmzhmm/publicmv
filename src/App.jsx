import React from "react";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Notices from "./pages/Notices";
import Tenders from "./pages/Tenders";
import Pricing from "./pages/Pricing";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Jobs from "./pages/Jobs";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Job from "./pages/Job";
import Dashboard from "./pages/user/Dashboard";
import CreateListing from "./pages/CreateListing";

function App() {
    return (
        <>
            <Router>
                <Header authentication={1}/>
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
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/logout" element={<Logout/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/dashboard" element={<Dashboard/>}/>
                            <Route path="/create-listing" element={<CreateListing/>}/>
                        </Routes>
                    </div>
                </div>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
