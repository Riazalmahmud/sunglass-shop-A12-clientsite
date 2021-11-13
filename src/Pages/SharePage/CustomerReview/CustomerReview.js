import React from 'react';
import { Card } from 'react-bootstrap';
import './CustomerReview.css';
const CustomerReview = (props) => {
    const { img, review, name, description, title } = props.review
    return (
        <div>
            <Card.Body className="review-design py-5 my-5">
                <img src={img} alt="" />

                <h3 className="fw-bold"> {name} </h3>
                <h5 className="fw-bold"> review :{review} </h5>
                <p> {description.slice(0, 200)} </p>
            </Card.Body>
        </div>
    );
};

export default CustomerReview;