import React from 'react';
import { Col, Row } from 'react-bootstrap';
import verifyImg from "../../images/2.png";
import offerImg from "../../images/5.png";
import connectImg from "../../images/3.png"

const Offer = () => {
    return (
        <Row>
            <Col md={4}><img className="img-rounded" width="100%" src={verifyImg} alt="" /></Col>
            <Col md={4}><img className="img-rounded" width="100%" src={offerImg} alt="" /></Col>
            <Col md={4}><img className="img-rounded" width="100%" src={connectImg} alt="" /></Col>
        </Row>
    );
};

export default Offer;