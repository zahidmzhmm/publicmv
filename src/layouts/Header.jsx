import React, {useEffect} from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import NavItems from "../components/NavItems";
import {websiteData} from "../config";
import "../utils/layout.scss";
import {UserContext} from "../App";

const Header = ({profile}) => {
    useEffect(()=>{
        console.log(profile)
    })
    return (
        <>
            <Navbar bg="light" className="shadow-sm bg-white header" expand="lg" fixed="top">
                <Container>
                    <NavLink to="/" className="navbar-brand logo">
                        <img src={websiteData.header_logo} alt=""/>
                    </NavLink>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto navBarItemLeft">
                            <NavItems name="Jobs" path="/jobs"/>
                            <NavItems name="Notices" path="/notices"/>
                            <NavItems name="Tenders" path="/tenders"/>
                            <NavItems name="Pricing" path="/pricing"/>
                        </Nav>
                        <Nav className="ms-auto navBarItemRight">
                            {
                                profile ?
                                    <>
                                        <NavItems customClass="btn btn-main" name="Create Listing"
                                                  path="/create-listing"/>
                                        <NavItems name="Dashboard" path="/dashboard"/>
                                        <NavItems name="Logout" path="/logout"/>
                                    </>
                                    :
                                    <>
                                        <NavItems name="Login" path="/login"/>
                                        <NavItems name="Register" path="/register"/>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;