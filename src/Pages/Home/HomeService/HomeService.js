import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './HomeService.css'
const HomeService = (props) => {
    const { img, name, seller } = props.service

    return (
        <div>
            <div className="Container">

                <Card className="service-design">
                    <img src={img} alt="" />
                    <Card.Body>
                        <Card.Title>{name.slice(0, 100)}</Card.Title>
                        <Card.Title> barnd {seller}</Card.Title>
                        <Button variant="light">buy now</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default HomeService;