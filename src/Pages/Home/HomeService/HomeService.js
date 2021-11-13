import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './HomeService.css'
const HomeService = (props) => {
    const { img, name, seller, discretion, price } = props.service
    console.log(props.service)

    return (
        <div>
            <div className="Container">

                <Card className="service-design">
                    <img className="my-3 py-3" src={img} alt="" />
                    <Card.Body className="my-3">
                        <p>{discretion.slice(0, 150)}</p>
                        <Card.Title> price :${price}</Card.Title>
                        <Button variant="light">buy now</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default HomeService;