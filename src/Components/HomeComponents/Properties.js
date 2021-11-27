import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import room from '../../images/coverBg.jpg';
import customer from '../../images/user-boy.png';
import customer2 from '../../images/user-girl.png'

const Properties = () => {
    const data = [
        {
            name: "Private Room",
            price: 6500,
            address: "Sector 22, Chandigarh",
            img: room,
            user: customer
        },
        {
            name: "Private Room",
            price: 5000,
            address: "Sector 46, Chandigarh",
            img: room,
            user: customer2
        },
        {
            name: "Private Room",
            price: 8500,
            address: "Vip Road, Zirakpur",
            img: room,
            user: customer,
            user2: customer2
        }
    ]
    return (
        <Row >
            <Col md={3}>
                <div >
                    <div className="leftBorder py-1 w-75 mx-3">
                        <h3 className="">QuickStay Exclusive Properties</h3>
                    </div>
                    <h4 className="mx-3">
                        We won't show you photos that are too good to be true.
                        Find the best room for rent near you!
                    </h4>
                </div>
            </Col>
            {
                data.map(room => <ShowProperty key={room.price} room={room} />)
            }
            <div className="d-flex flex-row-reverse my-2">
                <h4 className="fst-italic" style={{ cursor: 'pointer', color: "#6F120F" }}>See All <i className="fas fa-chevron-right m-1 fw-bold"></i></h4>
            </div>
        </Row>
    );
};

const ShowProperty = ({ room }) => {
    const { name, price, address, img, user } = room;
    return (
        <Col className="text-center" md={3}>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <div className="d-flex my-3 justify-content-between">
                        <Card.Title>{name}</Card.Title>
                        <Card.Title>₹{price}</Card.Title>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className='text-start'>
                            <div>
                                <i className="fas fa-map-marker-alt"></i>
                                <span className="ms-2">{address}</span>
                            </div>
                            <p>Fully-Finished</p>
                        </div>
                        <div>
                            <img width="50px" src={room?.user2} alt="" />
                            <img width="50px" src={user} alt="" />
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Properties;