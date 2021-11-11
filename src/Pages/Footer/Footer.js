import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <div className="row bg-dark text-white py-5 footer-desing">
                <div className="col-md-3 col-md-lg-3 col-sm-6 col-12">
                    <h2>YOUR Brand INFO </h2>
                    <p>address: Dotterhat, Noakhali,Dhaka ,Bangladesh</p>
                    <p>Email riazalmahmud041@gmail.com</p>
                    <p>Phone: +12345678965</p>
                </div>
                <div className="col-md-3 col-md-lg-3 col-sm-6 col-12">
                    <h3>Contact</h3>
                    <NavLink to="/contact">Contact us </NavLink>
                    <NavLink to="/about us">About us </NavLink>
                    <NavLink to="/TramsOFservice">term of service </NavLink>
                    <NavLink to="/contact">Contact us </NavLink>
                </div>
                <div className="col-md-3 col-md-lg-3 col-sm-6 col-12">
                    <h3>SERVICES</h3>
                    <NavLink to="/Sale"> Sale </NavLink>
                    <NavLink to="/QuickShip"> Quick Ship</NavLink>
                    <NavLink to="/NewDesign"> New Design</NavLink>
                    <NavLink to="/ProtectionPlan">Protection plan </NavLink>
                </div>
                <div className="col-md-3 col-md-lg-3 col-sm-6 col-12">
                    <h3>CATEGORIES</h3>
                    <NavLink to="/Watches"> Watches </NavLink>
                    <NavLink to="/watch"> watch</NavLink>
                    <NavLink to="/watchAccessories">watch Accessories</NavLink>
                    <NavLink to="/ProtectionPlan">Clock </NavLink>
                </div>
            </div>

            <div className="contaier">
                <p className="text-white bg-dark py-3">Copyright &copy; Riazalmahmud.com</p>
            </div>
        </div>
    );
};

export default Footer;