import React from 'react';
import { Col, Row } from 'react-bootstrap';
import property from '../../images/GenuinePropertyDetails.png';
import customerService from '../../images/CustomerSupport.png';
import timeSave from '../../images/TimeSaving.png';

const QuickStay = () => {
    return (
        <Row className="align-items-center">
            <Col md={3}>
                <div >
                    <div className="leftBorder py-1 w-75 mx-3">
                        <h3 className="">Why stay at QuickStay?</h3>
                    </div>
                    <h4 className="mx-3">
                        We want to help you simplify your life and cut out the unnecessary hustle of finding a perfect rental stay.
                    </h4>
                </div>
            </Col>
            <Col className="text-center" md={3}>

                <img width='80%' src={property} alt="" />
                <h3>Genuine Property Details</h3>

            </Col>
            <Col className="text-center" md={3}>
                <img width='80%' src={customerService} alt="" />
                <h3>End to End Customer Support</h3>
            </Col>
            <Col className="text-center" md={3}>
                <img width='80%' src={timeSave} alt="" />
                <h3>Time Saving & Hassle Free</h3>
            </Col>
        </Row>
    );
};

export default QuickStay;