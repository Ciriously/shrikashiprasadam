import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from '../Shared/Banner';
import Hero from '../Shared/Hero';
import homeSvg from "../assets/Hero/home.svg" // Adjust the import path based on your actual directory structure
import BannerCards from '../components/Home/BannerCards';

const Home = () => {
    return (
        <div className="relative">
            <Navbar />
            <Banner />
            <Hero bgImage={homeSvg} />
            <div className="absolute top-full w-full transform -translate-y-1/2">
                <BannerCards />
            </div>
        </div>
    );
};

export default Home;