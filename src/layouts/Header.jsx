import React from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import NavItems from "../components/NavItems";
import {websiteData} from "../config";
import "../utils/layout.scss";

const Header = ({authentication}) => {
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
                            <NavItems name="Jobs" path="/"/>
                            <NavItems name="Notices" path="/notices"/>
                            <NavItems name="Tenders" path="/tenders"/>
                            <NavItems name="Pricing" path="/pricing"/>
                        </Nav>
                        <Nav className="ms-auto navBarItemRight">
                            {
                                authentication ?
                                    <>
                                        {parseInt(authentication.role) === 2 &&
                                        <>
                                            <NavItems customClass="pBtn" name="Post a Job" path="/post-job"/>
                                            <NavItems name="My Company" path="/my-company"/>
                                        </>
                                        }
                                        {parseInt(authentication.role) === 1 &&
                                        <>
                                            <NavItems name="My Profile" path="/profile"/>
                                        </>
                                        }
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