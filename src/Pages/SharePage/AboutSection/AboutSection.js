import React from 'react';
// import './AboutSection.css'
import aboutImage from '../../../image/backgound-1.jpg'
import { Button, NavLink } from 'react-bootstrap';
const AboutSection = () => {
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-12 col-12 py-5 my-5">
                        <h4 className="fw-bold pb-3">BD PREMIER STORE FOR WRIST WATCHES</h4>
                        <p className="fw-bold">Sunglasses are much more than just a fashion statement, but we often forget this important point. When you go sunglasses shopping, are you just trying to find the trendiest pair? Most likely, it is our lack of information about the danger of UV ray exposure that contributes to our inconsistent use of sunglasses. Here are 10 common myths associated with sunglasse</p>
                        <Button variant="outline-secondary">About us</Button>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12 col-12 dark-pink-color">
                        <img src={aboutImage} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutSection;