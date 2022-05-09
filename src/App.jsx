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

function App() {
    return (
        <>
            <Router>
                <Header/>
                <div className="main-content">
                    <div className="pt-main"/>
                    <div className="container">
                        <Routes>
                            <Route path="/" exact={true} element={<Home/>}/>
                            <Route path="/jobs" exact={true} element={<Jobs/>}/>
                            <Route path="/notices" exact={true} element={<Notices/>}/>
                            <Route path="/tenders" exact={true} element={<Tenders/>}/>
                            <Route path="/pricing" exact={true} element={<Pricing/>}/>
                            <Route path="/login" exact={true} element={<Login/>}/>
                            <Route path="/logout" exact={true} element={<Logout/>}/>
                            <Route path="/register" exact={true} element={<Register/>}/>
                        </Routes>
                    </div>
                </div>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
