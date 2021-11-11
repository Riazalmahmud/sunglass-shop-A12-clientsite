import React from 'react';
import Header from '../Header/Header';
import AboutSection from '../SharePage/AboutSection/AboutSection';
import CollectionCategoris from '../SharePage/CollectionCategories/CollectionCategoris';
import CustomerReviews from '../SharePage/CustomerReviews/CustomerReviews';
import HomeServices from './HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            <Header className="py-5"></Header>
            <CollectionCategoris></CollectionCategoris>
            <HomeServices></HomeServices>
            <AboutSection></AboutSection>
            <CustomerReviews></CustomerReviews>
        </div>
    );
};

export default Home;