import React from 'react';
import './Header.css';
import { Carousel } from 'react-bootstrap';
import CarouselImg01 from '../../image/slider-2-1.jpg'
import CarouselImg02 from '../../image/slider-1-2.jpg'
import CarouselImg03 from '../../image/slider-3-1.jpg'
const Header = () => {
    return (
        <div className="header-size">
            <Carousel variant="light" >
                <Carousel.Item>
                    <img
                        className="d-block w-80 img-fluid"
                        src={CarouselImg01}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={CarouselImg02}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={CarouselImg03}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;