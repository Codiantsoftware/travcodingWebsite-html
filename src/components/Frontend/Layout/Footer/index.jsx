import React from "react";
import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { Button, CheckRadio } from "../../UiElements";
import { Link } from "react-router-dom";

export function Footer() {  

    return (
        <>
           <footer className="footer">
                <div className="footer_top">
                    <Container>
                        <Row className="justify-content-between">
                            <Col lg={5}>
                                <div className="footer_top_left">
                                    <h2 className="font-md"><span className="d-block">Get more, spend less.</span> Start creating your website now.</h2>
                                    <p className="mb-0">Join 18,000+ customers who already use TravCoding. <br className="d-none d-lg-block" /> Easy to use. No Coding. Specific Destination Offerings. </p>
                                </div>
                            </Col>
                            <Col lg={4} xl={{ span: 4, offset: 1 }} className="mt-3 mt-lg-0">
                                <div className="footer_top_center">
                                    <p className="mb-2 mb-lg-3">Engage Your Member, Provide Value-Added Benefits While Enjoying Revenue Sharing</p>
                                    <p className="mb-0 font-md">Our affiliate program is driven from our retail hub <Link to="#!"> TravNow.com </Link> </p>
                                    <ul className="list-unstyled mb-0">
                                        <li><em className="icon-check" />Loyalty & Rewards</li>
                                        <li><em className="icon-check" />Employee Perks</li>
                                        <li><em className="icon-check" />Membership Benefits</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3} xl={2} className="mt-3 mt-lg-0">
                                <div className="footer_top_right px-xxl-3">
                                    <Button variant="primary" label="Get Started" className="ripple-effect text-uppercase iconRight" iconPosition="right" showIcon={true} iconClass="right-arrow" />
                                    <p className="mb-0">Membership organizations like Alumni groups and Associations have a difficult road today</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="footer_center">
                    <Container>
                        <Row className="justify-content-between">
                            <Col sm={4} lg={3} xxl={2}>
                                <h3 className="footer_center_title">Our Products</h3>
                                <ul className="footer_center_links list-unstyled mb-0">
                                    <li><Link to="#!">Hotels</Link></li>
                                    <li><Link to="#!">Vacation Rentals</Link></li>
                                    <li><Link to="#!">Condos</Link></li>
                                    <li><Link to="#!">Insurance</Link></li>
                                    <li><Link to="#!">Cars</Link></li>
                                    <li><Link to="#!" className="comingSoon">Cruises (Coming Soon)</Link></li>
                                    <li><Link to="#!" className="comingSoon">Attractions (Coming Soon)</Link></li>
                                </ul>
                            </Col>
                            <Col sm={5} md={4} lg={3} xxl={2} className="mt-3 mt-sm-0">
                                <h3 className="footer_center_title">Our Solutions</h3>
                                <ul className="footer_center_links list-unstyled mb-0">
                                    <li><Link to="#!">Turnkey White Labels</Link></li>
                                    <li><Link to="#!">Our Apis</Link></li>
                                    <li><Link to="#!">Merchant Of Record</Link></li>
                                    <li><Link to="#!">US Based Customer Service</Link></li>
                                    <li><Link to="#!">Loyalty & Rewards</Link></li>
                                    <li><Link to="#!">Employee Perks</Link></li>
                                </ul>
                            </Col>
                            <Col sm={3} lg={2} className="mt-3 mt-sm-0">
                                <h3 className="footer_center_title">About Us</h3>
                                <ul className="footer_center_links list-unstyled mb-0">
                                    <li><Link to="#!">Our Values</Link></li>
                                    <li><Link to="#!">Our Team</Link></li>
                                    <li><Link to="#!">Careers</Link></li>
                                    <li><Link to="#!">Case Studies</Link></li>
                                    <li><Link to="#!">Blog</Link></li>
                                    <li><Link to="#!">Contact Us</Link></li>
                                </ul>
                            </Col>
                            <Col xxl={3} lg={4} className="mt-3 mt-sm-4 mt-lg-0">
                                <div className="footer_center_form">
                                    <h3 className="footer_center_title mb-xxl-4">Don't See Your Integration? <br className="d-none d-lg-block" />
                                    Request Below</h3>
                                    <Form>
                                        <FormGroup className="form-group d-flex">
                                            <Form.Control
                                                placeholder="Email address"
                                                aria-label="email"
                                            />
                                            <Button variant="primary" label="Submit" type="submit"/>
                                        </FormGroup>
                                    </Form>
                                    <CheckRadio name="agree" type="checkbox" label="I'm okay with getting emails and having that activity tracked to improve my experience." id="checkbox01" extraClass="form-check-inline d-block"/>
                                    <div className="footer_center_info">
                                        <h3 className="footer_center_title mb-0">Contact Info</h3>
                                        <ul className="list-unstyled mb-0 d-flex">
                                            <li> <span>Call:</span> <Link to="tel:7704861181">770-486-1181</Link>  </li>
                                            <li> <span>Email:</span> <Link to="mailto:info@travcoding.com">info@travcoding.com</Link>  </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="footer_bottom">
                    <Container>
                        <div className="d-flex align-items-center justify-content-center justify-content-sm-between footer_bottom_inner">
                            <p className="mb-0">Copyright © 2025 TravCoding, All Rights Reserved.</p>
                            <ul className="list-unstyled mb-0 d-flex align-items-center">
                                <li><Link to="#!">Sitemap</Link></li>
                                <li><Link to="#!">Security</Link></li>
                                <li><Link to="#!">Privacy & Cookie Policy</Link></li>
                                <li><Link to="#!">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </Container>
                </div>
            </footer>
        </>
    );
}