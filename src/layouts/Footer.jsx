import React from 'react';
import {Container} from "react-bootstrap";
import "../utils/layout.scss";

const Footer = () => {
    return (
        <>
            <div className="footer py-3">
                <Container>
                    <div className="text-center pt-4 pb-5">
                        <p className="text-center font-opens mt-2 mb-4">&copy; 2022 <a className="text-white text-decoration-none"
                                                                            href="https://public.mv">Public.mv</a></p>
                        <p className="text-center font-opens my-0">
                            All notices & tenders will be published on our social media accounts. Jobs will be published
                            on Jobsicle’s social media accounts.
                        </p>
                        <p className="text-center font-opens my-0">
                            For assistance, reach us on <a href="tel:+960 7379494"
                                                           className="text-white text-decoration-none">+960
                            7379494</a> or <a
                            href="mailto:mail@public.mv" className="text-white text-decoration-none">mail@public.mv</a>
                        </p>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Footer;