import React from 'react';
import { Col, Row } from 'react-bootstrap';

import refer2 from '../../images/Refer&Earn2.png'

const Refer = () => {
    return (
        <Row className="me-2">
            <Col md={4}></Col>
            <Col md={8}><img width="100%" src={refer2} alt="" /></Col>
        </Row>
    );
};

export default Refer;