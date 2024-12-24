import React, { useEffect, useRef } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Button } from "../../UiElements";
import { Image } from "../../../CommonElement";
import { Link } from "react-router-dom";

export function Header() {
    const headerRef = useRef(null);
    useEffect(() => {
        const updateBodyPadding = () => {
            const headerHeight = headerRef.current?.offsetHeight || 0;
            document.body.style.paddingTop = `${headerHeight}px`;
        };
        updateBodyPadding();
        window.addEventListener("resize", updateBodyPadding);
        return () => {
            window.removeEventListener("resize", updateBodyPadding);
            document.body.style.paddingTop = "";
        };
    }, []);
    return (
        <>
            <header className="header position-fixed w-100" ref={headerRef}>
                <Container>
                    <Navbar expand="lg">
                        <Navbar.Brand as="div">
                            <Link to="/">
                                <Image imageFor="frontend" source="logo.svg" className="img-fluid" alt="travcoding-logo" />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Item>
                                    <Nav.Link as={Link} to="#!" className="active">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to="#!">About Us</Nav.Link>
                                </Nav.Item>
                                <NavDropdown title="Solutions" id="collapsible-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="#!">Solutions 1</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="#!">Solutions 2</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Products" id="collapsible-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="#!">Products 1</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="#!">Products 2</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Item>
                                    <Nav.Link as={Link} to="#!">Contact us</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                        {/* Book Button */}
                        <div className="d-flex header_right align-items-center">
                            <Link to="tel:7704861181" className="header_right_link d-flex align-items-center"><em className="icon-call" />770-486-1181</Link>
                            <Navbar.Toggle aria-controls="basic-navbar-nav">
                                <span className="navbar-toggler-icon" />
                                <span className="navbar-toggler-icon" />
                                <span className="navbar-toggler-icon" />
                            </Navbar.Toggle>
                        </div>
                    </Navbar>
                </Container>
            </header>
        </>
    );
}