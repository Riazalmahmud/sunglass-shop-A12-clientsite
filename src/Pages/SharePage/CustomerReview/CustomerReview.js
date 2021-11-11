import React from 'react';
import { Card } from 'react-bootstrap';
import './CustomerReview.css';
const CustomerReview = (props) => {
    const { img, rating, name } = props.review
    console.log(props.review)
    return (
        <div>
            <Card.Body className="review-design">
                <img src={img} alt="" />
                <Card.Text>
                    {rating}
                </Card.Text>
                <p> {name} </p>
            </Card.Body>
        </div>
    );
};

export default CustomerReview;