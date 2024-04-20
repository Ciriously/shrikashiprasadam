import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from '../Shared/Banner';
import Hero from '../Shared/Hero';
import ProductCards from '../components/ui/ProductCards'; // Import the ProductCards component
import homeSvg from "../assets/Hero/home.svg";
import BannerCards from '../components/Home/BannerCards';
import BestSeller from '../components/Home/BestSeller';
import NewArrivals from '../components/Home/NewArrivals';

const Home = () => {


    return (
        <div className="relative">
            <Navbar />
            <div className='bg-[#FECEAD]'>
                <Banner />
            </div>
            <div className="relative">
                <Hero />
                <div className="absolute z-10 top-full w-full hidden transform -translate-y-1/4 md:-translate-y-1/2 lg:block">
                    <BannerCards />
                </div>
            </div>
            <div className="w-2/3 mx-auto mt-20 lg:mt-[20rem]">
                <BestSeller />

            </div>
            <div className="w-2/3 mx-auto mt-20 lg:mt-[14rem]">

                <NewArrivals />

            </div>
        </div>
    );
};


export default Home;
