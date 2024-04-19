import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from '../Shared/Banner';
import Hero from '../Shared/Hero';
import homeSvg from "../assets/Hero/home.svg"
import BannerCards from '../components/Home/BannerCards';

const Home = () => {
    return (
        <div className="relative ">
            <Navbar />
            <div className='bg-[#FECEAD]'>
                <Banner />
            </div>
            <Hero />
            <div className="absolute z-10 top-full w-full transform -translate-y-1/4 md:-translate-y-1/2">
                <BannerCards />
            </div>
        </div>
    );
};

export default Home;