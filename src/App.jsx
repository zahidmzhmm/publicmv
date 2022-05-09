import React from "react";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" exact={true} element={<Home/>}/>
                    <Route path="/home" exact={true} element={<Home/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
