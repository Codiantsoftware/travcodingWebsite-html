import React, { useEffect, useState } from "react";
import { Image } from "../../../components/CommonElement";
import { Button } from "../../../components/Frontend/UiElements";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion } from "framer-motion"

function Home() {

    // Banner Section
    const [activeBannerIndex, setActiveBannerIndex] = useState();
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);
    const handleScroll = () => {
        const items = containerRef.current.querySelectorAll(".benefitSec_main_item");
        const viewportHeight = window.innerHeight;

        items.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            if(rect.top < viewportHeight * 0.5) {
                setActiveIndex(index);
            }
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const bannerData = [
        { id: 1, source: 'banner-card01.webp', label: 'Hotels' },
        { id: 2, source: 'banner-card02.webp', label: 'Vacation Rentals' },
        { id: 3, source: 'banner-card03.webp', label: 'Condos' },
        { id: 4, source: 'banner-card04.webp', label: 'Cruises' },
        { id: 5, source: 'banner-card05.webp', label: 'Cars' },
        { id: 6, source: 'banner-card06.webp', label: 'Insurance' },
        { id: 7, source: 'banner-card07.webp', label: 'Attractions' },
    ];
    return (
        <>
            <main className="homePage">
                {/* Banner Section @S */}
                <section className="bannerSec">
                    <div className="container text-center">
                        <h1 className="bannerSec_title">
                            We are More than a <br /> <span className="gradient">Travel Technology Company</span>
                        </h1>
                        <div className={`bannerSec_gridlist ${activeBannerIndex !== undefined ? 'active' : ''}`}>
                            {bannerData.map((item, index) => {
                                const yValue = Math.random() * (50 - 25) + (index % 2 === 0 ? 25 : -25);
                                const delayValue = Math.random() * (0.4 - 0.1) + 0.1;
                                return (
                                    <motion.div 
                                        key={index}
                                        initial={{ opacity: 0, y: yValue }}  // Dynamic y value based on random calculation
                                        whileInView={{ opacity: 1, y: 0 }}   // y=0 when in view
                                        transition={{
                                            duration: 0.7,
                                            delay: delayValue,  // Dynamic delay value
                                            ease: "easeOut",
                                        }}
                                    >
                                        <div 
                                            className={`bannerSec_imgbox bannerSec_imgbox-${index + 1} ${activeBannerIndex === index ? 'active' : ''}`} 
                                            onMouseEnter={() => setActiveBannerIndex(index)} 
                                            onMouseLeave={() => setActiveBannerIndex(undefined)}
                                        >
                                            <Image imageFor="frontend" source={item.source} className="img-fluid" alt="" />
                                            <span>{item.label}</span>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                        <div className="bannerSec_cntbox">
                            <p>We provide <span className="font-md"> supply solutions </span> to drive revenue to <span className="font-md">your business</span> </p>
                            <div className="d-flex justify-content-center align-items-center gap-2 gap-lg-3 flex-wrap">
                                <Button variant="outline-primary" label="Connect with us" className="ripple-effect text-uppercase iconRight" iconPosition="right" showIcon={true} iconClass="right-arrow" />
                                <Button variant="primary" label="Get Started" className="ripple-effect text-uppercase iconRight" iconPosition="right" showIcon={true} iconClass="right-arrow" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Banner Section @E */}

                {/* Business Section @S */}
                <section className="businessSec position-relative py-80">
                    <Container>
                        <div className="commonHead text-center mx-auto">
                            <h2 className="commonHead_title font-md text-white">The Hotel & Resort <br className="d-md-block d-noe" /> Business is in Our Blood...</h2>
                            <p className="commonHead_txt fs-18 light mb-2">Most of travcoding's technical teams have experience in travel: GTA, Tourico, Hotelbeds, <Link to="#" className="text-white text-decoration-underline font-md">Despegar.com</Link>, Pricetravel, Almundo and more
                            </p>
                            <p className="commonHead_txt fs-18 light mb-0">Our development team speaks many languages fluently and reside in numerous countries giving them a broader understanding of different geographies and their unique needs.
                            </p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Button variant="light" label="Meet the team" className="ripple-effect-dark text-uppercase iconRight" iconPosition="right" showIcon={true} iconClass="right-arrow" />
                        </div>
                    </Container>
                    <div className="businessSec_left">
                        <Image imageFor="frontend" source="business-left.svg" className="img-fluid" alt="left-arrow-image" />
                    </div>
                    <div className="businessSec_right">
                        <Image imageFor="frontend" source="business-right.svg" className="img-fluid" alt="left-arrow-image" />
                    </div>
                </section>
                {/* Business Section @E */}

                {/* Acquainted Section @S */}
                <section className="acquaintedSec overflow-hidden">
                    <Container>
                        <div className="commonHead text-center mx-auto">
                            <h2 className="commonHead_title font-md text-black">Let's get acquainted</h2>
                            <p className="commonHead_txt fs-18 dark mb-0">Our Goal Today is simply to listen to your needs and understand your business a little better so we may offer some solutions if we are positioned to assist.
                            </p>
                        </div>
                        <Row className="g-20">
                            <Col lg={4} md={6} >
                                <motion.div
                                    className="solutionCard solutionCard_apis d-flex flex-column h-100"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.7,
                                        delay: 0.2,
                                        ease: "easeOut",
                                    }}
                                >
                                    <h3 className="solutionCard_title text-white">Code your own with our APIs</h3>
                                    <p className="solutionCard_text light mb-0">After years of working with the best condos, and vacation rental’s in the world, we are direct contracting the best of the best.</p>
                                    <ul className="solutionCard_apis_logo mb-0 d-flex justify-content-between list-unstyled flex-sm-row flex-column">
                                        <li>
                                            <motion.div
                                                className="icon"
                                                initial={{ opacity: 0, scale: 0.3 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    duration: 0.6,
                                                    delay: 0.3,
                                                    ease: "easeOut",
                                                }}>
                                                <em className="icon-multiple-tool"></em>
                                            </motion.div>
                                            <span>Multiple <br className="d-sm-block d-none" /> Tools</span>
                                        </li>
                                        <li>
                                            <motion.div
                                                className="icon"
                                                initial={{ opacity: 0, scale: 0.3 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    duration: 0.6,
                                                    delay: 0.3,
                                                    ease: "easeOut",
                                                }}>
                                                <em className="icon-scalability"></em>
                                            </motion.div>
                                            <span>Scalability <br className="d-sm-block d-none" />Solution</span>
                                        </li>
                                        <li>
                                            <motion.div
                                                className="icon"
                                                initial={{ opacity: 0, scale: 0.3 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    duration: 0.6,
                                                    delay: 0.3,
                                                    ease: "easeOut",
                                                }}>
                                                <em className="icon-desynchronization"></em>
                                            </motion.div>
                                            <span>System <br className="d-sm-block d-none" />Desynchronization</span>
                                        </li>
                                    </ul>
                                </motion.div>
                            </Col>
                            <Col lg={4} md={6}>
                                <motion.div className="solutionCard solutionCard_whiteLabel d-flex flex-column h-100 p-0"
                                    initial={{ opacity: 0, y: -50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.7,
                                        delay: 0.22,
                                        ease: "easeIn",
                                    }}>
                                    <Image imageFor="frontend" source="white-label.webp" className="img-fluid" alt="card-image" />
                                    <div className="solutionCard_whiteLabel_cnt">
                                        <h3 className="solutionCard_title text-black">White label travel solutions</h3>
                                        <p className="solutionCard_text dark mb-0">After years of working with the best condos, and vacation rental’s in the world, we are direct contracting the best of the best.</p>
                                    </div>
                                </motion.div>
                            </Col>
                            <Col lg={4}>
                                <motion.div className="solutionCard solutionCard_host d-flex flex-column h-100"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.7,
                                        delay: 0.25,
                                        ease: "easeOut",
                                    }}
                                >
                                    <div className="solutionCard_host_logo">
                                        <em className="icon-calling"></em>
                                    </div>
                                    <div className="solutionCard_host_cnt">
                                        <h3 className="solutionCard_title text-white">Host Agency Solutions</h3>
                                        <p className="solutionCard_text light mb-0">We Love Host Agencies, we think they hold the key to bringing back service to travel. We have amazing tools to increase your offerings and margins.</p>
                                        <Button variant="light" label="Get Started" className="ripple-effect-dark text-uppercase iconRight" iconPosition="right" showIcon={true} iconClass="right-arrow" />
                                    </div>
                                </motion.div>
                            </Col>
                            <Col lg={6}>
                                <motion.div className="solutionCard md solutionCard_merchant d-flex align-items-center"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.7,
                                        delay: 0.27,
                                        ease: "easeOut",
                                    }}>
                                    <div className="solutionCard_merchant_cnt">
                                        <h3 className="solutionCard_title text-white">Merchant of Record</h3>
                                        <p className="solutionCard_text light mb-0">We process millions of dollars in transactions annually through trusted payment providers like Stripe, <Link to="#" className="text-decoration-underline text-white font-md">Authorize.net</Link>, and Plaid. This ensures secure, reliable, and seamless payments, including ACH transfers and more.</p>
                                        <Button variant="primary" label="Get Started" className="ripple-effect text-uppercase iconRight" iconPosition="right" showIcon={true} iconClass="right-arrow" />
                                    </div>
                                </motion.div>
                            </Col>
                            <Col lg={6}>
                                <motion.div className="solutionCard md solutionCard_usBased" initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.7,
                                        delay: 0.29,
                                        ease: "easeOut",
                                    }}>
                                    <div className="solutionCard_usBased_cnt">
                                        <h3 className="solutionCard_title text-black">Us based customer service</h3>
                                        <p className="solutionCard_text dark mb-0">Our dedicated customer service team is proudly based in the US, with offices in Asheville, NC, and Orlando, FL. We are committed to providing personalized support and ensuring a seamless experience for our valued customers</p>
                                        <Button variant="primary" label="connect with us" className="ripple-effect text-uppercase iconRight" iconPosition="right" showIcon={true} iconClass="right-arrow" />
                                    </div>
                                </motion.div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* Acquainted Section @E */}

                {/* Benefit Section @S */}
                <section className="benefitSec">
                    <Container>
                        <div className="benefitSec_inner d-flex flex-wrap flex-lg-nowrap">
                            <div className="benefitSec_thumbs">
                                <div className="benefitSec_thumbs_sticky d-flex flex-lg-column w-100">
                                    <div
                                        className={`benefitSec_thumbs_item ${
                                            activeIndex === 0 ? "active" : ""
                                        }`}
                                    >
                                        Loyalty & Rewards
                                    </div>
                                    <div
                                        className={`benefitSec_thumbs_item ${
                                            activeIndex === 1 ? "active" : ""
                                        }`}
                                    >
                                        Employee Perks
                                    </div>
                                </div>
                            </div>
                            <div className="benefitSec_main" ref={containerRef}>
                                <div
                                    className={`benefitSec_main_item d-flex flex-wrap align-items-start ${
                                        activeIndex === 0 ? "active" : ""
                                    }`}
                                >
                                    <div className="benefitSec_main_content">
                                        <h2>Loyalty & Rewards</h2>
                                        <p>With our Loyalty & Rewards Program, every booking brings you closer to extraordinary travel perks. Earn points, rise through our reward tiers, and unlock exclusive benefits designed to make your travel even more rewarding.</p>
                                        <hr />
                                        <h3>Key Benefits</h3>
                                        <ul>
                                            <li>Earn points on every dollar spent.</li>
                                            <li>Unlock tier-based benefits like bonus points and exclusive offers.</li>
                                            <li>Redeem points for free stays, rentals, and more.</li>
                                            <li>Get personalized deals tailored just for you.</li>
                                            <li>Access special events and exclusive travel experiences.</li>
                                        </ul>
                                        
                                    </div>
                                    <div className="benefitSec_main_imgbox">
                                        <Image imageFor="frontend" source="slider-01.webp" className="img-fluid" alt="loyalty-rewards" />
                                    </div>
                                </div>
                                <div
                                    className={`benefitSec_main_item d-flex flex-wrap align-items-start ${
                                        activeIndex === 1 ? "active" : ""
                                    }`}
                                >
                                    <div className="benefitSec_main_content">
                                        <h2>Employee Perks</h2>
                                        <p>Show your employees you value them with exclusive travel benefits. Whether it’s discounted stays or a dedicated travel portal, our Employee Perks Program helps businesses boost satisfaction and productivity while making travel easier for everyone.</p>
                                        <hr />
                                        <h3>Key Benefits</h3>
                                        <ul>
                                            <li>Save on travel with employee-exclusive discounts.</li>
                                            <li>Access a customized booking portal for your team.</li>
                                            <li>Offer travel perks as an incentive for productivity and morale.</li>
                                            <li>Enjoy streamlined corporate travel management.</li>
                                            <li>Provide flexibility and peace of mind with easy booking tools.</li>
                                        </ul>
                                    </div>
                                    <div className="benefitSec_main_imgbox">
                                        <Image imageFor="frontend" source="slider-02.webp" className="img-fluid" alt="employee-perks" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                {/* Benefit Section @E */}
            </main>
        </>
    );
}

export default Home;
