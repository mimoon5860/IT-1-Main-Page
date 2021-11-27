import React from 'react';
import Header from '../Header/Header';
import bannerBgImg from '../../images/coverBg.jpg'
import Banner from '../HomeComponents/Banner';
import Offer from '../HomeComponents/Offer';
import Favorite from '../HomeComponents/Favorite';
import Refer from '../HomeComponents/Refer';
import refer from '../../images/Refer&Earn1.png'
import Properties from '../HomeComponents/Properties';
import QuickStay from '../HomeComponents/QuickStay';

const Home = () => {

    const bannerBg = {
        background: `url(${bannerBgImg})`,
        backgroundSize: "cover"
    }

    const referStyle = {
        backgroundImage: `url(${refer})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <>
            <div style={bannerBg} className="py-2">
                <Header />
                <Banner />
            </div>
            <div className="m-3">
                <Offer />
            </div>
            <div className="m-5">
                <Favorite />
            </div>
            <div style={referStyle}>
                <Refer />
            </div>
            <div className="m-5">
                <Properties />
            </div>
            <div className="m-5">
                <QuickStay />
            </div>
        </>
    );
};

export default Home;