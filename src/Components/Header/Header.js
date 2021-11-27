import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import headerImg from '../../images/Logo.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/" >
                    <img width='50px' src={headerImg} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle style={{ backgroundColor: "black" }} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav >
                        <Nav.Link className="text-dark  px-3  fw-bold" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="text-dark  px-3 fw-bold" as={Link} to="#">About</Nav.Link>
                        <Nav.Link className="text-dark  px-3 fw-bold" as={Link} to="#">Blog</Nav.Link>
                        <Nav.Link className="text-dark  px-3 fw-bold" as={Link} to="#">Contact Us</Nav.Link>
                        <Nav.Link className="text-dark px-3 fw-bold border border-danger border-2" as={Link} to="#">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;