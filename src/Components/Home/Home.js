import React from 'react';
import Header from '../Header/Header';
import bannerBgImg from '../../images/coverBg.jpg'
import Banner from '../HomeComponents/Banner';

const Home = () => {

    const bannerBg = {
        background: `url(${bannerBgImg})`,
        backgroundSize: "cover"
    }
    return (
        <div style={bannerBg} className="py-2">
            <Header />
            <Banner />
        </div>
    );
};

export default Home;