import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container>
            <div className="mx-5 mt-5 pt-5">
                <div className="my-4">
                    <h2>Want Easy To Stay?</h2>
                    <h2>Karo QuickStay!</h2>
                </div>
                <div className="searchWrapper px-5 py-4">
                    <div className="text-white py-2">
                        <Row>
                            <Col className="text-center" sm>
                                <h3>25000+</h3>
                                <h4>Trusted Users</h4>
                            </Col>
                            <Col className="text-center" sm>
                                <h3>4000+</h3>
                                <h4>Verified Properties PAN India</h4>
                            </Col>
                            <Col className="text-center" sm>
                                <h3>17.5 Lakh+</h3>
                                <h4>Total Brokerages Saved</h4>
                            </Col>
                        </Row>
                    </div>
                    <div className="text-center px-4 py-2">
                        <Row>
                            <Col style={{ padding: "0" }} sm={2}>
                                <select className="input h-100 border-0 options" name="cars" id="cars">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </Col>
                            <Col style={{ padding: "0" }} sm={8}>
                                <input className="border-0 h-100 input textField" type="text" placeholder="Search Locality..." />
                            </Col>
                            <Col style={{ padding: "0" }} sm={2}>
                                <Button className="w-100 rounded-0 h-100" variant="danger" size="lg">
                                    Search
                                </Button>
                            </Col>
                        </Row>

                    </div>
                </div>
                <div className="text-center my-5">
                    <span className="bg-white py-3 rounded-pill">
                        <span className="px-5 fst-italic fw-bold">Do you own a residential property? List it here...</span>
                        <i style={{ cursor: 'pointer' }} class="fas fa-chevron-right bg-warning m-1 circle fw-bold"></i>
                    </span>
                </div>
            </div>
        </Container>
    );
};

export default Banner;