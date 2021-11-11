import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CustomerReview from '../CustomerReview/CustomerReview';

const CustomerReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('./FakeDb.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h3>customers reviews </h3>
            <Row xs={1} md={3} className="g-4">
                {
                    reviews !== undefined &&
                    reviews.slice(16, 25).map(review => <CustomerReview
                        key={review.id}
                        review={review}
                    ></CustomerReview>)
                }
            </Row>
        </div>
    );
};

export default CustomerReviews;