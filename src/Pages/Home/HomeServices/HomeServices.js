import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HomeService from '../HomeService/HomeService';

const HomeServices = () => {
    const [services, setSerivics] = useState([])


    useEffect(() => {
        fetch('https://hidden-mesa-07077.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setSerivics(data))
    }, [])

    return (
        <div>
            <h1 className="py-5">our service section</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    services !== undefined &&
                    services.slice(0, 6).map(service => <HomeService
                        key={services.key}
                        service={service}
                    >

                    </HomeService>)
                }
            </Row>


        </div>
    );
};

export default HomeServices;