import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Footer />
        </div>
    );
};

export default Home;