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
                    <div>
                        <Row className="mx-auto bg-white" >
                            <Col className="text-center bg-light" sm={2}>
                                <select name="cars" id="cars">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </Col>
                            <Col className="text-center" sm={6}>
                                <Form.Control className="border-0" size="lg" type="text" placeholder="Large text" />
                            </Col>
                            <Col className="text-center" sm={2}>
                                <Button variant="danger" size="lg">
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