import React from 'react';
import { Card, Row } from 'react-bootstrap';
import './CollectionCategores.css';
import { Button } from 'react-bootstrap';
const CollectionCategory = (props) => {
    const { img, name } = props.collection;

    return (
        <div>
            <div className="container">
                <Card className="collection my-3 py-3">
                    <img src={img} alt="" />
                    <Card.Body>
                        <Card.Title>{name.slice(0, 18)}</Card.Title>

                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default CollectionCategory;