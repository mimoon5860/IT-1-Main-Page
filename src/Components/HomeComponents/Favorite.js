import React from 'react';
import { Col, Row } from 'react-bootstrap';
import pg from '../../images/PG.png';
import apartment from '../../images/Apartment.png';
import independent from '../../images/IndependentRoom.png'

const Favorite = () => {
    return (
        <Row className="align-items-center">
            <Col md={3}>
                <div >
                    <div className="leftBorder py-1 w-75 mx-3">
                        <h3 className="">Find your favorite stay!</h3>
                    </div>
                    <h4 className="mx-3">
                        A new city might feel too new to roam around and look for a decent rental stay, is'nt it?
                        NO need to worry,
                        find the best PG in few clicks!
                    </h4>
                </div>
            </Col>
            <Col className="text-center" md={3}>

                <img width='80%' src={pg} alt="" />
                <h3>Paying Guest(PG)</h3>

            </Col>
            <Col className="text-center" md={3}>
                <img width='80%' src={apartment} alt="" />
                <h3>Flat/Apartment</h3>
            </Col>
            <Col className="text-center" md={3}>
                <img width='80%' src={independent} alt="" />
                <h3>Independent Room</h3>
            </Col>
        </Row>
    );
};

export default Favorite;