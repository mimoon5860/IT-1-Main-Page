import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container>
            <div>
                <div>
                    <h2>Want Easy To Stay?</h2>
                    <h2>Karo QuickStay!</h2>
                </div>
                <div>
                    <div>
                        <Row>
                            <Col className="text-center" sm>
                                <h3>25000+</h3>
                                <h3>Trusted Users</h3>
                            </Col>
                            <Col className="text-center" sm>
                                <h3>4000+</h3>
                                <h3>Verified Properties PAN India</h3>
                            </Col>
                            <Col className="text-center" sm>
                                <h3>17.5 Lakh+</h3>
                                <h3>Total Brokerages Saved</h3>
                            </Col>
                        </Row>
                    </div>
                    <div className="text-center mx-4">

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
                                <input className="border-0 h-100 input textField" type="text" placeholder="Large text" />
                            </Col>
                            <Col style={{ padding: "0" }} sm={2}>
                                <Button className="w-100 rounded-0 h-100" variant="danger" size="lg">
                                    Search
                                </Button>
                            </Col>
                        </Row>

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Banner;