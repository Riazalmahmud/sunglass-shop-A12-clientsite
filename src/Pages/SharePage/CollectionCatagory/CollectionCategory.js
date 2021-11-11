import React from 'react';
import { Card, Row } from 'react-bootstrap';
import './CollectionCategores.css';
import { Button } from 'react-bootstrap';
const CollectionCategory = (props) => {
    const { img, name } = props.collection;
    console.log(props.collection)
    return (
        <div>
            <div className="container">
                <Card className="collection">
                    <img src={img} alt="" />
                    <Card.Body>
                        <Card.Title>{name.slice(0, 18)}</Card.Title>
                        <Button variant="light">buy now</Button>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default CollectionCategory;